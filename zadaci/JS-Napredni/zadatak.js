

var Student = function(ime, adresa, telefon) {
    this.ime = ime;
    this.adresa = adresa;
    this.telefon = telefon;
    this.getInfo = function(){
          return "Ime: "+ this.ime + "\n" +
          "Adresa: " + this.adresa + "\n" +
          "Telefon: " + this.telefon;
    };
}

var Student1 = new Student("Marko Markovic", "Beogradska 23, Beograd", "+38164640640");
var Student2 = new Student("Petar Petrovic", "Novosadska 23, Novi Sad", "+38164641641");
var Student3 = new Student("Milos Milosevic", "Mitrovacka 23, Sr. Mitrovica", "+38164642642");
console.log(Student1.getInfo());
console.log(Student2.getInfo());
console.log(Student3.getInfo());


// Name: John Benson, Address: High Park 36, Phone: (507) 833-3567