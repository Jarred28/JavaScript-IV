// CODE here for your Lambda Classes


class Person{
    constructor(props){
        this.name = props.name,
        this.age = props.age,
        this.location = props.location
        this.gender = props.gender
    }
    speak(){
        console.log( `Hello my name is ${this.name}, I am from ${this.location}`);
    }
}


class Instructor extends Person{
    constructor(props){
        super(props);
        this.speciality = props.speciality,
        this.favLanguage = props.favLanguage,
        this.catchPhrase = props.catchPhrase
    }
    demo(subject){
        console.log('Today we are learning about ${subject}');
    }
    grade(student){
        console.log('${student.name} receives a perfect score on ${subject}')
    }
}


class Student extends Person{
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground,
        this.className = props.className,
        this.favSubjects = props.favSubjects
    }
    listsSubjects(){
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
}


class ProjectManagers extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName = prop.gradClassName,
        this.favInstructor = props.favInstructor
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }

}