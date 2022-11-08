function sum (ctx){
    const message = ctx.message.text.split (' ');
    const firstNumber = Number(message[1]);
    const secondNumber = Number(message[2]);
    const result = firstNumber + secondNumber;
    ctx.reply(`Your sum is ${result}`);

}

function mult (ctx){
    const message = ctx.message.text.split (' ');
    const firstNumber = Number(message[1]);
    const secondNumber = Number(message[2]);
    const result = firstNumber * secondNumber;
    ctx.reply(`Your mult is ${result}`);

}

function evenOdd (ctx){
    const message = ctx.message.text.split (' ');
    let firstNumber = Number(message[3]);
    let result = '';
    if (firstNumber % 2 !== 1) {
        result = 'Odd'
    } else {
        result = 'Even';
    }
    ctx.reply(`Your number is ${result}`);

}



module.exports = {sum, mult, evenOdd};
