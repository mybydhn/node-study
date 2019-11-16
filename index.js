const geekTime = require('./lib')
geekTime.on('newlesson',({price}) => {
    console.log('new lesson',price)
    if(price<90){
        console.log('buy')
    }
})
// 18911872804