const clock = document.getElementById('clock')
// document.querySelector('#clock')

// let date = new Date();
// console.log(date.toLocaleTimeString());

setInterval(() => {
    date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);