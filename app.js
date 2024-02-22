const popupMenu = document.querySelector('.popup-menu');
const popupMenuBtn1 = document.querySelector('.popup-menu__btn_1');
const popupMenuBtn2 = document.querySelector('.popup-menu__btn_2');
const popupMenuBg = document.querySelector('.popup-menu-bg');



popupMenuBtn1.addEventListener('click', function(){

    popupMenu.classList.add('none')
    popupMenuBtn1.classList.add('none')
    popupMenuBtn2.classList.add('none')
    popupMenuBg.classList.add('none')

    
    let table = document.querySelector('.table');
    const modal = document.querySelector('.modal');
    const modalBg = document.querySelector('.modal-bg');
    const modalCounterBomb = document.querySelector('.modal-counter_bomb');
    const modalCounterDiamond = document.querySelector('.modal-counter_diamond');
    const modalTotal = document.querySelector('.modal-total');
    const diamondCounter = document.querySelector('.diamond-counter');
    const bombCounter = document.querySelector('.bomb-counter');
    const time = document.querySelector('.time');

    for(let i = 0; i < 10; i++){
    let tr = document.createElement('tr')
    table.appendChild(tr);
    for(let j = 0; j < 10; j++){
        let td = document.createElement('td');
        tr.appendChild(td)
    }

}


function createRandom(){
    let arr = []
    while(arr.length !== 10){
        let random = Math.floor(Math.random() * 100); 
        if( !arr.includes(random)){
            arr.push(random)
        }
    }
    return arr 
}

let cells = document.querySelectorAll('.table td');
let randomArr = createRandom();

let bomb = 0
let diamond = 0


for(let i = 0; i < cells.length; i++){
    const cell = cells[i]

    cell.addEventListener('click', function(){
        if(randomArr.includes(i)){
            cell.classList.add('green')
            diamond++
        }else{
            cell.classList.add('red')
            bomb++
        }
        
        diamondCounter.textContent =  diamond
        bombCounter.textContent = bomb
        cell.classList.add('bubble')
    })   
}


let intervalId = setInterval(function(){
    modal.classList.add('active');
    modalBg.classList.add('active');
    modalCounterDiamond.textContent = diamond
    modalCounterBomb.textContent = bomb
    let total = bomb + diamond
    modalTotal.textContent = `Total: ${total}`;
},30000)


modalBg.addEventListener('click', function(){
    modal.classList.remove('active');
    modalBg.classList.remove('active');
    clearInterval(intervalId);
})


let timeLeft = 30;
let timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
  } else{
    time.innerHTML = timeLeft + ' seconds left';
    timeLeft--;
  }
}

})

for(let i = 0; i < 10; i++){
    let tr = document.createElement('tr')
    table.appendChild(tr);
    for(let j = 0; j < 10; j++){
        let td = document.createElement('td');
        tr.appendChild(td)
    }

}


function createRandom(){
    let arr = []
    while(arr.length !== 10){
        let random = Math.floor(Math.random() * 100); 
        if( !arr.includes(random)){
            arr.push(random)
        }
    }
    return arr 
}

let cells = document.querySelectorAll('.table td');
let randomArr = createRandom();

let bomb = 0
let diamond = 0


for(let i = 0; i < cells.length; i++){
    const cell = cells[i]

    cell.addEventListener('click', function(){
        if(randomArr.includes(i)){
            cell.classList.add('green')
            diamond++
        }else{
            cell.classList.add('red')
            bomb++
        }
        
        diamondCounter.textContent =  diamond
        bombCounter.textContent = bomb
        cell.classList.add('bubble')
    })   
}


let intervalId = setInterval(function(){
    modal.classList.add('active');
    modalBg.classList.add('active');
    modalCounterDiamond.textContent = diamond
    modalCounterBomb.textContent = bomb
    let total = bomb + diamond
    modalTotal.textContent = `Total: ${total}`;
},30000)


modalBg.addEventListener('click', function(){
    modal.classList.remove('active');
    modalBg.classList.remove('active');
    clearInterval(intervalId);
})


let timeLeft = 30;
let timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
  } else{
    time.innerHTML = timeLeft + ' seconds left';
    timeLeft--;
  }
}