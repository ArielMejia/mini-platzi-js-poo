//this an example of literal object

const Maria = {
    name: "María",
    age: 25,
    points: 1800,
    approvedCourses: [
        "Programción con Java",
        "Curso de CSS",
    ],

    approveOtherCourse(cursito){
        this.approvedCourses.push(cursito);
    },

};

Maria.approveOtherCourse("Curso de html");
