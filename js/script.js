console.log('test')

let count = document.getElementById('count')
let counter = 0
setInterval(() => {
    if(counter === 20) {
        clearInterval()
    } else {
        counter += 1
        count.innerHTML = counter + '%'
    }
}, 30)
