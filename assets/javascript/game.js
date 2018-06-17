
var artist = [];
var song = [];
var title = [];
var played = [];
var lettersGuessed = "";
var lettersGuessedIndex = 25;
var index = 0;
var selectedArtist = " ";
var selectedSong = " ";
var guessesRemaining = 12;
var wins = 0;

function getReady() {
    wins = 0;
    artist=["Toto", "Phil Collins", "Heart", "Don McLean", "Queen", "Christina Perri", "Britney Spears", "Celine Dion", "Vertical Horizon", "Kim Carnes", "Mr Mister", "Blondie", "Elton John", "No Doubt", "Owl City", "Christina Aguilera", "The Beatles", "BeeGees", "Aerosmith", "Backstreet Boys", "Foreigner", "Whitney Houston", "Rod Stewart", "The Wallflowers", "Coldplay", "Lionel Richie", "The Hollies", "Michael Jackson", "Cyndi Lauper", "Bonnie Tyler", "Savage Garden", "Tina Turner", "Creed", "Carly Simon"];
    song=["Africa-short.mp3", "AgainstAllOdds-short.mp3", "Alone-short.mp3", "AmericanPie-short.mp3", "AnotherOneBitesTheDust-short.mp3", "AThousandYears-short.mp3", "BabyOneMoreTime.mp3", "BecauseYouLovedMe-short.mp3", "BestIEverHad-short.mp3", "BetteDavisEyes-short.mp3", "BrokenWings-short.mp3", "CallMe-short.mp3", "CrocodileRock-short.mp3", "DontSpeak-short.mp3", "Fireflies-short.mp3", "GenieInABottle-short.mp3", "HeyJude-short.mp3", "HowDeepIsYourLove-short.mp3", "IDontWannaMissAThing-short.mp3", "IWantItThatWay-short.mp3", "IWantToKnowWhatLoveIs-short.mp3", "IWillAlwaysLoveYou-short.mp3", "MaggieMay-short.mp3", "OneHeadlight-short.mp3", "Paradise-short.mp3", "SayYouSayMe-short.mp3", "TheAirThatIBreathe-short.mp3", "Thriller-short.mp3", "TimeAfterTime-short.mp3", "TotalEclipseOfTheHeart-short.mp3", "TrulyMadlyDeeply-short.mp3", "WhatsLoveGotToDoWithIt-short.mp3", "WithArmsWideOpen-short.mp3", "YoureSoVain-short.mp3"];
    title=["Africa", "Against All Odds", "Alone", "American Pie", "Another One Bites the Dust", "A Thousand Years", "Baby One More Time", "Because You Loved Me", "Best I Ever Had", "Bette Davis Eyes", "Broken Wings", "Call Me", "Crocodile Rock", "Don't Speak", "Fireflies", "Genie", "Hey Jude", "How Deep Is Your Love", "I Don't Wanna Miss A Thing", "I Want It That Way", "I Want To Know What Love Is", "I Will Always Love You", "Maggie May", "One Headlight", "Paradise", "Say You, Say Me", "The Air That I Breathe", "Thriller", "Time After Time", "Total Eclipse Of The Heart", "Truly, Madly, Deeply", "What's Love Got To Do With It", "With Arms Wide Open", "You're So Vain"];
    // Initialize the "played" array to all "false" (nothing has been played yet) 
    for (var i=0; i<artist.length; i++) {
        played[i] = false; 
    }    
}

function startGame() {
    console.log("startGame function");
    guessesRemaining = 12;
    document.getElementById("guessesRem").value = guessesRemaining;
    document.getElementById("winnerOrLoser").style.visibility = "hidden";
    document.getElementById("win-lose-text").innerHTML = "";
    document.getElementById("songByArtist").innerHTML = "";
    for (var i=0; i<25; i++) {
        var j = i + 20;
        document.getElementById(j).textContent = " ";
    }
    for (var i=0; i<20; i++) {
        document.getElementById(i).textContent = " ";
        document.getElementById(i).style.border = "none";
    }
    wins = document.getElementById("wins").value;
    
    lettersGuessed="";
    lettersGuessedIndex=20;  

    index = Math.floor(Math.random()*artist.length);

    // Randomly choose a band until one is found that has not been played before 
    console.log("Randomly choose a band");
    do {
        index = Math.floor(Math.random()*artist.length);
    } while (played[index]);
    
    // Mark choice as "played"
    played[index] = true;

    selectedArtist = artist[index];
    selectedSong = song[index];
    selectedTitle = title[index];
    console.log("selectedArtist = " + selectedArtist);
    console.log("selectedSong = " + selectedSong);
    console.log("selectedTitle = " + selectedTitle);

    for (var i=0; i<selectedArtist.length; i++) {
        if (selectedArtist.charAt(i) != " ") {
            document.getElementById(i).style.border = "2px solid black";
        }
    }

    document.getElementById("currGuess").value = "";
    document.getElementById("currGuess").focus();
}

function alphanumeric(txt) {
    if (txt.length > 1) return false;
    var letters = /[0-9a-z]/;
    if (txt.match(letters)) {
        return true;
    }
    else {
        return false;
    }
}

document.onkeyup = function(event) {
    var userGuess = event.key;
    var nbrLetter = alphanumeric(userGuess);
    console.log("userGuess = " + userGuess);
    console.log("nbrLetter = " + nbrLetter);

    if (nbrLetter) { 
        var UCLetter = userGuess.toUpperCase();
        var LCLetter = userGuess.toLowerCase();
        var foundinLettersGuessed = false;
        var foundinArtist = false;

        if (guessesRemaining > 0) {    
            if (lettersGuessed.search(LCLetter) != -1) {
                foundinLettersGuessed = true;
            }
                
            if (foundinLettersGuessed == false) {
                for (var i=0; i<selectedArtist.length; i++) {
                    if (selectedArtist[i] == LCLetter) {
                        document.getElementById(i).innerHTML = LCLetter;
                        foundinArtist = true;
                    }
                    if (selectedArtist[i] == UCLetter) {
                        document.getElementById(i).innerHTML = UCLetter;
                        foundinArtist = true;
                    }
                    if (selectedArtist[i] == " ")
                        document.getElementById(i).innerHTML = " ";
                } 
            }

            if (foundinArtist == false && foundinLettersGuessed == false) {
                guessesRemaining--;
                document.getElementById("guessesRem").value = guessesRemaining;
                // Check for loss of game...
                if (guessesRemaining == 0) {
                    document.getElementById("winnerOrLoser").src="./assets/images/HangmanLoses.jpg";
                    document.getElementById("winnerOrLoser").style.visibility = "visible";
                    document.getElementById("win-lose-text").innerHTML = "Sorry - you lose";
                }
            }

            if (foundinLettersGuessed == false) {
                lettersGuessed += LCLetter;
                document.getElementById(lettersGuessedIndex).textContent = LCLetter;
                lettersGuessedIndex++;
            }

            /* Check for wins */
            var lettersAllFound = true;
            for (var i=0; i<selectedArtist.length; i++) {
                if (selectedArtist[i] != document.getElementById(i).innerHTML) {
                    lettersAllFound = false;
                    break; 
                }
            }
            if (lettersAllFound == true) {
                wins++;
                document.getElementById("wins").value = wins;
                document.getElementById("songByArtist").innerHTML = '"' + selectedTitle + '"<br>by ' + selectedArtist;
                document.getElementById("winnerOrLoser").src="./assets/images/winner-win.jpg";
                document.getElementById("winnerOrLoser").style.visibility = "visible";
                document.getElementById("win-lose-text").innerHTML = "Great - you win!";
                selectedSong = "./assets/sounds/" + selectedSong;
                var audio = document.getElementById("song");
                audio.controls = false;  
                audio.volume = 0.8;
                audio.src = selectedSong;
                audio.play();
            }
        }
    }
    else {
        userGuess = "";
    }
    document.getElementById("currGuess").value = "";
    document.getElementById("currGuess").focus();
}


