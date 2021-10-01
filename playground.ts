interface Person {
    Name: string;
    Age: number;
}

interface PersonLogger {
    (name: string, age: number): string;
}

class Person {
    Name: string;
    Age: number;

    constructor(Name: string, Age: number) {
        this.Name = Name;
        this.Age = Age;
    }
}

type PersonLoggerFn = (name: string, age?: number) => string;

export default function play() {
    console.log('Hello world');
    const Name: string = 'Adam';
    const Age: number = 41;

    const person: Person = {
        Name: 'Adam',
        Age: 41,
    };

    const logPersonInfo: PersonLoggerFn = (personName: string, personAge: number = 0): string => {
        const info = `Name ${personName}, is ${personAge} years old`;
        console.log('info', info);
        return info;
    };

    function logPersonInfo2(person: Person) {
        const info = `Name ${person.Name}, is ${person.Age} years old`;
        console.log('info', info);
        return info;
    }

    logPersonInfo(Name);

    logPersonInfo2(new Person('Adam', 60));
}
