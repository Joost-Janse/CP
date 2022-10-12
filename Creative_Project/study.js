
function pullScriptures() {
    let chp = Math.floor(Math.random() * 21) + 1;
    let url = "https://bible-api.com/John "+ chp + ":1?translation=kjv";
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        putOnPage(json);
    });
}

function putOnPage(json) {
    let ref = json.reference;
    let text = json.text;
    var html;
    var elem = document.getElementById("scripture-text");
    html = "<div class=\"s_layout\">";
    html += "<h1>" + ref + "</h1>";
    html += "<p>" + text + "</p>";
    html += "</div>";
    elem.innerHTML = html;
}