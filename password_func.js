
const testPassword = '15G2165fff!'

function getPasswordChecker(password){

    return (chekPass) => {
        result = password === chekPass ? true : false
        // console.log(result)
        return result
    };
};

let passwordCheck =  getPasswordChecker(testPassword)

console.log(passwordCheck('15G2165fff!'))
console.log(passwordCheck('assdadd'))
console.log(passwordCheck('fffaassdf'))
console.log(passwordCheck('fffsaas'))


// function urlGenerator(domain){

//     return (url) => {
//         return `https://${url}.${domain}`
//     };
// };

// ruGen = urlGenerator('ru')
// comGen = urlGenerator('com')

// console.log(comGen('netology'))
// console.log(ruGen('netology'))


// function logPerson(){
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// };

// function bind(context, fn) {

//     return function(...args){
//         fn.apply(context, args)
//     };
// };

// const person1 =  {'name': 'TestName1', 'age': 25, 'job': 'testJob1'}
// const person2 =  {'name': 'TestName2', 'age': 29, 'job': 'testJob2'}

// bind(person1, logPerson)()
// bind(person2, logPerson)()