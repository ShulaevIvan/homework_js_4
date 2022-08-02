
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
