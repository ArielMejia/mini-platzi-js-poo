//Example of an object as a function option 1

function Student(name, age, approvedCourses){
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;

    this.approveOtherCourse = function (newCourse){
        this.approvedCourses.puhs(newCourse);
    }
}

