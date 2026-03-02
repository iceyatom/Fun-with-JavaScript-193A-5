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
    textArea.value = textArea.value.toUpperCase();
}
