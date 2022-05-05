//Clase estudiante


class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,  
            instagram, 
            facebook, 
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    };

};


// Clase Course

class Course{
    constructor({
        name,
        courseClasses,
    }){
        this.name = name;
        this.courseClasses = courseClasses;
    };
}