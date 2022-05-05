//Example of an object as a function option 2

function Student(name, age, approvedCourses){
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
}

Student.prototype.approveOtherCourse = function (newCourse){
    this.approvedCourses.puhs(newCourse);
}

const Sofia = new Student(
    "Sofia Medina",
    25,
    [
        "Curso de CSS Grid",
        "Curso de progamación de video juegos"
    ]
);