let korpa = [];

    // FUNKCIJA 1
    function dodajUKorpu(cena) {

        // METODA ZA NIZ
        korpa.push(cena);

        let ukupno = izracunajUkupno(korpa);

        // prikaz broja elemenata
        document.getElementById("cart-count").innerText = korpa.length;

        // prikaz ukupne cene
        document.getElementById("cart-total").innerText = ukupno;

        // PROMENA STILA
        document.getElementById("cart-info").style.backgroundColor = "green";

        return ukupno;
    }

    // FUNKCIJA 2
    function izracunajUkupno(nizCena) {

        let suma = 0;

        // FOR PETLJA
        for(let i = 0; i < nizCena.length; i++) {

            suma += nizCena[i];

        }

        return suma;
    }

    // FUNKCIJA 3
    function pretvoriNaziv(tekst) {

        // STRING METODE
        return tekst.toUpperCase().replace("PS", "PLAYSTATION");
    }

    // uzima sva dugmad
    let dugmad = document.querySelectorAll(".btn");

    // DOGAĐAJ 1
    dugmad.forEach(function(dugme){

        dugme.addEventListener("click", function(){

            let card = dugme.closest(".card");

            // PREUZIMANJE PODATAKA SA STRANICE
            let cenaTekst = card.querySelector(".price").innerText;

            let naziv = card.querySelector(".desc").innerText;

            // STRING METODE
            naziv = pretvoriNaziv(naziv);

            // uklanjanje znakova
            let cena = parseFloat(
                cenaTekst.replace("$", "").replace("€", "")
            );

            // poziv funkcije
            let ukupno = dodajUKorpu(cena);

            // DINAMIČKO GENERISANJE HTML KODA
            document.getElementById("cart-info").innerHTML = `
            
                <strong>Korpa:</strong> 
                <span id="cart-count">${korpa.length}</span> stavki
                <br>

                <strong>Ukupno:</strong> 
                <span id="cart-total">${ukupno}</span> $
                <br>

                <small>Poslednji dodat proizvod: ${naziv}</small>

            `;

        });

    });

    // DOGAĐAJ 2
    document.body.addEventListener("keydown", function(event){

        // KONTROLNA STRUKTURA
        if(event.key === "Enter") {

            alert("Trenutno imate " + korpa.length + " proizvoda u korpi!");

        }

    });