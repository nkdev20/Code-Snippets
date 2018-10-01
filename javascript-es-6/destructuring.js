//Objsect destructuring

const Person = {
    name: 'nk',
    location: {
        city: 'test',
        temp: '43'
    }
};

const {name:firstName ='Anainymous'} = Person;
const {city, temp:temperature} = Person.location;

console.log(firstName);

console.log(temperature);

//Aray destrucuring

const addresss = ['Verna','SJi', 'NY', 'fsefsef']

const [,,,,location='Desfualt state' ]  = addresss;
console.log(location);