// --- Define Your Genre Tags List ---
const defaultGenreTagsString =
  " Classical, Andalusian Classical Music, Indian Classical Music, Korean Court Music, Persian Classical Music, Ottoman Music, Turkish Classical Music, Western Classical Music, Early Music, Medieval Music, Ars Antiqua, Ars Nova, Ars Subtilior, Renaissance Music, Baroque Music, Galant Music, Classical Period Music, Romantic Music, Modernist Classical Music, Impressionist Classical Music, Neoclassical Music, High Modernist Classical Music, Postmodern Classical Music, Experimental Classical Music, Contemporary Classical Music, Minimal Music, Avant-garde Music, Experimental Music, Crossover Music, Danger Music, Drone Music, Electroacoustic Music, Industrial Music, Instrumental Music, Lo-fi Music, Musical Improvisation, Musique Concrète, Noise Music, Outsider Music, Progressive Music, Psychedelic Music, Underground Music, Blues, African Blues, Blues Rock, British Blues, Canadian Blues, Chicago Blues, Classic Female Blues, Contemporary R&B, Country Blues, Delta Blues, Desert Blues, Detroit Blues, Electric Blues, Gospel Blues, Hill Country Blues, Hokum Blues, Jump Blues, Kansas City Blues, Louisiana Blues, Memphis Blues, New Orleans Blues, Piedmont Blues, Punk Blues, Rhythm and Blues, Doo-wop Blues, Soul Blues, St. Louis Blues, Swamp Blues, Talking Blues, Texas Blues, West Coast Blues, Country, Alternative Country, Americana, Cowpunk, Country Punk, Gothic Country, Roots Rock, Australian Country, Bush Band Music, Bakersfield Sound, Bluegrass, Old-time Bluegrass, Appalachian Bluegrass, Traditional Bluegrass, Neo-traditional Bluegrass, Progressive Bluegrass, Nu-grass, Bluegrass Gospel, Blue Yodeling, Bro-country, Cajun, Cajun Fiddle, Canadian Country, Franco-country, Christian Country, Classic Country, Country and Irish, Country Blues, Country Folk, Country Pop, Cosmopolitan Country, Country Rap, Hick-hop, Country Rock, Cowboy Pop, Dansband, Gulf and Western, Hokum, Honky Tonk, Instrumental Country, Lubbock Sound, Nashville Sound, Countrypolitan, Neotraditional Country, New Country, Old-time Country, Outlaw Country, Pop Country, Progressive Country, Regional Mexican, Rockabilly, Neo-Rockabilly, Psychobilly, Punkabilly, Gothabilly, Hellbilly, Southern Rock, Southern Soul, Sertanejo, Talking Country, Traditional Country, Truck-driving Country, Western Music, Cowboy Music, New Mexico Music, Red Dirt, Tejano, Tex-Mex, Texas Country, Western Swing, Zydeco, Easy Listening, Adult Contemporary Music, Adult Standards, Background Music, Elevator Music, Muzak, Barococo, Beautiful Music, Chill-out Music, Downtempo, Furniture Music, Light Music, Lounge Music, Middle of the Road, New-age Music, Soft Rock, Electronic Music, Ambient, Ambient Dub, Dark Ambient, Ambient Industrial, Dungeon Synth, Isolationism, Dreampunk, Illbient, New-age Electronic, Neoclassical New-age, Space Music, Bass Music, Footwork, Future Bass, Kawaii Future Bass, Jungle Terror, Midtempo Bass, Trap EDM, UK Bass, Wave Music, Hardwave, Breakbeat, Acid Breaks, Baltimore Club, Jersey Club, Philly Club, Big Beat, Breakbeat Hardcore, Darkcore, Hardcore Breaks, Broken Beat, Florida Breaks, Nu Skool Breaks, Progressive Breaks, Psychedelic Breakbeat, Chill-out, Downtempo, Psybient, Psydub, Trip Hop, Trip Rock, Disco, Afro-Cosmic Music, Electro-Disco, Hi-NRG, Eurobeat, Eurodance, Italo Dance, Italo Disco, Spacesynth, Space Disco, Eurodisco, Nu-Disco, Post-Disco, Boogie, City Pop, Drum and Bass, Darkstep, Drumfunk, Drumstep, Hardstep, Intelligent Drum and Bass, Atmospheric Drum and Bass, Jazzstep, Jump-up, Liquid Funk, Neurofunk, Sambass, Techstep, Dub, Dub Poetry, Dubtronica, Electronic Rock, Dance-Rock, Alternative Dance, Baggy, Madchester, New Rave, Dance-Punk, Electronic Pop, Dance-Pop, Freestyle, Disco Polo, Hyperpop, Sophisti-pop, Synth-Pop, Electroclash, Electropop, Wonky Pop, Indietronica, Krautrock, New Wave, Cold Wave, Dark Wave, Neoclassical Dark Wave, Neue Deutsche Todeskunst, Industrial Electronic, Electro-Industrial, Dark Electro, Aggrotech, Electronic Body Music, Futurepop, New Beat, Industrial Hip Hop, Industrial Metal, Cyber Metal, Neue Deutsche Härte, Industrial Rock, Martial Industrial, Witch House, Intelligent Dance Music, Algorave, Drill 'n' Bass, Techno, Acid Techno, Ambient Techno, Birmingham Sound, Bleep Techno, Detroit Techno, Dub Techno, Hard Techno, Free Tekno, Jungletek, Raggatek, Industrial Techno, Minimal Techno, Schaffel, Toytown Techno, Trance Music, Acid Trance, Balearic Trance, Dream Trance, Eurotrance, Hands Up, Goa Trance, Nitzhonot, Hard Trance, Progressive Trance, Psychedelic Trance, Dark Psytrance, Full-on, Minimal Psytrance, Progressive Psytrance, Suomisaundi, Tech Trance, Uplifting Trance, Vocal Trance, UK Garage, 2-step Garage, Bassline, Breakstep, Dubstep, Brostep, Post-dubstep, Reggaestep, Riddim, Future Garage, Grime, Grindie, Speed Garage, UK Funky, Funkstep, Wonky, Video Game Music, Chiptune, Bitpop, Skweee, Nintendocore, Megalovania, FM Synthesis, Sequencer Music, Folk Music, American Folk Revival, Americana, Anti-folk, British Folk Revival, Cajun Folk, Celtic Music, Chalga, Corrido, Creole Music, Filk Music, Folk Noir, Folk Rock, Folktronica, Celtic Rock, Freak Folk, Indie Folk, Industrial Folk, Mariachi, Ranchera, Neofolk, New Weird America, Progressive Folk, Protest Songs, Psychedelic Folk, Singer-Songwriter, Nueva Canción, Skiffle, Sung Poetry, Tarantella, Pizzica, Traditional Blues Verses, Hip Hop, Alternative Hip Hop, Experimental Hip Hop, Hipster Hop, Boom Bap, Bounce, British Hip Hop, Road Rap, Chopped and Screwed, Chopper, Christian Hip Hop, Cloud Rap, Comedy Hip Hop, Crunk, Crunkcore, East Coast Hip Hop, Freestyle Rap, Funk Carioca, Funk Ostentação, Frat Rap, G-funk, Hardcore Hip Hop, Dirty Rap, Gangsta Rap, Mafioso Rap, Horrorcore, Memphis Rap, Hyphy, Jerkin', Instrumental Hip Hop, Latin Hip Hop, Chicano Rap, Lofi Hip Hop, Miami Bass, Mumble Rap, Nerdcore, Chap Hop, Political Hip Hop, Conscious Hip Hop, Progressive Rap, Religious Hip Hop, Jewish Hip Hop, Slab Music, Snap Music, Southern Hip Hop, Trap Music, Drill Music, Brooklyn Drill, UK Drill, Latin Trap, Phonk, Plugg, Pluggnb, Rage, Tread Rap, Turntablism, Underground Hip Hop, West Coast Hip Hop, Country Rap, Electro Hip Hop, Emo Rap, Hip Hop Soul, Hip House, Industrial Hip Hop, Jazz Rap, New Jack Swing, Pop Rap, Punk Rap, Ragga Hip Hop, Rap Opera, Rap Rock, Rap Metal, Trap Metal, Rapcore, Trip Hop, Jazz, Acid Jazz, Afro-Cuban Jazz, Alt-jazz, Avant-garde Jazz, Bebop, Big Band, Boogie-woogie, Bossa Nova, Brazilian Jazz, British Dance Band, Cape Jazz, Chamber Jazz, Continental Jazz, Cool Jazz, Crossover Jazz, Dixieland, Ethno Jazz, European Free Jazz, Free Funk, Free Improvisation, Free Jazz, Gypsy Jazz, Hard Bop, Jazz Blues, Jazz-funk, Jazz Fusion, Jazz Rap, Jazz Rock, Jazztronica, Kansas City Jazz, Latin Jazz, Livetronica, M-base, Mainstream Jazz, Modal Jazz, Neo-bop Jazz, Neo-swing, Nu Jazz, Orchestral Jazz, Post-bop, Progressive Jazz, Punk Jazz, Samba-jazz, Shibuya-kei, Ska Jazz, Smooth Jazz, Soul Jazz, Straight-ahead Jazz, Stride Jazz, Swing, Trad Jazz, Third Stream, Vocal Jazz, West Coast Jazz, Pop Music, Adult Contemporary, Adult Hits, Alternative Pop, Ambient Pop, Arabic Pop, Art Pop, Avant-pop, Baroque Pop, Beach Music, Bedroom Pop, Brill Building Pop, Britpop, Bubblegum Pop, C-pop, Cantopop, Hokkien Pop, Mandopop, Canción, Canzone, Chalga, Chamber Pop, Chanson, Christian Pop, Classic Hits, Classical Crossover, Contemporary Hit Radio, Country Pop, Cringe Pop, Dance-pop, Dark Pop, Disco Polo, Electropop, Europop, Austropop, Eurobeat, French Pop, Italo Dance, Italo Disco, Laïkó, Nederpop, Neomelodic Music, Nordic Popular Music, Russian Pop, Folk Pop, Hyperpop, Indie Pop, Twee Pop, Indian Pop, Iranian Pop, J-pop, Anime Song, City Pop, Shibuya-kei, Jangle Pop, Jazz Pop, K-pop, Korean Hip Hop, Korean Rock, T'ong Guitar, Trot, Latin Ballad, Latin Pop, Mexican Pop, New Pop, New Romantic, Oldies, Operatic Pop, OPM, Pinoy Pop, Pop Rap, Pop Rock, Pop Punk, Emo Pop, Neon Pop, Power Pop, Soft Rock, Surf Pop, Yacht Rock, Pop Soul, Progressive Pop, Psychedelic Pop, Rebetiko, Rhythmic Adult Contemporary, Rhythmic Contemporary, Rhythmic Oldies, Schlager, Sophisti-pop, Space Age Pop, Sunshine Pop, Swamp Pop, Synth-pop, Teen Pop, Traditional Pop, Turbo-folk, Turkish Pop, Urban Adult Contemporary, Urban Contemporary Music, Vispop, Wonky Pop, Worldbeat, Yé-yé, R&B, Alternative R&B, Contemporary R&B, Disco, Freestyle, Go-go, Funk, Deep Funk, Minneapolis Sound, Psychedelic Funk, Synth-funk, Gospel Music, Southern Gospel, Urban Contemporary Gospel, New Jack Swing, Post-disco, Boogie, Rhythm and Blues, Doo-wop, Soul, Blue-eyed Soul, Brown-eyed Soul, Cinematic Soul, Classic Soul, Hip Hop Soul, Neo Soul, Northern Soul, Progressive Soul, Psychedelic Soul, Quiet Storm, Southern Soul, Rock, Active Rock, Adult Album Alternative, Adult-oriented Rock, Afro Rock, Album Oriented Rock, Alternative Rock, Alternative Dance, Britpop, Post-Britpop, College Rock, Dream Pop, Shoegaze, Blackgaze, Grunge, Post-grunge, Soft Grunge, Indie Rock, Dunedin Sound, Kindie Rock, Math Rock, Midwest Emo, Post-punk Revival, Slacker Rock, Madchester, Baggy, Noise Pop, Sadcore, Slowcore, American Rock, Anatolian Rock, Arabic Rock, Arena Rock, Beat Music, British Invasion, Freakbeat, Mod Rock, Nederbeat, Blues Rock, Boogie Rock, Brazilian Rock, Samba Rock, British Rhythm and Blues, Chamber Rock, Chinese Rock, Christian Rock, Classic Alternative, Classic Rock, Comedy Rock, Country Rock, Dark Cabaret, Death 'n' Roll, Deathrock, Desert Rock, Electronic Rock, Electroclash, Electronicore, New Wave, Cold Wave, Dark Wave, Ethereal Wave, Experimental Rock, Art Rock, Industrial Rock, Post-punk, Dance-punk, Dance-rock, Gothic Rock, No Wave, Noise Rock, Post-rock, Post-metal, Folk Rock, British Folk Rock, Celtic Rock, Medieval Folk Rock, Funk Rock, Garage Rock, Proto-punk, Geek Rock, Glam Rock, Gothic Rock, Pagan Rock, Hard Rock, Heartland Rock, Indian Rock, Iranian Rock, Instrumental Rock, Japanese Rock, Jazz Rock, Korean Rock, Latin Rock, Chicano Rock, Rock en Español, Mexican Rock, Mainstream Rock, Mangue Bit, Modern Rock, New Wave of Classic Rock, Occult Rock, Paisley Underground, Pop Rock, Jangle Pop, Power Pop, Soft Rock, Yacht Rock, Progressive Rock, Art Rock, Avant-prog, Rock in Opposition, Canterbury Scene, Flamenco Rock, Krautrock, Neo-prog, New Prog, Post-progressive, Progressive Rock Radio, Proto-prog, Space Rock, Symphonic Rock, Zeuhl, Psychedelic Rock, Acid Rock, Freak Scene, Neo-psychedelia, Raga Rock, Pub Rock, Punk Rock, Rap Rock, Rapcore, Reggae Rock, Rock and Roll, Rockabilly, Gothabilly, Hellbilly, Psychobilly, French Rock, Rock Opera, Roots Rock, Southern Rock, Stoner Rock, Swamp Rock, Sufi Rock, Surf Rock, Tropical Rock, Viking Rock, Visual Kei, Nagoya Kei, Wizard Rock, Worldbeat, World Fusion, Metal, Alternative Metal, Funk Metal, Nu Metal, Rap Metal, Avant-garde Metal, Drone Metal, Post-metal, Black Metal, Depressive Suicidal Black Metal, Blackened Death Metal, Atmospheric Black Metal, Blackgaze, Melodic Black Metal, National Socialist Black Metal, Symphonic Black Metal, Viking Metal, Christian Metal, Unblack Metal, Death Metal, Death 'n' Roll, Deathgrind, Melodic Death Metal, Technical Death Metal, Brutal Death Metal, Slam Death Metal, Doom Metal, Death-doom, Stoner-doom, Extreme Metal, Folk Metal, Celtic Metal, Medieval Metal, Pagan Metal, Glam Metal, Gothic Metal, Industrial Metal, Kawaii Metal, Latin Metal, Math Metal, Metalcore, Deathcore, Mathcore, Melodic Metalcore, Progressive Metalcore, Neoclassical Metal, Neue Deutsche Härte, New Wave of American Heavy Metal, New Wave of British Heavy Metal, Nintendocore, Pirate Metal, Pop Metal, Power Metal, Progressive Metal, Djent, Sludge Metal, Speed Metal, Symphonic Metal, Thrash Metal, Crossover Thrash, Groove Metal, Punk, Afro-punk, Anarcho Punk, Crust Punk, D-beat, Art Punk, Avant Punk, Christian Punk, Crust Punk, Deathrock, Electropunk, Cyberpunk, Dance-punk, Digital Hardcore, Dreampunk, Synth Punk, Folk Punk, Celtic Punk, Cowpunk, Gypsy Punk, Scottish Gaelic Punk, Garage Punk, German Punk, Glam Punk, Gothic Punk, Grindcore, Crustgrind, Electrogrind, Goregrind, Noisegrind, Pornogrind, Hardcore Punk, Bardcore, Beatdown Hardcore, Christian Hardcore, Crabcore, Crunkcore, Electronicore, Krishnacore, Melodic Hardcore, Positive Hardcore, Post-hardcore, Queercore, Taqwacore, Emo, Emo Pop, Screamo, Powerviolence, Street Punk, Horror Punk, Latino Punk, Nazi Punk, Oi!, Pop Punk, Easycore, Neon Pop, Post-punk, Dance-punk, Post-punk Revival, Proto-punk, Psychobilly, Punkabilly, Punk Blues, Punk Jazz, Punk Pathetique, Punk Rap, Reggae Punk, Riot Grrrl, Ska Punk, Skate Punk, Street Punk, Surf Punk, Trallpunk, African Heavy Metal, African Hip Hop, African Popular Music, Afro Pop, Afrobeat, Afrobeats, Afro House, Amapiano, Apala, Arabesque, Afro Tech, Benga, Bikutsi, Bongo Flava, Boomba, Bubu Music, Cape Jazz, Chaabi, Chalga, Chaoui Music, Chimurenga, Congolese Rumba, Coupé-Décalé, Fuji Music, Genge, Gnawa, Gqom, Gumbe, Highlife, Hiplife, Igbo Highlife, Igbo Rap, Ikorodo, Ikwokirikwo, Isicathamiya, Jit, Jùjú, Kadongo Kamu, Kizomba, Kuduro, Kwaito, Kwela, Lingala, Makossa, Maloya, Ma'luf, Marabi, Marrabenta, Maskandi, Mbalax, Mbaqanga, Mbube, Morna, Egyptian Music, Nigerian Music, Ndombolo, Owerri Bongo, Ojapiano, Palm-wine, Raï, African Rumba, Sakara, Sega, Seggae, Semba, Shangaan Electro, Soukous, Kwassa Kwassa, Taarab, Zamrock, Zouglou, Central Asian Music, Shashmaqam, Pashto Music, Kazakh Folk Music, Kyrgyz Folk Music, Mongolian Folk Music, Tuvan Throat Singing, Tajik Folk Music, Chinese Music, C-pop, Cantopop, Hokkien Pop, Mandopop, Chinese Hip Hop, Chinese Folk Music, Chinese Rock, Hong Kong English Pop, Hong Kong Hip Hop, Taiwanese Hip Hop, Taiwanese Pop, Taiwanese Rock, Japanese Music, Anime Song, Enka, J-pop, Japanese Hip Hop, Japanese Jazz, Japanese Rock, Kayōkyoku, Korean Music, K-pop, Korean Folk Music, Korean Hip Hop, Korean Rock, Trot, South Asian Music, Asian Underground, Baul, Bhangra, Bhawaiya, Dappankuthu, Dohori, Filmi, Indian Classical Music, Carnatic, Hindustani Classical, Indian Jazz, Indian Pop, Indian Rock, Raga Rock, Lavani, Morlam, Ragini, Sufi Rock, Sri Lankan Music, Baila, Sri Lankan Hip Hop, Malaysian Music, Malaysian Hip Hop, Malaysian Pop, Malaysian Rock, Indonesian Music, Gamelan, Dangdut, Indo Pop, Sundanese Pop, Keroncong, Thai Music, Luk Thung, Luk Krung, Thai Pop, Thai String Pop, Filipino Music, Manila Sound, Original Pilipino Music, Pinoy Pop, Pinoy Rock, Lao Music, L-pop, Mor Lam, Vietnamese Music, V-pop, Arabic Music, Arabic Pop, Fann At-Tanbura, Fijiri, Khaliji, Liwa, Israeli Music, Persian Traditional Music, Sawt, Turkish Music, Turkish Folk Music, Gypsy Music, Australian Folk Music, Australian Hip Hop, Indigenous Australian Music, Hawaiian Music, New Zealand Music, Māori Music, Kapa Haka, Polynesian Music, Samoan Music, Balkan Music, Balkan Brass, Balkan Folk Music, Albanian Music, Bosnian Music, Sevdalinka, Bulgarian Music, Cypriot Music, Greek Music, Kosovo Music, Montenegrin Music, North Macedonian Music, Romanian Music, Romani Music, Manele, Baltic Music, Lithuanian Folk Music, Estonian Music, Latvian Music, Caucasian Music, Armenian Music, Azerbaijani Music, Georgian Music, Central European Music, Austrian Music, Viennese Waltz, Yodeling, Croatian Music, Czech Music, Polka, German Music, Hungarian Music, Liechtenstein Music, Polish Music, Serbian Music, Slovak Music, Slovenian Music, Swiss Music, Nordic Music, Nordic Folk Music, Danish Music, Danish Traditional Music, Finnish Music, Jenkka, Rautalanka, Icelandic Music, Norwegian Music, Swedish Music, Faroese Music, Viking Metal, Slavic Music, Klezmer, Belarusian Music, Moldovan Music, Russian Music, Buryat Music, Russian Folk Music, Ukrainian Music, Yugoslav Music, Andorran Music, Belgian Music, Belgian Hardcore Techno, Belgian Hip-hop, Belgian Jazz, Belgian Rock, French Music, French Classical Music, French Electronic Music, French Folk Music, Bal-musette, Chanson Réaliste, French Hip-hop, French House, French Jazz, French Pop Music, Irish Music, Celtic Music, Italian Music, Italian Classical Music, Italian Folk Music, Italian Hip-hop, Italian Jazz, Italian Popular Music, Luxembourg Music, Maltese Music, Monaco Music, Dutch Music, Portuguese Music, Portuguese Folk Music, Chula, Desgarrada, Fado, Coimbra Fado, Pimba, Portuguese Rock, Spanish Music, Spanish Folk Music, Chirigota, Copla, Cuplé, Ensalada, Fandango, Flamenco, Alegrías, Bulerías, Farruca, Garrotín, Rumba, Soleá, Tango, Tientos, Zambra, Jota, Muiñeira, Pasacalle, Pasodoble, Sardana, Seguidilla, Sevillanas, Tonadilla, Zortziko, Spanish Jazz, Spanish Rock, British Music, Britpop, English Folk Music, Scottish Music, Welsh Music, Axé, Brazilian Rock, Brega, Tecnobrega, Choro, Forró, Frevo, Funk Carioca, Lambada, Zouk-Lambada, Maracatu, Música Popular Brasileira, Tropicalia, Música Sertaneja, Samba, Pagode, Samba Rock, Baithak Gana, Bouyon, Cadence-lypso, Calypso, Cha-cha-chá, Chutney, Chutney Soca, Chutney Parang, Compas, Dancehall, Mambo, Mento, Merengue, Méringue, Mozambique, Pichakaree, Punta, Punta Rock, Rasin, Reggae, Dub, Lovers Rock, Ragga, Reggae Fusion, Ragga Jungle, Reggae Rock, Reggaeton, Alternative Reggaeton, Moombahton, Roots Reggae, Rocksteady, Rumba, Salsa, Ska, Ska Punk, Two-tone, Soca, Power Soca, Son Cubano, Songo, Timba, Twoubadou, Zouk, Boogaloo, Bullerengue, Hispanic Flamenco, Cantes de Ida y Vuelta, Fandangos, Soleá, Alegrías, Bulerías, Peteneras, Hispanic Tango, Toná, Martinetes, Tonás, Grupera, Hispanic Rhythmic, Latin Christian, Latin Pop, Latin Ballad, Latin Rock, Latin Alternative, Rock en Español, Latin Jazz, Afro-Cuban Jazz, Bossa Nova, Mariachi, Ranchera, Latin Reggaeton, Latin Trap, Regional Mexican, Banda, Norteño, Latin Tango, Tropical, Bachata, Bolero, Criolla, Cumbia, Chicha, Porro, Guajira, Mambo, Merengue, Música Popular Colombiana, Latin Rumba, Salsa, Salsa Romántica, Son, Tejano, Timba, Tropipop, Urbano Music, Vallenato, American Rock, Canadian Folk Music, Indigenous North American Music, Inuit Music, Alaskan Music, Indigenous Canadian Music, Greenlandic Music, Ragtime, Cakewalk, Classic Rag, Folk Ragtime, Honky-tonk Piano, Novelty Piano, Stomp, Stride Piano, Swing Music, Sikh Music, Buddhist Music, Christian Music, Contemporary Christian Music, Contemporary Worship Music, Christian Rock, Christian Alternative Rock, Easy Listening Christian, Country Gospel, Church Music, Gospel, Worship Music, Hymns, Jesus Music, Liturgical Music, Spirituals, Gregorian Chant, Islamic Music, Modern Pagan Music, Ancient Greek Music, New-age Religious Music, Shamanic Music, American Patriotic Music, Christmas Music, Fado, Huayno, Mele, Pastorale, Polka, Ragtime, Son Mexicano, Música Criolla";
let currentGenreTags = defaultGenreTagsString.split(",").map(tag => tag.trim());

// Keep track of recently used tags (will not show up for 5 generations)
const recentlyUsedTags = new Set();
const MAX_MEMORY = 5; // Number of generations to remember tags
let generationCount = 0;

/* Utility: Return a random tag from currentGenreTags excluding any in usedTags and recentlyUsedTags */
function getUniqueRandomTag(usedTags) {
  const availableTags = currentGenreTags.filter(
    tag => !usedTags.includes(tag) && !recentlyUsedTags.has(tag)
  );
  if (availableTags.length === 0) {
    // If no tags available without recently used ones, clear some old ones
    const tagsToRemove = Math.ceil(recentlyUsedTags.size * 0.2); // Remove 20% of remembered tags
    const tagsArray = Array.from(recentlyUsedTags);
    for (let i = 0; i < tagsToRemove; i++) {
      recentlyUsedTags.delete(tagsArray[i]);
    }
    // Try again with some cleared tags
    return getUniqueRandomTag(usedTags);
  }
  return availableTags[Math.floor(Math.random() * availableTags.length)];
}

/* Utility: Return an array of 'count' unique random tags excluding any in usedTags */
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
    updateFinalPrompt();
  });

  tagItem.appendChild(tagText);
  tagItem.appendChild(lockIcon);
  return tagItem;
}

/* Update the final prompt display with locked tags separated by commas */
function updateFinalPrompt() {
  const finalPromptElem = document.getElementById("finalPrompt");
  const lockedTags = [];
  document.querySelectorAll(".tag-item.locked").forEach(item => {
    lockedTags.push(item.querySelector(".tag-text").textContent);
  });
  finalPromptElem.textContent =
    lockedTags.join(", ") || "Your final prompt will appear here";
}

/* Spin an individual tag item and resolve with the finalValue */
function spinTag(tagItem, finalValue, duration = 800, intervalTime = 50) {
  return new Promise((resolve) => {
    const tagText = tagItem.querySelector(".tag-text");
    tagItem.classList.add("spinning");
    let elapsed = 0;
    const interval = setInterval(() => {
      // During spinning, show any random tag (duplicates allowed)
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
  // Ensure 9 cells exist.
  updateTagItems();
  // Get an array of locked tag texts.
  const lockedTags = Array.from(document.querySelectorAll(".tag-item.locked"))
    .map(item => item.querySelector(".tag-text").textContent);
  // Get all unlocked cells.
  const unlockedCells = Array.from(document.querySelectorAll(".tag-item:not(.locked)"));
  // Get unique new tags from the available pool (exclude locked ones).
  const newTags = getUniqueRandomTags(unlockedCells.length, lockedTags);
  // Add new tags to recently used set
  newTags.forEach(tag => recentlyUsedTags.add(tag));
  // Manage memory of recent tags
  generationCount++;
  if (generationCount >= MAX_MEMORY) {
    generationCount = 0;
    recentlyUsedTags.clear();
  }
  // Spin each unlocked cell, then update final prompt
  const spinPromises = [];
  unlockedCells.forEach((cell, index) => {
    spinPromises.push(spinTag(cell, newTags[index]));
  });
  await Promise.all(spinPromises);
  updateFinalPrompt();
}

/* Make sure we have exactly 9 tag items in the container */
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
      // For any missing cell, choose a tag not already used in the container.
      const used = Array.from(currentItems).map(
        item => item.querySelector(".tag-text").textContent
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

  // Initialize with 9 unique tags on page load.
  updateTagItems(true);

  // Generate Button
  generateBtn.addEventListener("click", generateTags);

  // Copy final prompt text
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

  // Modal functionality
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

  // Save custom tags
  saveCustomTags.addEventListener("click", () => {
    const customTags = customTagsInput.value
      .split(",")
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    // Validate that we have enough unique tags
    const uniqueTags = [...new Set(customTags)];
    if (uniqueTags.length < 9) {
      alert("Please provide at least 9 unique tags!");
      return;
    }

    // Update the current tags
    currentGenreTags = uniqueTags;
    customTagsModal.style.display = "none";

    // Reset the tag grid
    const tagsContainer = document.getElementById("tagsContainer");
    while (tagsContainer.firstChild) {
      tagsContainer.removeChild(tagsContainer.firstChild);
    }
    updateTagItems(true);
  });

  // Reset to default tags
  resetDefaultTags.addEventListener("click", () => {
    currentGenreTags = defaultGenreTagsString.split(",").map(tag => tag.trim());
    customTagsInput.value = currentGenreTags.join(", ");

    const tagsContainer = document.getElementById("tagsContainer");
    while (tagsContainer.firstChild) {
      tagsContainer.removeChild(tagsContainer.firstChild);
    }
    updateTagItems(true);
    customTagsModal.style.display = "none";
  });
});