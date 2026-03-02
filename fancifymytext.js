function bigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function fancifyText() {
    alert("FancyShmancy selected!");

    const textArea = document.getElementById("textArea");
    const fancyRadio = document.getElementById("fancy");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "";
        textArea.style.textDecoration = "none";
    }
}

function moo() {
    const textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase();
    const sentences = text.split(".");

    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i].trim();
        const words = sentence.split(" ");

        if (sentence !== "") {
            words[words.length - 1] = words[words.length - 1] + "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    textArea.value = sentences.join(". ").replace(/\. $/, ".");
}
