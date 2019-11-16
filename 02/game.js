module.exports = function(playerAction){
    let computerAction
const random = Math.random() * 3
if (random < 1) {
    computerAction = 'rock'
} else if (random > 2) {
    computerAction = 'scissor'
} else {
    computerAction = 'paper'
}
console.log('玩家出了',playerAction,'电脑出了',computerAction)
if (computerAction === playerAction) {
    console.log('平手')
    return 0
} else if (computerAction === 'rock' && playerAction === "paper" ||
    computerAction === 'scissor' && playerAction === 'rock' ||
    computerAction === 'paper' && playerAction === "scissor") {
    console.log('玩家赢')
    return 1
} else {
    console.log('电脑赢')
    return -1
}
}