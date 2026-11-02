let environmentTitle = "AliebBobs Space Adventure";

let environmentElements = ["Moon", "Star", "Comet", "Timetravel"];

let mainEntity = {
    name: "AlienBob",
    type: "Alien",
    mood: "suspicious",
    isMoving: true
};

$("#title-button").click(function () {
    $("#environment-output").html("<h2>" + environmentTitle + "</h2>");
});

$("#elements-button").click(function () {
    let message = "<p>" + environmentElements[0] + "</p>";
    message = message + "<p>" + environmentElements[1] + "</p>";
    message = message + "<p>" + environmentElements[2] + "</p>";
    $("#environment-output").html(message);
});

$("#entity-button").click(function () {
    let message = "<p>Name: " + mainEntity.name + "</p>";
    message = message + "<p>Type: " + mainEntity.type + "</p>";
    message = message + "<p>Mood: " + mainEntity.mood + "</p>";
    $("#environment-output").html(message);
});