let form = document.querySelector("form");
let sr = window.webkitSpeechRecognition || window.SpeechRecognition;
let spRec = new sr();

spRec.lang = "en";
spRec.continuous = false;
spRec.interimResults = true;

form.addEventListener("submit", e => {
    e.preventDefault();
    spRec.start();
});

spRec.onresult = res => {
    let text = Array.from(res.results)
        .map(r => r[0])
        .map(txt => txt.transcript)
        .join("");
    form.querySelector("textarea").value = text;
};