const playerAction = process.argv[2]
console.log(playerAction)
let computerAction
const random = Math.random() * 3
// rock scissor paper
console.log(random)
if (random < 1) {
    computerAction = 'rock'
} else if (random > 2) {
    computerAction = 'scissor'
} else {
    computerAction = 'paper'
}
if (computerAction === playerAction) {
    console.log('平手')
} else if (computerAction === 'rock' && playerAction === "paper" ||
    computerAction === 'scissor' && playerAction === 'rock' ||
    computerAction === 'paper' && playerAction === "scissor") {
    console.log('玩家赢')
} else {
    console.log('电脑赢')
}
// webpack --devtool none --mode development --target node index.j