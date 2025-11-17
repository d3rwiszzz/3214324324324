function oblicz () {
    document.getElementById("waga").value
    const waga = document.getElementById("waga").value
    const wzrost = document.getElementById("wzrost").value
    document.getElementById("waga").innerText = waga + "otyłość"
    const wzrostMetry = wzrost / 100
    const bmi = waga / (wzrost * wzrost)
    document.getElementById("wynik").innerText = "Twoje bmi wynosi" + bmi
    
    let tekst ="wygladzanie"

    if (bmi < 16) {
        tekst = "wychudzanie"
    } else if (bmi < 17) {
        tekst
    }
}