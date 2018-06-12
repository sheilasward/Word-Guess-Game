function startGame() {
    var artist=["Toto", "Phil Collins", "Queen", "Michael Jackson", "Elton John", "The Beatles"];
    var song=["Africa_Toto.wav", "AgainstAllOdds_PhilCollins.wav", "AnotherOneBitesTheDust_Queen.wav", "BillieJean_MichaelJackson.wav", "CrocodileRock_EltonJohn.wav", "LetItBe_Beatles.wav"];
    var index = Math.floor(Math.random()*artist.length);
    console.log("Index = " + index);

    for (var i=0; i<artist[index].length; i++) {
        if (artist[index].charAt(i) != " ") {
            document.getElementById(i).style.border = "2px solid black";
        }
    }
}
