// ---------- Genre Groups (as strings) ----------
// Instead of a fixed object with arrays, we now let each group be defined
// by an input field and toggled ON/OFF via a button.

// currentGenreTags will be updated from the union of all enabled groups.
let currentGenreTags = [];

// This function reads each .genre-group row,
// and if its toggle button is enabled (data-enabled === "true"),
// it takes the value from the input field (a comma-separated string),
// splits it into an array (trimming each value),
// and then creates the union of all groups.
function updateCurrentGenreTags() {
  const groups = document.querySelectorAll('.genre-group');
  let union = [];
  groups.forEach(group => {
    const toggleBtn = group.querySelector('.toggle-group');
    const isEnabled = toggleBtn.getAttribute('data-enabled') === "true";
    if (isEnabled) {
      const text = group.querySelector('input').value;
      const tags = text.split(",").map(t => t.trim()).filter(t => t.length > 0);
      union = union.concat(tags);
    }
  });
  // Remove duplicates
  currentGenreTags = Array.from(new Set(union));
}

// ---------- Tag Generation and Utility Functions ----------

// Keep track of recently used tags (they won't reappear for MAX_MEMORY generations)
const recentlyUsedTags = new Set();
const MAX_MEMORY = 5;
let generationCount = 0;

/* Return a random tag from currentGenreTags excluding usedTags and recentlyUsedTags */
function getUniqueRandomTag(usedTags) {
  const availableTags = currentGenreTags.filter(
    tag => !usedTags.includes(tag) && !recentlyUsedTags.has(tag)
  );
  if (availableTags.length === 0) {
    // Clear some old tags if needed
    const tagsToRemove = Math.ceil(recentlyUsedTags.size * 0.2);
    const tagsArray = Array.from(recentlyUsedTags);
    for (let i = 0; i < tagsToRemove; i++) {
      recentlyUsedTags.delete(tagsArray[i]);
    }
    return getUniqueRandomTag(usedTags);
  }
  return availableTags[Math.floor(Math.random() * availableTags.length)];
}

/* Return an array of 'count' unique random tags */
function getUniqueRandomTags(count, usedTags) {
  const result = [];
  const allUsedTags = [...usedTags];
  for (let i = 0; i < count; i++) {
    const tag = getUniqueRandomTag(allUsedTags);
    result.push(tag);
    allUsedTags.push(tag);
  }
  return result;
}

/* Create a tag item element */
function createTagItemWithText(text) {
  const tagItem = document.createElement("div");
  tagItem.className = "tag-item";

  const tagText = document.createElement("span");
  tagText.className = "tag-text";
  tagText.textContent = text;

  const lockIcon = document.createElement("span");
  lockIcon.className = "lock-icon";
  lockIcon.innerHTML = '<i class="fas fa-lock-open"></i>';
  lockIcon.addEventListener("click", () => {
    tagItem.classList.toggle("locked");
    const iconElem = lockIcon.querySelector("i");
    if (tagItem.classList.contains("locked")) {
      iconElem.classList.remove("fa-lock-open");
      iconElem.classList.add("fa-lock");
    } else {
      iconElem.classList.remove("fa-lock");
      iconElem.classList.add("fa-lock-open");
    }
    updateFinalPrompt();
  });

  tagItem.appendChild(tagText);
  tagItem.appendChild(lockIcon);
  return tagItem;
}

/* Update the final prompt display (locked tags joined by commas) */
function updateFinalPrompt() {
  const finalPromptElem = document.getElementById("finalPrompt");
  const lockedTags = [];
  document.querySelectorAll(".tag-item.locked").forEach(item => {
    lockedTags.push(item.querySelector(".tag-text").textContent);
  });
  finalPromptElem.textContent =
    lockedTags.join(", ") || "Your final prompt will appear here";
}

/* Spin a tag item then set its final text */
function spinTag(tagItem, finalValue, duration = 800, intervalTime = 50) {
  return new Promise((resolve) => {
    const tagText = tagItem.querySelector(".tag-text");
    tagItem.classList.add("spinning");
    let elapsed = 0;
    const interval = setInterval(() => {
      tagText.textContent = currentGenreTags[Math.floor(Math.random() * currentGenreTags.length)];
      elapsed += intervalTime;
      if (elapsed >= duration) {
        clearInterval(interval);
        tagItem.classList.remove("spinning");
        tagText.textContent = finalValue;
        resolve();
      }
    }, intervalTime);
  });
}

/* Generate new tags for all unlocked cells */
async function generateTags() {
  updateCurrentGenreTags(); // update pool from genre groups
  updateTagItems();         // ensure 9 tag items exist
  const lockedTags = Array.from(document.querySelectorAll(".tag-item.locked"))
    .map(item => item.querySelector(".tag-text").textContent);
  const unlockedCells = Array.from(document.querySelectorAll(".tag-item:not(.locked)"));
  const newTags = getUniqueRandomTags(unlockedCells.length, lockedTags);
  newTags.forEach(tag => recentlyUsedTags.add(tag));
  generationCount++;
  if (generationCount >= MAX_MEMORY) {
    generationCount = 0;
    recentlyUsedTags.clear();
  }
  const spinPromises = [];
  unlockedCells.forEach((cell, index) => {
    spinPromises.push(spinTag(cell, newTags[index]));
  });
  await Promise.all(spinPromises);
  updateFinalPrompt();
}

/* Ensure exactly 9 tag items are in the grid */
function updateTagItems(initial = false) {
  const tagsContainer = document.getElementById("tagsContainer");
  const desiredCount = 9;
  const currentItems = tagsContainer.querySelectorAll(".tag-item");
  const currentCount = currentItems.length;

  if (currentCount < desiredCount) {
    if (initial && currentCount === 0) {
      const initialTags = getUniqueRandomTags(desiredCount, []);
      for (let i = 0; i < desiredCount; i++) {
        const tagItem = createTagItemWithText(initialTags[i]);
        tagsContainer.appendChild(tagItem);
      }
    } else {
      const used = Array.from(currentItems).map(item => item.querySelector(".tag-text").textContent);
      for (let i = currentCount; i < desiredCount; i++) {
        const uniqueTag = getUniqueRandomTag(used);
        used.push(uniqueTag);
        const tagItem = createTagItemWithText(uniqueTag);
        tagsContainer.appendChild(tagItem);
      }
    }
  } else if (currentCount > desiredCount) {
    for (let i = currentCount - 1; i >= desiredCount; i--) {
      tagsContainer.removeChild(currentItems[i]);
    }
  }
  updateFinalPrompt();
}

// ---------- DOMContentLoaded and Event Listeners ----------
document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateBtn");
  const copyPrompt = document.getElementById("copyPrompt");
  const customTagsBtn = document.getElementById("customTagsBtn");
  const customTagsModal = document.getElementById("customTagsModal");
  const closeModal = document.querySelector(".close-modal");
  const customTagsInput = document.getElementById("customTagsInput");
  const saveCustomTags = document.getElementById("saveCustomTags");
  const resetDefaultTags = document.getElementById("resetDefaultTags");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const unlockAllBtn = document.getElementById("unlockAllBtn");

  // Set up toggle buttons for each genre group
  document.querySelectorAll('.toggle-group').forEach(btn => {
    btn.addEventListener("click", () => {
      let enabled = btn.getAttribute("data-enabled") === "true";
      enabled = !enabled;
      btn.setAttribute("data-enabled", enabled);
      btn.textContent = enabled ? "ON" : "OFF";
      updateCurrentGenreTags();
    });
  });

  // Initialize with 9 tag items on page load.
  updateTagItems(true);

  // Generate Button
  generateBtn.addEventListener("click", generateTags);

  // Unlock All Button: Remove locked status from all tags.
  unlockAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".tag-item.locked").forEach(item => {
      item.classList.remove("locked");
      const iconElem = item.querySelector(".lock-icon i");
      if (iconElem) {
        iconElem.classList.remove("fa-lock");
        iconElem.classList.add("fa-lock-open");
      }
    });
    updateFinalPrompt();
  });

  // Copy final prompt text to clipboard
  copyPrompt.addEventListener("click", () => {
    const finalPromptElem = document.getElementById("finalPrompt");
    const textToCopy = finalPromptElem.textContent;
    if (textToCopy && textToCopy !== "Your final prompt will appear here") {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          copyPrompt.style.color = "green";
          setTimeout(() => {
            copyPrompt.style.color = "#e6ac55";
          }, 1000);
        })
        .catch(err => console.error("Copy failed:", err));
    }
  });

  // Dark mode toggle
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Modal functionality for custom tags (unchanged)
  customTagsBtn.addEventListener("click", () => {
    customTagsModal.style.display = "block";
    customTagsInput.value = currentGenreTags.join(", ");
  });

  closeModal.addEventListener("click", () => {
    customTagsModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === customTagsModal) {
      customTagsModal.style.display = "none";
    }
  });

  saveCustomTags.addEventListener("click", () => {
    const customTags = customTagsInput.value
      .split(",")
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    const uniqueTags = [...new Set(customTags)];
    if (uniqueTags.length < 9) {
      alert("Please provide at least 9 unique tags!");
      return;
    }
    currentGenreTags = uniqueTags;
    customTagsModal.style.display = "none";
    const tagsContainer = document.getElementById("tagsContainer");
    while (tagsContainer.firstChild) {
      tagsContainer.removeChild(tagsContainer.firstChild);
    }
    updateTagItems(true);
  });

  resetDefaultTags.addEventListener("click", () => {
    // Reset: update currentGenreTags from the genre group inputs
    updateCurrentGenreTags();
    customTagsInput.value = currentGenreTags.join(", ");
    const tagsContainer = document.getElementById("tagsContainer");
    while (tagsContainer.firstChild) {
      tagsContainer.removeChild(tagsContainer.firstChild);
    }
    updateTagItems(true);
    customTagsModal.style.display = "none";
  });
});