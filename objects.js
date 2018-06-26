/*
const person = {
    name: 'Kaustubh',
    age: 30,
    hobbies: ['waterpolo', 'reading']
};

/** Previously dot walking */
/*
const name = person.name;

console.log(name);
*/

/** ES2015  

const { name, age } = person;
console.log(name);

/** Using Alias 

const { name: firstName } = person;
console.log(firstName);

/** Using Arrays */

const numbers = [0,1,2];
const [a] = numbers;
console.log(a);

/** Array of objects */

const response = {
    count: 10,
    data: [{
        name: 'Kvin',
        films: ['Empire Strikes', 'The Force Awakens']
    }, {
        name: 'Kvin-II',
        films: ['A New Hope']
    }]
};

const { count, data: [{ name, films }]} = response;
console.log(films);

response.data.forEach(r => {
    let { name } = r;
    console.log(name);
});

