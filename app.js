// --- Define Your Genre Tags List ---
const genreTagsString =
  "Soul, R&B, Neo-soul, Jazz, Blues, Acoustic, Folk, Singer-songwriter, Ballad, Gospel, Downtempo, Ambient, Chillout, Lounge, Organic House, Soulful House, Disco, Latin, Afrobeat, African, World, Classical, Baroque, Renaissance, Opera, Chamber Music, Orchestral, Instrumental, Minimal, Bluegrass, Americana, Roots, Country, Rumba, Samba, Bossa Nova, Mambo, Calypso, Reggae, Caribbean, Latin Jazz, Soul Jazz, Cool Jazz, Swing, Big Band, Funk, Soul Funk, Jazz Funk, Smooth Jazz, Vocal Jazz, Folk Revival, Acoustic Folk, Indie Folk, Electroacoustic, Dream Pop, Quiet Storm, New Age, Meditative, Chant, Devotional, Spiritual, Ambient Pop, Instrumental Pop, Soft Rock, Mellow Rock, Easy Listening, Café Music, Lounge Pop, Contemporary Classical, Modern Classical, Piano Pop, Orchestral Pop, Chamber Pop, Baroque Pop, Retro Pop, Traditional Folk, Soul Blues, Jazz Ballad, Folk Ballad, Acoustic Blues, Urban Blues, Country Blues, Spiritual Blues, World Jazz, Latin Soul, Afro Soul, Global, Meditative Folk, Organic Jazz, Acoustic Soul, Lush Pop, Ambient Jazz, Minimal Jazz, Classic Rock, Soft Soul, Retro Soul, Nu Jazz, Chamber Jazz, Boogaloo, World Fusion, Delta Blues, Chicago Blues, Piedmont Blues, Country Blues, Celtic Folk, Appalachian Folk, British Folk, Traditional Gospel, Southern Gospel, Hard Bop, Cool Jazz, West Coast Jazz, Dixieland, New Orleans Jazz, Post-Bop, Modal Jazz, Free Jazz, Texas Blues, Jump Blues, Classic R&B, Folk Rock, Southern Rock, Jam Band, Alt-Country, Traditional Country, Western Swing, Jazz Pop, Folk Pop, Chillwave, Worldbeat, Mediterranean Pop, Indian Classical, Hindustani Classical, Carnatic, Sufi, Chanson, Andean, Cumbia, Qawwali, Fado, Nueva Canción, Bachata, Ska, Rocksteady, Dub, Skiffle, Highlife, Mbalax, Soukous, Gnawa, Tropicalia, MPB, Samba Rock, Forró, Klezmer, Balkan Folk, Indie Rock, Alternative Rock, Afro-Cuban Jazz, Salsa, Bebop, Rockabilly, Doo-Wop, Gospel Blues, Swamp Blues, West Coast Blues, Boogie-Woogie, Ragtime, Contemporary Jazz, Swamp Rock, Swing Revival, Barbershop, New Orleans Blues, Memphis Soul, Philadelphia Soul, Ethio-Jazz, Semba, Morna, Kizomba, Swamp Pop, Northern Soul, Contemporary Blues, Stride, Outlaw Country, Scandinavian Folk, Mediterranean Folk, Balearic, Filmi, Ghazal, Lo-Fi, Psychedelic Soul, Choro, Marabi, Kwela, Isicathamiya, Mbube, Juju, Cha-Cha-Cha, Ranchera, Mariachi";
const genreTags = genreTagsString.split(",").map(tag => tag.trim());

/* Utility: Return a random tag from genreTags excluding any in usedTags */
function getUniqueRandomTag(usedTags) {
  const pool = genreTags.filter(tag => !usedTags.includes(tag));
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

/* Utility: Return an array of 'count' unique random tags excluding any in usedTags */
function getUniqueRandomTags(count, usedTags) {
  const pool = genreTags.filter(tag => !usedTags.includes(tag));
  const result = [];
  for (let i = 0; i < count; i++) {
    if (pool.length === 0) break;
    const index = Math.floor(Math.random() * pool.length);
    result.push(pool[index]);
    pool.splice(index, 1);
  }
  return result;
}

/* Create a tag item element with given text */
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
    // Call updateFinalPrompt immediately when lock status changes
    const finalPromptElem = document.getElementById("finalPrompt");
    const lockedTags = [];
    document.querySelectorAll(".tag-item.locked").forEach(item => {
      lockedTags.push(item.querySelector(".tag-text").textContent);
    });
    finalPromptElem.textContent = lockedTags.join(", ") || "Your final prompt will appear here";
  });

  tagItem.appendChild(tagText);
  tagItem.appendChild(lockIcon);
  return tagItem;
}

document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateBtn");
  const tagsContainer = document.getElementById("tagsContainer");
  const finalPromptElem = document.getElementById("finalPrompt");
  const copyPrompt = document.getElementById("copyPrompt");

  // Ensure there are exactly 9 tag items.
  // If 'initial' is true (only on first load), fill with 9 unique tags.
  function updateTagItems(initial = false) {
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
        // For any missing cell, choose a tag not already used in the container.
        const used = Array.from(tagsContainer.querySelectorAll(".tag-text")).map(
          el => el.textContent
        );
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

  /* Spin an individual tag item.
     During the spin, the text changes randomly.
     At the end, the finalValue (which is predetermined and unique) is assigned.
  */
  function spinTag(tagItem, finalValue, duration = 800, intervalTime = 50) {
    return new Promise((resolve) => {
      const tagText = tagItem.querySelector(".tag-text");
      tagItem.classList.add("spinning");
      let elapsed = 0;
      const interval = setInterval(() => {
        // During spinning, show any random tag (duplicates allowed)
        tagText.textContent = genreTags[Math.floor(Math.random() * genreTags.length)];
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

  /* When "Generate" is clicked, update unlocked cells with new unique tags.
     All unlocked cells spin concurrently and then are assigned a unique final value.
  */
  async function generateTags() {
    // Ensure 9 cells exist.
    updateTagItems();
    // Get an array of locked tag texts.
    const lockedTags = Array.from(document.querySelectorAll(".tag-item.locked"))
      .map(item => item.querySelector(".tag-text").textContent);
    // Get all unlocked cells.
    const unlockedCells = Array.from(document.querySelectorAll(".tag-item:not(.locked)"));
    // Get unique new tags from the available pool (exclude locked ones).
    const newTags = getUniqueRandomTags(unlockedCells.length, lockedTags);
    const spinPromises = [];
    unlockedCells.forEach((cell, index) => {
      spinPromises.push(spinTag(cell, newTags[index]));
    });
    await Promise.all(spinPromises);
    updateFinalPrompt();
  }

  /* Update the final prompt display with locked tags separated by commas */
  function updateFinalPrompt() {
    const lockedTags = [];
    const tagItems = document.querySelectorAll(".tag-item.locked");
    tagItems.forEach(item => {
      const text = item.querySelector(".tag-text").textContent;
      lockedTags.push(text);
    });
    finalPromptElem.textContent =
      lockedTags.join(", ") || "Your final prompt will appear here";
  }

  /* Copy final prompt text to clipboard when the copy icon is clicked */
  copyPrompt.addEventListener("click", () => {
    const textToCopy = finalPromptElem.textContent;
    if (textToCopy && textToCopy !== "Your final prompt will appear here") {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          copyPrompt.style.color = "green";
          setTimeout(() => { copyPrompt.style.color = "#4a90e2"; }, 1000);
        })
        .catch(err => console.error("Copy failed:", err));
    }
  });

  generateBtn.addEventListener("click", generateTags);

  // Initialize with 9 unique tags on page load.
  updateTagItems(true);
});