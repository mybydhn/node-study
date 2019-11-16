
const game = require('./game')

let count = 0;
process.stdin.on('data',(buffer)=>{
    const playerAction = buffer.toString().trim()
    const result = game(playerAction)
    if(result ==1 ){
        count++
        if(count == 3){
            console.log('我不玩了')
            process.exit()
        }
    }
    
})
