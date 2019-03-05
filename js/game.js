// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You wake up in your friend's body",
            choices: [
                {
                    text: "You pretend to be your friend for a day",
                    nextLevel: "friend",
                },

                {
                    text: "you go back to sleep in hopes you wake up in your own body",
                    nextLevel: "bed",
                },
            ]
        },

        friend: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across your friend's significant other!",
            choices: [
                {
                    text: "You run away from them",
                    nextLevel: "wakeUp",
                },
                
                {
                    text: "You greet them with a kiss",
                    nextLevel: "home"
                },
                
                {
                    text: "You greet them with a handshake",
                    nextLevel: "suspicious",
                },
            ]
        },

        bed: {
            message: "You wake up in an hour and return in your body...Woopie",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        home: {
            message: "You arrive home after a long and adventurous day in your friend's body",
            choices: [
                {
                    text: "",
                    nextLevel: "",
                },
            
            ]
       },
};
