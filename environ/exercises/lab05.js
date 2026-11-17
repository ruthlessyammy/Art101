
function alienReaction(mood) {
        $("#alien-message").html("*The alien rubs its spherical moist head against the palm of your hand and starts glowing yellow!");

        $("#alien").css("transform", "scale(1.15)");
        setTimeout(function() {
            $("#alien").css("transform", "scale(1)");
        }, 200);
    } 
    else if (mood === "surprised") {
        $("#alien-message").html("The aliens eyes widen with surprise at what youve just done... It is not sure how to proceed.");
        
        $("#alien").css("transform", "rotate(8deg)");
        setTimeout(function() {
            $("#alien").css("transform", "rotate(0deg)");
        }, 200);
    } 
    else {
        $("#alien-message").html(" The aliens eyes narrow with irritation, it decided to aabduct you.");
    }
}

let clickCounter = 0;

$("#alien").click(function () {
    clickCounter++;

    if (clickCounter % 2 === 1) {
        alienReaction("happy");
    } else {
        alienReaction("surprised");
    }
});