//Prototipos con sintaxis de clases

class Student{
    constructor(name, age, approvedCourses){
        this.name = name;
        this.age = age;
        this.approvedCourses = approvedCourses;
    };

    approveOtherCourse(newCourse){
        this.approvedCourses.push(newCourse);
    };
}

const Alejandra = new Student(
    "Alejandra Martinez",
    26,
    [
        "Curso de CSS Grid",
        "Curso de progamación de video juegos"
    ],
);

Alejandra.approveOtherCourse("Curso de Python"); 

//Prototipos con sintaxis de clases ROR(Recibe y retorna un objeto)

class Student2{
    constructor({
        name,
        age,
        approvedCourses = [],
        email,
        facebook = undefined,
        instagram,
    }){
        this.name = name;
        this.age = age;
        this.approvedCourses = approvedCourses;
        this.email = this.email;
        this.facebook = this.facebook;
        this.instagram = this.instagra;
    };

    approveOtherCourse(newCourse){
        this.approvedCourses.push(newCourse);
    };
}

const Grecia = new Student2({
    name: "Grecia Lara",
    age: 26,
    approvedCourses: [
        "Curso de CSS Grid",
        "Curso de progamación de video juegos"
    ],
});

Alejandra.approveOtherCourse("Curso de Python"); 