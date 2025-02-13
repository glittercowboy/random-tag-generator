// --- Define Your Tag Lists ---
// For Genre, we use this list:
const genreTagsString = "Soul, R&B, Neo-soul, Jazz, Blues, Acoustic, Folk, Singer-songwriter, Ballad, Gospel, Downtempo, Ambient, Chillout, Lounge, Organic House, Soulful House, Disco, Latin, Afrobeat, African, World, Classical, Baroque, Renaissance, Opera, Chamber Music, Orchestral, Instrumental, Minimal, Bluegrass, Americana, Roots, Country, Rumba, Samba, Bossa Nova, Mambo, Calypso, Reggae, Caribbean, Latin Jazz, Soul Jazz, Cool Jazz, Swing, Big Band, Funk, Soul Funk, Jazz Funk, Smooth Jazz, Vocal Jazz, Folk Revival, Acoustic Folk, Indie Folk, Electroacoustic, Dream Pop, Quiet Storm, New Age, Meditative, Chant, Devotional, Spiritual, Ambient Pop, Instrumental Pop, Soft Rock, Mellow Rock, Easy Listening, Café Music, Lounge Pop, Contemporary Classical, Modern Classical, Piano Pop, Orchestral Pop, Chamber Pop, Baroque Pop, Retro Pop, Traditional Folk, Soul Blues, Jazz Ballad, Folk Ballad, Acoustic Blues, Urban Blues, Country Blues, Spiritual Blues, World Jazz, Latin Soul, Afro Soul, Global, Meditative Folk, Organic Jazz, Acoustic Soul, Lush Pop, Ambient Jazz, Minimal Jazz, Classic Rock, Soft Soul, Retro Soul, Nu Jazz, Chamber Jazz, Boogaloo, World Fusion, Acid Jazz, Neoclassical, Folk Jazz, Country Soul, Acoustic Pop, Indie Folk Rock, Acoustic Rock, Country Jazz, Blues Rock, Soul Rock, Roots Rock, Chamber Folk, Urban Soul, Smooth R&B, Soulful Folk, Ambient Folk, Electric Blues, Gypsy Jazz, Cinematic Soul, Ethereal Jazz, Meditative Jazz, Neo-Folk, Blues Ballad, Vintage Soul, Chamber Soul, Countryside Soul, Intimate Pop, Indie Acoustic, Sunset Jazz, Bluegrass Gospel, Southern Soul, Soulful Rumba, Calypso Soul, Tropical Soul, Island Soul, Meditative Pop, Chamber R&B, Soulful Swing, Café Jazz, Bohemian Soul, Acoustic Chamber, Lounge Jazz, Organic R&B, Rustic Blues, Earthy Jazz, Contemporary Ballad, Harmonic Pop, Jazz Fusion, Soulful Groove, Gentle Rock, Acoustic Fusion, Reflective Blues, Quiet Soul, Subtle R&B, Warm Gospel, Uplifting Gospel, Spiritual Jazz, Mystic Soul, Retro Blues, Antique Jazz, Old-Time Gospel, Heritage Folk, Intimate Blues, Intimate Jazz, Quiet Jazz, Dreamy Soul, Hushed Folk, Mellow Blues, Warm Blues, Gentle Gospel, Serene Folk, Poetic Jazz, Emotive Blues, Lyrical Folk, Tender Rock, Acoustic Ballad, Evening Jazz, Nighttime Soul, Sunrise Folk, Morning Blues, Urban Jazz, City Soul, Street Jazz, Backroad Blues, Rustic Soul, Country Gospel, World Folk, Ethnic Soul, Eclectic Jazz, Lounge Soul, Soul Ballad, Meditative Rock, Ambient Blues, Ethereal Folk, Harmonic Soul, Acoustic Groove, Folksy Ballad, Warm Rumba, Mellow R&B, Vintage Jazz";
const genreTags = genreTagsString.split(",").map(tag => tag.trim());

// For Adjective, we use this list:
const adjectiveTagsString = "nostalgic, mellow, melancholic, lush, bittersweet, gentle, dreamy, expressive, spiritual, relaxing, warm, organic, soulful, evocative, reflective, serene, emotional, tender, soft, ambient, vintage, acoustic, natural, rich, smooth, calming, introspective, poetic, heartfelt, rhythmic, elegant, understated, classic, timeless, pristine, inviting, raw, genuine, pure, simple, humble, balanced, harmonious, subtle, sincere, rustic, idyllic, tranquil, peaceful, soothing, meditative, blissful, quiet, earthy, vibrant, delicate, pensive, inspiring, passionate, healing, kind, ruminative, mild, flowing, graceful, entrancing, intimate, unpretentious, thoughtful, calm, subdued, languid, slow, measured, languorous, warmhearted, ambling, floating, sweet, harmonic, velvety, plush, relaxed, content, enraptured, modulated, musical, stirring, eloquent, resonant, scenic, sunlit, silken, drowsy, radiant, quaint, hushed, clear, glassy, muted, fluid, transparent, deep, dignified, enchanting, rapt, moving, dynamic, evolving, enduring, persistent, open, creative, original, inspired, artistic, imaginative, joyful, spirited, sparkling, opulent, sumptuous, creamy, intricate, layered, textured, vivid, haunting, moody, spacious, solemn, reverent, modest, candid, earnest, unadorned, refined, polished, cultured, urbane, laid-back, unassuming, restful, placid, pacific, halcyon, comforting, caressing, embracing, nurturing, secure, assured, resilient, balmy, summery, autumnal, golden, amber, coppery, silvery, beaming, incandescent, lustrous, complex, nuanced, sophisticated, wavy, sinuous, undulating, meandering, drifting, ephemeral, fleeting, transient, elusive, whispered, murmuring, veiled, shadowed, dimmed, diffused, blurred, smoothed, surreal, otherworldly, mysterious, obscure, latent, silent, still, easygoing, casual, unhurried, leisurely, staid, deliberate, methodical, steady, syncopated, reverberant, echoing, cascading, rolling, continuous, sustained, lingering, unchanging, steadfast, resolute, determined, focused, centered, even, temperate, fine, immaculate, faultless, seamless, coherent, compelling, engaging, fascinating, intriguing, stimulating, allusive, suggestive, emblematic, mythic, storied, legendary, iconic, cordial, pastel, floral, breezy, softhearted, caring, amiable, gracious, benevolent, velveteen, decadent, gilded, fervent, ardent, jazzy, bluesy, mesmerizing, sentimental, affectionate, pastoral, wistful, mournful, heartwarming, charming, glistening, effortless, softened, silky, composed, loving, sultry, mystical, sacred, divine, exquisite, sonorous, heartening, uplifting, endearing, lovely, bright, romantic, memorable, delightful, familiar, sensitive, personal, reminiscent, retro, unfiltered, approachable, melodic, lyrical, soaring, elegiac, contemplative, dreamlike, heavenly, restrained, optimistic, cozy, homey, resounding, dulcet, cathartic, restorative, radiating, shimmering, pulsing";
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
  // Genre Slider Value Update
  const genreSlider = document.getElementById("genreCount");
  const genreDisplay = document.getElementById("genreCountDisplay");
  genreSlider.addEventListener("input", () => {
    genreDisplay.textContent = genreSlider.value;
  });

  // Adjective Slider Value Update
  const adjectiveSlider = document.getElementById("adjectiveCount");
  const adjectiveDisplay = document.getElementById("adjectiveCountDisplay");
  adjectiveSlider.addEventListener("input", () => {
    adjectiveDisplay.textContent = adjectiveSlider.value;
  });

  // Copy to clipboard for Genre section via the copy icon
  document.getElementById("genreCopyIcon").addEventListener("click", () => {
    const resultsElem = document.getElementById("genreResults");
    const container = document.getElementById("genreResultsContainer");
    const text = resultsElem.textContent;
    if (text.trim() !== "") {
      navigator.clipboard.writeText(text)
        .then(() => {
          // Animate the entire container
          container.classList.add("copied");
          setTimeout(() => {
            container.classList.remove("copied");
          }, 300);
        })
        .catch(err => {
          console.error("Failed to copy:", err);
        });
    }
  });

  // Copy to clipboard for Adjective section via the copy icon
  document.getElementById("adjectiveCopyIcon").addEventListener("click", () => {
    const resultsElem = document.getElementById("adjectiveResults");
    const container = document.getElementById("adjectiveResultsContainer");
    const text = resultsElem.textContent;
    if (text.trim() !== "") {
      navigator.clipboard.writeText(text)
        .then(() => {
          // Animate the entire container
          container.classList.add("copied");
          setTimeout(() => {
            container.classList.remove("copied");
          }, 300);
        })
        .catch(err => {
          console.error("Failed to copy:", err);
        });
    }
  });

  // Genre Section - Generate Tags
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

  // Adjective Section - Generate Tags
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