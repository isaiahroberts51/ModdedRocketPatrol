let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

/*
Name: Isaiah Roberts
Project Title: Honey Harvest
Date: 04/18/2022
Time Taken: ~10 hours
*/

/*
Point Breakdown:
Implement the speed increase that happens after 30 seconds in the original game (5)
Allow the player to control the Rocket after it's fired (5)
Display the time remaining (in seconds) on the screen (10)
Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20)
Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)

Total: 100
*/

/*
All in-game art made by Isaiah Roberts
'buzz.mp3' made by Nagaty Studio on YouTube: https://youtu.be/NMCRa6ZXHUY
'collect.mp3' made by Sounds on YouTube: https://youtu.be/QIf5z1kqzeU
'squish.mp3' made by StephenPog on YouTube: https://youtu.be/iWugthMcbmY
HTML Background made by kropekk_pl on Pixabay: https://pixabay.com/vectors/the-background-background-design-352165/
*/