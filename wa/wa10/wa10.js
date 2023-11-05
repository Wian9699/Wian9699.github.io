const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = `In the twinkling realm of :locationName:, nestled between candy cane forests and 
                    marshmallow snowbanks, there stood a wondrous theater known to all as :locationName:. 
                    Snowy, the :adjective: snowman with buttons of coal and a smile wide and bright, 
                    was ready for an evening of holiday delight. The night of Christmas had arrived, 
                    and the :theaterName: was aglow with :adjective: lights that danced like fairies in the frosty air. 
                    Snowy held the precious :noun:, a token that promised entry to the most enchanting movie marathon of the season. 
                    As the curtain rose, the :adjective: screen sparkled to life, unveiling tales of holiday heroes and winter wonder. 
                    But the real magic began when Snowy waved the :noun:, and :pluralNoun: from the silver screen twirled and 
                    frolicked in the aisles! Jolly snowmen played :musicalInstrument:, while reindeer dressed in :color: :clothing: 
                    pranced alongside. Sugarplum fairies bestowed :sweetTreat:, and :holidayCharacter: led a merry march around Snowy, 
                    who chuckled with pure joy. The magic of :theaterName: didn't stop there. With a flick of the :noun:, Snowy 
                    summoned a :phenomenon:, filling the room with :adjective: wonder and the sound of :sound:. 
                    By the film's end, Snowy was swirling in a snowglobe of happiness, the :theaterName: had become a Christmas 
                    haven of cheer. And each year henceforth, Snowy's heart glowed like a :light: remembering the night the cinema 
                    came alive with the spirit of the season.`;

var locationName = [
    "Snowflake Village", 
    "Aurora Peak", 
    "Mistletoe Cove"
];

var theaterName = [
    "The Glacial Gala", 
    "The Frosty Flicks Fortress", 
    "The Jingle Jamboree Junction"
];

var noun = [
    "enchanted ticket", 
    "magic lantern", 
    "frosty filmstrip"
];

var adjective = [
    "merry", 
    "twinkling", 
    "enchanting"
];

var pluralNoun = [
    "elves", 
    "candies", 
    "wishes"
];

var musicalInstrument = [
    "jingle bells", 
    "flutes", 
    "drum"
];

var color = [
    "snowy white", 
    "velvet red", 
    "pine green"
];

var clothing = [
    "mittens", 
    "bow ties", 
    "boots"
];

var sweetTreat = [
    "cinnamon swirls", 
    "chocolate coins", 
    "fairy floss"
];

var holidayCharacter = [
    "Old Saint Nick", 
    "The Gingerbread Maestro", 
    "Dasher the Dancing Reindeer"
]

var winterCharacter = [
    "The Winter Nymph",
    "The Ice Sorcerer",
    "The Frost Monarch"
];

var phenomenon = [
    "northern lights show", 
    "midnight sun", 
    "aurora chorus"
];

var sound = [
    "laughing children", 
    "chiming bells", 
    "singing choirs"
];

var light = [
    "candle's flame", 
    "twinkling star", 
    "glowing hearth"
];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    var locationItem = randomValueFromArray(locationName);
    var theaterItem = randomValueFromArray(theaterName);
    var nounItem = randomValueFromArray(noun);
    var adjectiveItem = randomValueFromArray(adjective);
    var pluralItem = randomValueFromArray(pluralNoun);
    var instrumentItem = randomValueFromArray(musicalInstrument);
    var colorItem = randomValueFromArray(color);
    var clothingItem = randomValueFromArray(clothing);
    var treatItem = randomValueFromArray(sweetTreat);
    var characterHItem = randomValueFromArray(holidayCharacter);
    var characterWItem = randomValueFromArray(winterCharacter);
    var phenomenonItem = randomValueFromArray(phenomenon);
    var soundItem = randomValueFromArray(sound);
    var lightItem = randomValueFromArray(light);

    newStory = newStory.replaceAll(':locationName:', locationItem);
    newStory = newStory.replaceAll(':theaterName:', theaterItem);
    newStory = newStory.replaceAll(':noun:', nounItem);
    newStory = newStory.replaceAll(':adjective:', adjectiveItem);
    newStory = newStory.replaceAll(':pluralNoun:', pluralItem);
    newStory = newStory.replaceAll(':musicalInstrument:', instrumentItem);
    newStory = newStory.replaceAll(':color:', colorItem);
    newStory = newStory.replaceAll(':clothing:', clothingItem);
    newStory = newStory.replaceAll(':sweetTreat:', treatItem);
    newStory = newStory.replaceAll(':phenomenon:', phenomenonItem);
    newStory = newStory.replaceAll(':sound:', soundItem);
    newStory = newStory.replaceAll(':light:', lightItem);
    


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Snowy', name);
  }

  if(document.getElementById("winter").checked) {
    newStory = newStory.replaceAll('The night of Christmas', 'The night of the Winter Solstice');
    newStory = newStory.replaceAll('most enchanting movie marathon of the season', 'most enchanting movie marathon of the wintry season');
    newStory = newStory.replaceAll('tales of holiday heroes', 'tales of frosty heroes');
    newStory = newStory.replaceAll('holiday delight', 'wintry delight');
    newStory = newStory.replaceAll('holidayCharacter', 'winterCharacter');
    newStory = newStory.replaceAll('Christmas haven of cheer', 'Wintry haven of cheer');

    newStory = newStory.replaceAll(':winterCharacter:', characterWItem);
  }
  else {
    newStory = newStory.replaceAll(':holidayCharacter:', characterHItem);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
