const fs = require('fs');
const rl = require('readline').createInterface(process.stdin, process.stdout)


fs.mkdirSync('log')

async function writeLog(text) {
  await fs.promises.appendFile('log/log.txt', text, {
    encoding: 'utf8'
  });

}

async function userCommand() {
    let promise = new Promise(function(resolve, reject) {
        rl.question('Введите число от 1 and 100: ', (cmd) => {
            let number = cmd;
            rl.pause();
            return resolve(number); 
            
        });  
    });
    return await promise;
}

async function play() {
    let counter = 0;
    while(true) {
        let input = await userCommand(),
            userNumber = Number(input),
            randomNumber =  Math.floor(Math.random(1) * 100),
            output = '';
    
        if(isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
            output = 'Неправильный ввод\n';
            writeLog(output)
            console.log(output)
            continue
        };
        counter++

        if(userNumber === randomNumber) {
            output = `Вы угадали!: ${randomNumber}`
            writeLog(output)
            console.log(output)
            break;
        };
    
        if(userNumber > randomNumber) {
            output =  `Ваше число больше(${userNumber}) чем ${randomNumber}! Попытка ${counter} \n`
            writeLog(output)
            console.log(output)
        } else {
            output =  `Ваше число меньше(${userNumber}) чем ${randomNumber}! Попытка ${counter} \n`
            writeLog(output)
            console.log(output)
        }
    }
    rl.close()
}

play();