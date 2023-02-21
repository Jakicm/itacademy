
function zaIspis(osoba) {
    return "Ime: " + osoba.ime + "\n" + 
    "Prezime: " + osoba.prezime + "\n" +
    "Godiste: " + osoba.godiste + "\n"
} 

const pera = {
    "ime": "Petar", 
    "prezime": "Petrovic", 
    "godiste": 1995,
    "mail": "nekit@gmail.com", 
    "adresa": {
        "ulica": "Cara Dusana 34",
        "broj": 34,
        "grad": "Beograd",

    }
}

// pera.ime = "Marko" //izmena

// console.log(pera["adresa"]["ulica"])

// console.log(pera.adresa.ulica)
console.log(zaIspis(pera))
