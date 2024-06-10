
// Establish the winning total goal for the game
const winningTotal = 50;

// This function simulates the roll of a die
const getRandomNumber = max => {
    let rand = null;
    if (!isNaN(max)) {
        rand = Math.random();
        rand = Math.floor(rand * max);
        rand = rand + 1;
    }
    return rand;
}

// This function changes the player's when the turn is over
const changePlayer = () => {
    if ( $("#current").text() == $("#player1").val() ) {
        $("#current").text( $("#player2").val() );
    }
    else {
        $("#current").text( $("#player1").val() );
    }
    $("#die").val("0");
    $("#total").val("0");
    $("#roll").focus();
};

$( document ).ready( () => {
    // this function is called when the new game button is clicked
    $("#new_game").click( () => {
        $("#score1").val("0");
        $("#score2").val("0");

        if ( $("#player1").val() == "" || $("#player2").val() == "" ) {
            alert("Please enter two player names.");
        }
        else {
            $("#turn").removeClass("hide");
            changePlayer();
        }
    })

    // this function is called when the roll button is clicked
    $("#roll").click( () => {
        let total = parseInt( $("#total").val() );
        const die = getRandomNumber(6);

        if (die == 1) {
            total = 0;
            changePlayer();
        }
        else {
            total = total + die;
        }
        $("#die").val(die);
        $("#total").val(total);
    })

    // this function is called when the hold button is clicked
    $("#hold").click( () => {
        let score = 0;
        const total = parseInt( $("#total").val() );

        if ( $("#current").text() == $("#player1").val() ) {
            score = $("#score1");
        }
        else {
            score = $("#score2");
        }

        score.val( parseInt( score.val() ) + total );
        if (score.val() >= winningTotal) {
            alert( $("#current").text() + " WINS!" );
        }
        else {
            changePlayer();
        }
    })
    $("#winning_total").text(winningTotal);
    $("#player1").focus();
});