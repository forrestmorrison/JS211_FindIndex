// find & findIndex



// Use a do...while loop to console.log the numbers from 1 to 1000

let i=0;
while (i <= 1000) {
	console.log(i);
	i++;
}


let personObj = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}


const printKeys = () => {
    console.log(Object.keys(personObj));
}

printKeys();


const printKeyValues = () => {
    console.log(Object.entries(personObj));
}

printKeyValues();


arrayOfPersons = [
    {
        firstName: "John",
        lastName: "Carmichael",
        birthDate: "August 7, 1992",
        gender: "male"
    },
    {
        firstName: "Alex",
        lastName: "Santiago",
        birthDate: "December 12, 1980",
        gender: "female"
    },
    {
        firstName: "Dave",
        lastName: "Knudsen",
        birthDate: "March 14, 1973",
        gender: "male"
    },
];


for (const person of arrayOfPersons) {
    console.log(person.birthDate);
}


const personInfo = arrayOfPersons.map((person) => person);

console.log(personInfo);

let males = arrayOfPersons.filter(person => person.gender === "male")
console.log(males);

// let eightiesBaybeesHeeey = (array) => {
//     for (const person of arrayOfPersons) {
//         person.birthDate);
//     } 
// }



// .find

let arr = [
    { name:"string 1", value:"this", other: "that" },
    { name:"string 2", value:"this", other: "that" }
];

let obj = arr.find(o => o.name === 'string 1');

console.log(obj);



// .findIndex

const array1 = [5, 12, 8, 130, 44];
const search = element => element > 13;
console.log(array1.findIndex(search));
// expected output: 3

const array2 = [
  { id: 1, dev: false },
  { id: 2, dev: false },
  { id: 3, dev: true }
];
const searchObj = obj => obj.dev === true;
console.log(array2.findIndex(searchObj));
// expected output: 2