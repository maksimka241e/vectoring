let btnQuiz = document.querySelector('.btnQuiz')
let btnQuiz1 = document.querySelector('.btnQuiz1')
let btnQuiz2 = document.querySelector('.btnQuiz2')
let btnQuiz3 = document.querySelector('.btnQuiz3')
let titleQuiz = document.querySelector('.titleQuiz')
let CheckNumber = document.querySelector('.CheckNumber')
// 1
let x = 15
let time;
times()
function times(){
document.querySelector('.timeNumber').innerHTML = x 
   x--;
   if(x < 0){
    btnQuiz.classList.add('active')
    let  btnQui1 = btnQuiz1.classList.contains('active')
    if(btnQui1){
        btnQuiz1.classList.remove('active')
        btnQuiz1.classList.add('active1')
    }else{
    }
    let  btnQui2 = btnQuiz2.classList.contains('active')
    if(btnQui2){
        btnQuiz2.classList.remove('active')
        btnQuiz2.classList.add('active1')
    }else{
    }
    let  btnQui3 = btnQuiz3.classList.contains('active')
    if(btnQui3){
        btnQuiz3.classList.remove('active')
        btnQuiz3.classList.add('active1')
    }else{
    }
    clearTimeout(time)
    setTimeout(times1,1000)
   }else{
   time =  setTimeout(times,1000)
   }
}

// 2
let x1 = 15
let time1;
function times1(){
document.querySelector('.timeNumber').innerHTML = x1 
   x1--;
   if(x1 < 0){
    btnQuiz.classList.add('active')
    let  btnQui1 = btnQuiz1.classList.contains('active')
    if(btnQui1){
        btnQuiz1.classList.remove('active')
        btnQuiz1.classList.add('active1')
    }else{
    }
    let  btnQui2 = btnQuiz2.classList.contains('active')
    if(btnQui2){
        btnQuiz2.classList.remove('active')
        btnQuiz2.classList.add('active1')
    }else{
    }
    let  btnQui3 = btnQuiz3.classList.contains('active')
    if(btnQui3){
        btnQuiz3.classList.remove('active')
        btnQuiz3.classList.add('active1')
    }else{
    }
    clearTimeout(time1)
    setTimeout(times2,1000)
   }else{
    CheckNumber.innerHTML = '2'
    btnQuiz.classList.remove('active')
   time1 =  setTimeout(times1,1000)
   titleQuiz.innerHTML = 'Куда вывешивали фото лучших из лучших в СССР?'
            btnQuiz.innerHTML = 'Доска почёта'
            btnQuiz1.innerHTML = 'Доска позора'
            btnQuiz2.innerHTML = 'В рамку'
            btnQuiz3.innerHTML = 'В газету'
            // remove active1
            let  btnQui1 = btnQuiz1.classList.contains('active1')
    if(btnQui1){
        btnQuiz1.classList.remove('active1')
    }else{
    }
    let  btnQui2 = btnQuiz2.classList.contains('active1')
    if(btnQui2){
        btnQuiz2.classList.remove('active1')
    }else{
    }
    let  btnQui3 = btnQuiz3.classList.contains('active1')
    if(btnQui3){
        btnQuiz3.classList.remove('active1')
    }else{
    }
   }
}

// 3
let x2 = 15
let time2;
function times2(){
document.querySelector('.timeNumber').innerHTML = x2 
x2--;
   if(x2 < 0){
    btnQuiz2.classList.add('active')
    let  btnQui1 = btnQuiz1.classList.contains('active')
    if(btnQui1){
        btnQuiz1.classList.remove('active')
        btnQuiz1.classList.add('active1')
    }else{
    }
    let  btnQui = btnQuiz.classList.contains('active')
    if(btnQui){
        btnQuiz.classList.remove('active')
        btnQuiz.classList.add('active1')
    }else{
    }
    let  btnQui3 = btnQuiz3.classList.contains('active')
    if(btnQui3){
        btnQuiz3.classList.remove('active')
        btnQuiz3.classList.add('active1')
    }else{
    }
    clearTimeout(time2)
    setTimeout(times3,1000)
   }else{
    btnQuiz.classList.remove('active')
    CheckNumber.innerHTML = '3'
   time2 =  setTimeout(times2,1000)
   titleQuiz.innerHTML = 'Кто делает бесполезную рассылку ненужных писем в Интернете?'
            btnQuiz.innerHTML = 'МЧС'
            btnQuiz1.innerHTML = 'Скорая'
            btnQuiz2.innerHTML = 'Спам'
            btnQuiz3.innerHTML = 'Работа'
            // remove active1
            let  btnQui1 = btnQuiz1.classList.contains('active1')
    if(btnQui1){
        btnQuiz1.classList.remove('active1')
    }else{
    }
    let  btnQui = btnQuiz.classList.contains('active1')
    if(btnQui){
        btnQuiz.classList.remove('active1')
    }else{
    }
    let  btnQui3 = btnQuiz3.classList.contains('active1')
    if(btnQui3){
        btnQuiz3.classList.remove('active1')
    }else{
    }
   }
}

// 4
let x3 = 15
let time3;
function times3(){
document.querySelector('.timeNumber').innerHTML = x3 
x3--;
   if(x3 < 0){
    btnQuiz1.classList.add('active')
    let  btnQui2 = btnQuiz2.classList.contains('active')
    if(btnQui2){
        btnQuiz2.classList.remove('active')
        btnQuiz2.classList.add('active1')
    }else{
    }
    let  btnQui = btnQuiz.classList.contains('active')
    if(btnQui){
        btnQuiz.classList.remove('active')
        btnQuiz.classList.add('active1')
    }else{
    }
    let  btnQui3 = btnQuiz3.classList.contains('active')
    if(btnQui3){
        btnQuiz3.classList.remove('active')
        btnQuiz3.classList.add('active1')
    }else{
    }
    clearTimeout(time3)
    setTimeout(times4,1000)
   }else{
    CheckNumber.innerHTML = '4'
    btnQuiz2.classList.remove('active')
   time3 =  setTimeout(times3,1000)
   titleQuiz.innerHTML = 'Этой части у акулы нет. Какой?'
            btnQuiz.innerHTML = 'Плавник'
            btnQuiz1.innerHTML = 'Плавательный пузырь'
            btnQuiz2.innerHTML = 'Шабры'
            btnQuiz3.innerHTML = 'Рот'
            // remove active1
            let  btnQui2 = btnQuiz2.classList.contains('active1')
    if(btnQui2){
        btnQuiz2.classList.remove('active1')
    }else{
    }
    let  btnQui = btnQuiz.classList.contains('active1')
    if(btnQui){
        btnQuiz.classList.remove('active1')
    }else{
    }
    let  btnQui3 = btnQuiz3.classList.contains('active1')
    if(btnQui3){
        btnQuiz3.classList.remove('active1')
    }else{
    }
   }
}

// 5
let x4 = 15
let time4;
function times4(){
document.querySelector('.timeNumber').innerHTML = x4
x4--;
   if(x4 < 0){
    btnQuiz.classList.add('active')
    let  btnQui2 = btnQuiz2.classList.contains('active')
    if(btnQui2){
        btnQuiz2.classList.remove('active')
        btnQuiz2.classList.add('active1')
    }else{
    }
    let  btnQui1 = btnQuiz1.classList.contains('active')
    if(btnQui1){
        btnQuiz1.classList.remove('active')
        btnQuiz1.classList.add('active1')
    }else{
    }
    let  btnQui3 = btnQuiz3.classList.contains('active')
    if(btnQui3){
        btnQuiz3.classList.remove('active')
        btnQuiz3.classList.add('active1')
    }else{
    }
    clearTimeout(time4)
    setTimeout(times5,1000)
   }else{
    CheckNumber.innerHTML = '5'
    btnQuiz1.classList.remove('active')
   time4 =  setTimeout(times4,1000)
   titleQuiz.innerHTML = 'Евреи не едят это мясо. Какое?'
            btnQuiz.innerHTML = 'Свинина'
            btnQuiz1.innerHTML = 'Говядина'
            btnQuiz2.innerHTML = 'Баранина'
            btnQuiz3.innerHTML = 'Гусятина'
            // remove active1
            let  btnQui2 = btnQuiz2.classList.contains('active1')
    if(btnQui2){
        btnQuiz2.classList.remove('active1')
    }else{
    }
    let  btnQui1 = btnQuiz1.classList.contains('active1')
    if(btnQui1){
        btnQuiz1.classList.remove('active1')
    }else{
    }
    let  btnQui3 = btnQuiz3.classList.contains('active1')
    if(btnQui3){
        btnQuiz3.classList.remove('active1')
    }else{
    }
   }
}

// 6
let x5 = 15
let time5;
function times5(){
document.querySelector('.timeNumber').innerHTML = x5
x5--;
   if(x5 < 0){
    btnQuiz3.classList.add('active')
    let  btnQui2 = btnQuiz2.classList.contains('active')
    if(btnQui2){
        btnQuiz2.classList.remove('active')
        btnQuiz2.classList.add('active1')
    }else{
    }
    let  btnQui1 = btnQuiz.classList.contains('active')
    if(btnQui1){
        btnQuiz1.classList.remove('active')
        btnQuiz1.classList.add('active1')
    }else{
    }
    let  btnQui = btnQuiz.classList.contains('active')
    if(btnQui){
        btnQuiz.classList.remove('active')
        btnQuiz.classList.add('active1')
    }else{
    }
    clearTimeout(time5)
    setTimeout(times6,1000)
   }else{
    CheckNumber.innerHTML = '6'
    btnQuiz.classList.remove('active')
   time5 =  setTimeout(times5,1000)
   titleQuiz.innerHTML = 'Доказывать свою правоту на языке моряков – это …'
            btnQuiz.innerHTML = 'Прыгнуть в море'
            btnQuiz1.innerHTML = 'Согласится'
            btnQuiz2.innerHTML = 'Не отвечать'
            btnQuiz3.innerHTML = 'Рвать тельняшку'
            // remove active1
            let  btnQui2 = btnQuiz2.classList.contains('active1')
    if(btnQui2){
        btnQuiz2.classList.remove('active1')
    }else{
    }
    let  btnQui1 = btnQuiz1.classList.contains('active1')
    if(btnQui1){
        btnQuiz1.classList.remove('active1')
    }else{
    }
    let  btnQui = btnQuiz.classList.contains('active1')
    if(btnQui){
        btnQuiz.classList.remove('active1')
    }else{
    }
   }
}

// 7
let x6 = 15
let time6;
function times6(){
document.querySelector('.timeNumber').innerHTML = x6
x6--;
   if(x6 < 0){
    btnQuiz1.classList.add('active')
    let  btnQui2 = btnQuiz2.classList.contains('active')
    if(btnQui2){
        btnQuiz2.classList.remove('active')
        btnQuiz2.classList.add('active1')
    }else{
    }
    let  btnQui3 = btnQuiz3.classList.contains('active')
    if(btnQui3){
        btnQuiz3.classList.remove('active')
        btnQuiz3.classList.add('active1')
    }else{
    }
    let  btnQui = btnQuiz.classList.contains('active')
    if(btnQui){
        btnQuiz.classList.remove('active')
        btnQuiz.classList.add('active1')
    }else{
    }
    clearTimeout(time6)
   }else{
    CheckNumber.innerHTML = '7'
    btnQuiz3.classList.remove('active')
   time6 =  setTimeout(times6,1000)
   titleQuiz.innerHTML = 'Что можно найти у устаревшего анекдота?'
            btnQuiz.innerHTML = 'Кота'
            btnQuiz1.innerHTML = 'Бороду'
            btnQuiz2.innerHTML = 'Еду'
            btnQuiz3.innerHTML = 'Деньги'
            // remove active1
            let  btnQui2 = btnQuiz2.classList.contains('active1')
    if(btnQui2){
        btnQuiz2.classList.remove('active1')
    }else{
    }
    let  btnQui3 = btnQuiz3.classList.contains('active1')
    if(btnQui3){
        btnQuiz3.classList.remove('active1')
    }else{
    }
    let  btnQui = btnQuiz.classList.contains('active1')
    if(btnQui){
        btnQuiz.classList.remove('active1')
    }else{
    }
   }
}

// click btn
btnQuiz.addEventListener('click', function(){
    let  btnQui1 = btnQuiz1.classList.contains('active')
    if(btnQui1){
        btnQuiz1.classList.remove('active')
        btnQuiz.classList.add('active')
    }else{
        btnQuiz.classList.add('active')
    }
    let  btnQui2 = btnQuiz2.classList.contains('active')
    if(btnQui2){
        btnQuiz2.classList.remove('active')
        btnQuiz.classList.add('active')
    }else{
        btnQuiz.classList.add('active')
    }
    let  btnQui3 = btnQuiz3.classList.contains('active')
    if(btnQui3){
        btnQuiz3.classList.remove('active')
        btnQuiz.classList.add('active')
    }else{
        btnQuiz.classList.add('active')
    }
})

btnQuiz1.addEventListener('click', function(){
    let  btnQui = btnQuiz.classList.contains('active')
    if(btnQui){
        btnQuiz.classList.remove('active') 
        btnQuiz1.classList.add('active')
    }else{
        btnQuiz1.classList.add('active')
    }
    let  btnQui2 = btnQuiz2.classList.contains('active')
    if(btnQui2){
        btnQuiz2.classList.remove('active')
        btnQuiz1.classList.add('active')
    }else{
        btnQuiz1.classList.add('active')
    }
    let  btnQui3 = btnQuiz3.classList.contains('active')
    if(btnQui3){
        btnQuiz3.classList.remove('active')
        btnQuiz1.classList.add('active')
    }else{
        btnQuiz1.classList.add('active')
    }
})

btnQuiz2.addEventListener('click', function(){
    let  btnQui = btnQuiz.classList.contains('active')
    if(btnQui){
        btnQuiz.classList.remove('active') 
        btnQuiz2.classList.add('active')
    }else{
        btnQuiz2.classList.add('active')
    }
    let  btnQui1 = btnQuiz1.classList.contains('active')
    if(btnQui1){
        btnQuiz1.classList.remove('active')
        btnQuiz2.classList.add('active')
    }else{
        btnQuiz2.classList.add('active')
    }
    let  btnQui3 = btnQuiz3.classList.contains('active')
    if(btnQui3){
        btnQuiz3.classList.remove('active')
        btnQuiz2.classList.add('active')
    }else{
        btnQuiz2.classList.add('active')
    }
})

btnQuiz3.addEventListener('click', function(){
    let  btnQui = btnQuiz.classList.contains('active')
    if(btnQui){
        btnQuiz.classList.remove('active') 
        btnQuiz3.classList.add('active')
    }else{
        btnQuiz3.classList.add('active')
    }
    let  btnQui1 = btnQuiz1.classList.contains('active')
    if(btnQui1){
        btnQuiz1.classList.remove('active')
        btnQuiz3.classList.add('active')
    }else{
        btnQuiz3.classList.add('active')
    }
    let  btnQui2 = btnQuiz2.classList.contains('active')
    if(btnQui2){
        btnQuiz2.classList.remove('active')
        btnQuiz3.classList.add('active')
    }else{
        btnQuiz3.classList.add('active')
    }
})