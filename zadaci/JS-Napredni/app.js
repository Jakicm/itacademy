
class Student {
    constructor(name, address, phone, course) {
      this.name = name;
      this.address = address;
      this.phone = phone;
      this.course = course;
    }

    getInfo() {
        return `Name: ${this.name}\nAddress: ${this.address}\nPhone: ${this.phone}\nCourse: ${this.course}`;
    }
    }

    const student1 = new Student("Marko Markovic", "Beogradska 23, Beograd", "+38164640640", "JS");
    const student2 = new Student("Petar Petrovic", "Novosadska 23, Novi Sad", "+38164641641", "C#");
    const student3 = new Student("Milos Milosevic", "Mitrovacka 23, Sr. Mitrovica", "+38164642642", "C++");

    const students = [student1, student2, student3];
    for (const student of students) {
    console.log(student.getInfo());

   

    }