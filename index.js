const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }

// translate

const dataI18 = document.querySelectorAll('[data-i18]');
let language = document.querySelector('.language-active');
const languageBtns = document.querySelectorAll('.language');
let lang = 'en';

languageBtns.forEach(item => {
    item.addEventListener("click", event => {
        lang = event.target.innerHTML.toLowerCase();
        console.log(lang);
        languageBtns.forEach(item => {
            item.classList.remove('active')
            event.target.classList.add('active')
        })
            dataI18.forEach(item => {
                if( lang == 'ru'){
                    for( let i in i18Obj.ru) {
                        if ( i == item.dataset.i18) {
                            item.textContent = `${i18Obj.ru[i]}`
                        }
                    }
                }
                if( lang == 'en'){
                    for( let i in i18Obj.en) {
                        if ( i == item.dataset.i18) {
                            item.textContent = `${i18Obj.en[i]}`
                        }
                    }
                } 
            })
    })
})


// burger-menu

const iconMenu = document.querySelectorAll('div.menu__icon');
if(iconMenu){
    const hero = document.querySelector('.section__hero');
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    iconMenu[0].addEventListener("click", function(e) {
        iconMenu[0].classList.toggle('_active');
        nav.classList.toggle('_active');
        hero.classList.toggle('_active');
        header.classList.toggle('_active');
    })
};

// seasons event

const seasons = document.querySelectorAll('button.seasons__item');
const photo = document.querySelectorAll('div.photo__item');

seasons[3].classList.add('_active');

for (let i = 0; i < photo.length; i++) {
    if(photo[i].attributes['data-number'].value == 3) {
        photo[i].classList.add('visible');
    }
}

const Click = (e) => {
    const selectedSeasons =  e.target.attributes['data-number'].value

    seasons[0].classList.remove('_active');
    seasons[1].classList.remove('_active');
    seasons[2].classList.remove('_active');
    seasons[3].classList.remove('_active');

    seasons[selectedSeasons].classList.add('active');

    for (let i = 0; i < photo.length; i++) {
            photo[i].classList.remove('visible');
    }

    for (let i = 0; i < photo.length; i++) {
        if(photo[i].attributes['data-number'].value == selectedSeasons) {
            photo[i].classList.add('visible');
            seasons[i].classList.add('_active');
        }
    }
}

for (i = 0; i < seasons.length; i++){
    seasons[i].addEventListener("click", Click, false)
}