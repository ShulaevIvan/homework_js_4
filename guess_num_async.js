const fs = require('fs');
const rl = require('readline').createInterface(process.stdin, process.stdout)


nextQuest = function(counter=1) {

    return  new Promise((resolve, reject)=>{

        rl.question('Угадайте  число от 1 до 100: ', (cmd)=>{

            if (cmd != 'quit' && isNaN(Number(cmd)) || cmd > 100 || cmd == '' || cmd == 0){
                reject('Ошибка  ввода')
                return nextQuest()
            };
            
            let number = Math.floor(Math.random(1) * 100)
            if (cmd == number){
                console.log(`вы угадали число ${number}!`)
                writeLog(counter, cmd, number)
                resolve(counter)
            }
            else if (cmd < number) {
                console.log(`Ваше число меньше(${cmd}) чем ${number}!`)
                writeLog(counter, cmd, number)
                resolve(counter)
            }
            else {
                console.log(`Ваше число больше(${cmd}) чем ${number}!`)
                writeLog(counter, cmd, number)
                resolve(counter)
            };
        });

    }).then((counter)=>{
        counter++
        nextQuest(counter)
    }).catch((err)=>{
        console.log(err)
    });
};

createDir = new Promise((resolve, reject)=>{

    fs.mkdir('log', err=>{
        if (err){ 
            reject('папка существует \n') 
        } 
        fs.open('log/testFile.txt', 'w', err=>{
            if (err) reject('ошибка создания/записи файла  \n')
        });
        resolve('создана директория \n')
    });

}).then((value)=>{
    console.log(value)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    nextQuest()
});

writeLog = function(trying, result, number){

    return  new Promise((resolve, reject)=>{

        fs.appendFile('log/testFile.txt', `Попытка: ${trying}, бросок игрока:${result}, генератор чисел: ${number} \n`, 
            (err) => {
            if(err) reject('ошибка записи в файл')
            resolve('данные записаны')
        });
        
    }).then((value)=>{
        console.log(value)
    }).catch((err)=>{
        console.log(err)
    });
};

