
let currentQuestion = 0
let lastUrl = 'https://alfabank.ru/everyday/debit-cards/';



const question = [

    {
        header:'Полный доступ к личному кабинету Альфа',
        text:'Альфа, недоступный в AppStore, теперь в этом приложении',
        img_src:'img/1.png',
        icon_src:'img/bank.png',
    },
    {
        header:'Неограниченый доступ, не смотря на санкции',
        text:'Не позволим текущей ситуации оставить Вас без онлайн банкинга',
        img_src:'img/2.png',
        icon_src:'img/shield-security.png',
    },
    {
        header:'Совершайте переводы близким, следите за курсом и многое другое',
        text:'Самые важные банковские функции снова в Вашем кармане!',
        img_src:'img/3.png',
        icon_src:'img/empty-wallet-tick.png',
    },
    {
        header:'Доступ к Вашему любимому банку без ограничений',
        text:'Пользуйтесь Альфа как раньше, без ограничений Всего за 999₽ навсегда',
        img_src:'img/4.png',
        icon_src:'img/tag.png',
    }
]

function displayQuestion(){
    const icon__main = document.querySelector('.icon__main');
    const img__alfa = document.querySelector('.img__alfa');
    const main__header = document.querySelector('.main__header');
    const main__text = document.querySelector('.main__text');
    let continue__button = document.querySelector('.continue');
    let arrow__left = document.querySelector('.arrow-left');

    continue__button.addEventListener('click', nextQuestion)
    arrow__left.addEventListener('click', backQuestion)
    icon__main.src = question[currentQuestion].icon_src;
    img__alfa.src = question[currentQuestion].img_src;
    main__header.innerText = question[currentQuestion].header;
    main__text.innerText = question[currentQuestion].text;
    drawDots()
    updateButton();
}


function updateButton() {
    let continue__button = document.querySelector('.continue');
    if (currentQuestion === question.length - 1) {
        continue__button.textContent = 'Оплатить ₽999';
    } else {
        continue__button.textContent = 'Продолжить';
    }
}

function nextQuestion(){
    if(currentQuestion === question.length - 1){
        window.location.href = lastUrl; 
        return;
    }
    currentQuestion++
    checkArrow()
    displayQuestion()
}
function backQuestion(){
    if(currentQuestion === 0){
        return
    }
    currentQuestion--
    checkArrow()
    displayQuestion()
}

function checkArrow(){
    let arrow__left = document.querySelector('.arrow-left');

    if(currentQuestion === 0){
        arrow__left.classList.add('hidden')
    }else{
        arrow__left.classList.remove('hidden')
    }
}
function drawDots(){
    let dots = document.querySelector('.dots');
    switch(currentQuestion){
        case 0:
            dots.innerHTML = `
                     <span class="border"></span>
                    <div class="dots__item"></div>
                    <div class="dots__item"></div>
                    <div class="dots__item"></div>
            `
            break
        case 1:
                dots.innerHTML = `
                <div class="dots__item"></div>
                <span class="border"></span>
                <div class="dots__item"></div>
                <div class="dots__item"></div>
                `
                break
        case 2:
                dots.innerHTML = `
                <div class="dots__item"></div>
                <div class="dots__item"></div>
                <span class="border"></span>
                <div class="dots__item"></div>
                `
                break
        case 3:
                dots.innerHTML = `
                <div class="dots__item"></div>
                <div class="dots__item"></div>
                <div class="dots__item"></div>
                <span class="border"></span>
                `
                break
    }
    
}
displayQuestion()