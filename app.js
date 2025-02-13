// --- Define Your Tag Lists ---
// For Genre, we use this list:
const genreTagsString = "metal, ugly, brash, fast, edm";
const genreTags = genreTagsString.split(",").map(tag => tag.trim());

// For Adjective, we use this list:
const adjectiveTagsString =
  "soulful, mellow, vintage, nostalgic, r&b, jazzy, acoustic, gentle, emotive, warm, analog, organic, lush, expressive, retro, deep, bittersweet, gospel, ambient, smooth, introspective, serene, tender, raw, spiritual, downtempo, hypnotic, heartfelt, calming, reflective, airy, poetic, unhurried, contemplative, classic, soulful groove, soulful vocals, soft, timeless, euphoric, rhythmic, minimalist, sultry, classic soul, ambient jazz, serene jazz, bluesy, meditative, emotional, dreamy, soulful beats, vintage vibes, mellow groove, analog warmth, smooth jazz, serene vibes, lo-fi, nostalgic tones, heartfelt vocals, acoustic vibe, tender melodies, classic groove, deep soul, rhythmic soul, soulful ballad, soothing, melodic, uplifting, cozy, earthy, organic rhythm, timeless groove, mellow rhythm, refined, lyrical, intricate, soulful melodies, emotive jazz, warm tones, soft groove, sultry vocals, jazzy textures, reflective mood, classic jazz, soulful mix, vintage soul, warm groove, serene ballad, heartfelt groove, delicate, rich textures, organic beats, evocative, harmonic, layered, timeless soul, mellow ballad, soulful instrumental, gentle beats, delicate rhythms, nostalgic soul, deep groove, reflective soul, evocative groove, ambient soul, velvety, soulful strings, soulful keys, heartwarming, soulful piano, jazz-inflected, earthy soul, smooth soul, pure soul, organic jazz, warm jazz, rich soul, soulful fusion, velvety vocals, mellow jazz, timeless ballad, soulful ballads, understated, evocative jazz, soft soul, introspective soul, lush ballad, heartfelt ballad, serene soul, organic groove, vintage ballad, retro soul, soulful ambiance, chill, soulful chill, smooth groove, classic ballad, mellow vibes, warm ballad, soulful rhythm, breezy, harmonic groove, jazzy ballad, soulful echoes, soft echoes, serene echoes, delicate soul, gentle soul, heartfelt jazz, timeless rhythm, acoustic soul, live feel, soulful live, analog soul, soulful vibes, vintage acoustic, organic vocals, soulful tradition, heartfelt tradition, expressive groove, mellow keys, warm keys, soulful strums, gentle strums, warm strums, subtle soul, airy soul, tranquil, soulful calm, rhythmic ballad, eternal rhythm, soulful layers, emotive layers, layered soul, rhythmic vibe, vintage groove, gentle groove, expressive mood, warm mood, tender vibe, velvety groove, mellow tone, reflective tone, soulful tone, heartfelt tone, subtle groove, soothing groove, serene tone, laid-back, organic flow, soulful flow, smooth flow, vintage flow, analog feel, soulful feel, retro feel, timeless feel, mellow feel, gentle feel, Latin soul, Latin groove, jazzy soul, Afro soul, world soul, tribal soul, global soul, bohemian, earthy jazz, acoustic jazz, soulful jazz, cool jazz, jazzy groove, Latin jazz, Afro jazz, soul jazz, fusion soul, classic fusion, jazz fusion, expressive jazz, vocal jazz, lounge jazz, retro jazz, analog jazz, vintage jazz, sultry jazz, delicate jazz, rich jazz, soulful improvisation, live jazz, urban jazz, soft jazz, relaxing jazz, mellow improvisation, heartfelt improvisation, smooth improvisation, romantic, cinematic, orchestral, baroque, symphonic, lyrical soul, poetic soul, dramatic soul, wistful, evocative ballad, emotional ballad, contemplative ballad, gentle ballad, intimate ballad, quiet, subdued, pensive, nuanced, sincere, warm ambiance, inviting, ambient vibe, ambient mood, ambient sound, cozy vibe, heartfelt vibe, bittersweet vibe, calming vibe, serene vibe, soothing vibe, mellow vibe, organic vibe, earthy vibe, introspective vibe, meditative vibe, tranquil vibe, lo-fi vibe, downtempo vibe, relaxed vibe, unfiltered, raw soul, genuine, organic sound, acoustic sound, soulful sound, natural sound, live sound, analog sound, vintage sound, retro sound, classic sound, warm sound, heartfelt sound, tender sound, rich sound, mellow sound, atmospheric, spacious, expansive, dreamy sound, reflective sound, subtle sound, ambient textures, lush textures, warm textures, organic textures, intricate textures, layered textures, sonic layers, soundscapes, rich soundscape, atmospheric soul, cinematic soul, soulscapes, ethereal, transcendent, celestial, cosmic, mystic, enchanted, serene cosmos, soulful cosmos, heavenly, angelic, spiritual vibes, sacred, ritual, devotional, soulful ritual, hallowed, inspired, luminous, glistening, shining, radiant, pure, clean, refined, polished, warm polish, soft polish, elegant, graceful, fluid, mellow fluidity, natural flow, free-flowing, smooth flow, gentle flow, rhythmic flow, steady beat, soulful beat, soft beat, vintage beat, timeless beat, laid-back beat, mellow beat, acoustic beat, analog beat, rhythmic pulse, tender pulse, pulsing soul, heartbeat, groove pulse, subtle pulse, syncopated, offbeat, understated groove, simple groove, minimalist groove, sparse, sparse textures, delicate textures, airy textures, light, luminous soul, glowing, shimmering, reflective glow, warm glow, soft glow, muted, hushed, quiet soul, whispering, gentle whispers, soft whispers, soulful whispers, soothing whispers, ambient whispers, layered whispers, intimate whispers";
const adjectiveTags = adjectiveTagsString.split(",").map(tag => tag.trim());

// --- Helper Functions ---
function getRandomTagFromList(tags) {
  const randomIndex = Math.floor(Math.random() * tags.length);
  return tags[randomIndex];
}

// A generic animate function that “rolls” a tag on a given spinner element
function animateRandomSelection(duration, spinner, tags, callback) {
  let elapsed = 0;
  const intervalTime = 100; // update every 100ms
  spinner.textContent = "";

  const interval = setInterval(() => {
    spinner.textContent = getRandomTagFromList(tags);
    elapsed += intervalTime;

    if (elapsed >= duration) {
      clearInterval(interval);
      callback(spinner.textContent);
    }
  }, intervalTime);
}

// Generic function to select tags sequentially
function selectTagsSequentially(count, spinner, results, tags) {
  if (count <= 0) return;

  animateRandomSelection(1000, spinner, tags, (finalTag) => {
    // Append the final tag to the results area (separated by commas)
    if (results.textContent === "") {
      results.textContent = finalTag;
    } else {
      results.textContent += ", " + finalTag;
    }
    // Pause briefly before the next roll
    setTimeout(() => {
      selectTagsSequentially(count - 1, spinner, results, tags);
    }, 500);
  });
}

// --- Event Listeners ---
document.addEventListener("DOMContentLoaded", () => {
  // Genre Section
  const genreButton = document.getElementById("genreButton");
  genreButton.addEventListener("click", () => {
    const count = parseInt(document.getElementById("genreCount").value);
    const spinner = document.getElementById("genreSpinner");
    const results = document.getElementById("genreResults");

    // Clear previous results/spinner
    results.textContent = "";
    spinner.textContent = "";

    selectTagsSequentially(count, spinner, results, genreTags);
  });

  // Adjective Section
  const adjectiveButton = document.getElementById("adjectiveButton");
  adjectiveButton.addEventListener("click", () => {
    const count = parseInt(document.getElementById("adjectiveCount").value);
    const spinner = document.getElementById("adjectiveSpinner");
    const results = document.getElementById("adjectiveResults");

    // Clear previous results/spinner
    results.textContent = "";
    spinner.textContent = "";

    selectTagsSequentially(count, spinner, results, adjectiveTags);
  });
});