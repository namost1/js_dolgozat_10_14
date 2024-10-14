function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; 
            }
            return false; 
        }
        return true; 
    }
    return false; 
}
console.log(isLeapYear())

function seconds(time) {
    let splitted = time.split(":");
    let hour = parseInt(splitted.at(0));
    let min = parseInt(splitted.at(1));
    let sec = parseInt(splitted.at(2));
    let passedtime = hour*3600+min*60+sec;
    let daySeconds = 24*3600;
    let remainingSeconds = daySeconds - passedtime;
    return remainingSeconds;
}
console.log(seconds())

function stonePaperScissorsWinner(player1, player2) {
// 0 - papír
// 1 - kő
// 2 - olló
    if(player1 == player2){
        let result = 'The game is a tie.'
        return result
    }
    else if(player1 == 0 || player2 == 1){
        let result = 'The first player wins.'
        return result
    }
    else if(player1 == 0 || player2 == 2){
        let result = 'The second player wins.'
        return result
    }
    else if(player1 == 1 || player2 == 0){
        let result = 'The second player wins.'
        return result
    }
    else if(player1 == 1 || player2 == 2){
        let result = 'The first player wins.'
        return result
    }
    else if(player1 == 2 || player2 == 0){
        let result = 'The first player wins.'
        return result
    }
    else if(player1 == 2 || player2 == 1){
        let result = 'The second player wins.'
        return result
    }
}
console.log(stonePaperScissorsWinner())

function digitsAverage(number) {
    const digits = number.toString().split('');
    let sum = 0;
    for (let digit of digits) {
        sum += parseInt(digit, 10); 
    }
    const average = sum / digits.length;
    return average; 
}
console.log(digitsAverage())