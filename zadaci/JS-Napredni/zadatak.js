


const student = {
    name: name,
    address: address,
    phone: phone,
    course: course,


          getInfo = function(){
          return "name: "+ this.name + "\n" +
          "address: " + this.address + "\n" +
          "phone: " + this.phone;
    };
}

var Student1 = new Student("Marko Markovic", "Beogradska 23, Beograd", "+38164640640");
var Student2 = new Student("Petar Petrovic", "Novosadska 23, Novi Sad", "+38164641641");
var Student3 = new Student("Milos Milosevic", "Mitrovacka 23, Sr. Mitrovica", "+38164642642");
console.log(Student1.getInfo());
console.log(Student2.getInfo());
console.log(Student3.getInfo());


// Name: John Benson, Address: High Park 36, Phone: (507) 833-3567