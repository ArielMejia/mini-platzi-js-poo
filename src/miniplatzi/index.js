//Herencia
//Clase estudiante


class User{
    constructor({
        name,
        age,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this._name = name;      //El guión bajo indica que se comportará como propiedad privada
        this._age = age;
        this._email = email;
        this._username = username;
        this.socialMedia = {
            twitter,  
            instagram, 
            facebook, 
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    };

    approveOtherCourse(newCourse){
        this.approvedCourses.push(newCourse);
    };

    OtherLearningPaths(newLearningPaths){
        this.learningPaths.push(newLearningPaths);
    };

    //getters and setters
    get name(){
        return this._name;
    };

    set name(newName){
        if (newName === this._name){
            console.error("Por favor elija un nombre defirente");
        } else {
            this._name = newName;
        }
    };

    get username(){
        return this._username;
    };

    set username(newUserName){
        if (newUserName === this._username){
            console.error("Por favor elija un username defirente");
        } else {
            this._username = newUserName;
        }
    };

};

//--------------------------------------------------
//Class Student and Teacher inherint of User

class Student extends User{
    constructor(props){
        super(props);
    };
}


class Teacher extends User{
    constructor(props){
        super(props);
    };
}


// Schools

class courseClass{
    constructor(name, video, questions, contributions, resources){
        this._name = name;
        this.video = video;
        this.questions = questions;
        this.contributions = contributions;
        this.resources = resources;
    };

    get name(){
        return this._name;
    };

    set name(newName){
        if (newName === this._name){
            console.error("Por favor elija un nombre defirente");
        } else {
            this._name = newName;
        }
    };
}

class Course{
    constructor({
        name,
        courseClass,
    }){
        this._name = name;
        this.courseClass = courseClasses;
    };

    get name(){
        return this._name;
    };

    set name(newName){
        if (newName === this._name){
            console.error("Por favor elija un nombre defirente");
        } else {
            this._name = newName;
        }
    };
}

class LearningPaths{
    constructor(name, courses){
        this._name = name;
        this.courses = courses;
    };

    addOtherCourse(newCourse){
        this.courses.push(newCourse);
    };
    
    get name(){
        return this._name;
    };

    set name(newName){
        if (newName === this._name){
            console.error("Por favor elija un nombre defirente");
        } else {
            this._name = newName;
        }
    };
}