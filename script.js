function aufgabe1() {
    // Text abholen
    var text = document.getElementById("inputText").value;

    // Von Hinten nach vorne
    var reversedText = text.split('').reverse().join('');

    // Ergebniss anzeigen
    document.getElementById("result").innerText = reversedText;
}
