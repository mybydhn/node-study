const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const game = require('./game')
let playerWon = 0;
let playerLastAction = null
let sameCount = 0
http.createServer(function(request,response){
    const parseUrl = url.parse(request.url)
    if(parseUrl.pathname == '/favicon.ico'){
        response.writeHead(200)
        response.end()
        return
    }
    if(parseUrl.pathname=='/game'){
        const query = querystring.parse(parseUrl.query)
        const playerAction = query.action
        if(playerWon >=3 || sameCount ==9){
            response.writeHead(500)
            response.end('我再也不和你玩了')
            return;
        }
        if(playerLastAction && playerLastAction == playerLastAction){
            sameCount++
        } else {
            sameCount = 0;
        }
        playerLastAction = playerAction
        if(sameCount>=3){
            response.writeHead(400)
            response.end('你作弊')
            sameCount = 9;
            return;
        }
        const gameResult = game(playerAction)
        response.writeHead(200)
        if(gameResult == 0){
            response.end('平局')
        } else if(gameResult ==1){
            response.end('你赢了')
            playerWon++
        } else {
            response.end('你输了')
        }
    }
    if(parseUrl.pathname == '/'){
        fs.createReadStream(__dirname + '/index.html').pipe(response)
    }
}).listen(3000)