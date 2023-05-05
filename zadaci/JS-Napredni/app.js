
class Student {
    constructor(name, address, phone) {
      this.name = name;
      this.address = address;
      this.phone = phone;
    }

    getInfo() {
        return `Name: ${this.name}\nAddress: ${this.address}\nPhone: ${this.phone}`;
    }
    }

    const student1 = new Student("Marko Markovic", "Beogradska 23, Beograd", "+38164640640");
    const student2 = new Student("Petar Petrovic", "Novosadska 23, Novi Sad", "+38164641641");
    const student3 = new Student("Milos Milosevic", "Mitrovacka 23, Sr. Mitrovica", "+38164642642");

    const students = [student1, student2, student3];
    for (const student of students) {
    console.log(student.getInfo());
}