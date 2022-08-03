const fs = require('fs');
const rl = require('readline').createInterface(process.stdin, process.stdout)

fs.mkdir('log', err=>{
    if (err){  
    } 
    fs.open('log/testFile.txt', 'w', err=>{
        if (err) throw err
    });

});

function writeLog(trying, result, number){

    fs.appendFile('log/testFile.txt', `Попытка: ${trying}, бросок игрока:${result}, генератор чисел: ${number} \n`, 
                (err) => {
                if(err) throw err;
    });

};

function question(counter=0) {
    
    rl.question('Угадайте  число от 1 до 100: ', (cmd)=>{

        if (cmd != 'quit' && isNaN(Number(cmd)) || cmd > 100 || cmd == '' || cmd == 0) {
            console.log('Ошибка  ввода')
            return question()
        };

        let number = Math.floor(Math.random(1) * 100)

        if (cmd == 'quit') {
            rl.close()
            return
        }else{
            counter++
            if (cmd == number) {
                console.log(`вы угадали число ${number}!`)
                writeLog(counter, cmd, number)
            }
            else if (cmd < number) {
                console.log(`Ваше число меньше(${cmd}) чем ${number}!`)
                writeLog(counter, cmd, number)
            }
            else {
                console.log(`Ваше число больше(${cmd}) чем ${number}!`)
                writeLog(counter, cmd, number)
            };
        };

        next_quest = question(counter)
    });

};

question()



