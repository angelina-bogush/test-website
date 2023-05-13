const page = document.querySelector(".page");
const cardContainerCactuses = page.querySelector(
  ".category__container_cactuses"
);
const cardContainerOrhideys = page.querySelector(
  ".category__container_orhideys"
);
const cardContainerPalms = page.querySelector(".category__container_palms");
const cardContainerBonsai = page.querySelector(".category__container_bonsai");
const cardTemplate = page.querySelector("#template-card").content;
const popup = document.querySelector(".popup");
const popupCloseIcon = popup.querySelector(".popup__close-icon");
const popupImage = popup.querySelector(".popup__image");
const popupTitle = popup.querySelector(".popup__title");
const popupPrice = popup.querySelector(".popup__price");
const popupDate = popup.querySelector('.popup__date');
const buttonUp = page.querySelector(".button-up");
const formButtonBuy = popup.querySelector('.form__button');
const popupForm = page.querySelector('.form');
const buttonTheme = page.querySelector('.button-theme');
const buttonLightTheme = page.querySelector('.header__button_light');
const buttonDarkTheme = page.querySelector('.header__button_dark');

const openPopup = function () {
  popup.classList.add("popup_opened");
};
const closePopup = function () {
  popup.classList.remove("popup_opened");
};

const clickCard = function (arrayLink, arrayName, arrayPrice, arrayDate) {
    popupImage.src = arrayLink;
    popupImage.alt = arrayName;
    popupTitle.textContent = arrayName;
    popupPrice.textContent = `Стоимость:  ${arrayPrice}`;
    popupDate.textContent = arrayDate;
    openPopup();

  };

  function getDayInfo(dateString) {
    const date = new Date(dateString);
     const options = {  month: 'long', weekday: 'long', year: 'numeric', week: 'numeric' };
  const formatter = new Intl.DateTimeFormat('ru-RU', options);
   const formattedDate = formatter.format(date);
        return formattedDate.replace(/(\d+)\s/, '$1 неделя ');
   }

const reverseDate = function(arrayData){
return arrayData.split('.').reverse().join('-')
}
const createCard = function (array) {
                                                                       //создание новой карточки
  const newCard = cardTemplate.querySelector(".card").cloneNode(true);
  const newCardName = newCard.querySelector(".card__name");
  const newCardPrice = newCard.querySelector(".card__price");
  const newCardImage = newCard.querySelector(".card__image");
  const newCardDate = newCard.querySelector(".card__date");
  const newCardButton = newCard.querySelector(".card__button");
  newCardName.textContent = array["name"];
  newCardImage.src = array["link"];
  newCardImage.alt = array["name"];
  newCardDate.textContent = getDayInfo(reverseDate(array['data']));
  newCardPrice.textContent = array["price"];

  newCardButton.addEventListener("click", function () {
    clickCard(array["link"], array["name"], array["price"], array["data"]);
  });
  newCardImage.addEventListener("click", function () {
    clickCard(array["link"], array["name"], array["price"], array["data"]);
  });
  return newCard;
};

const addCard = function (array, container) {
  //добавление карточек товаров в секции
  const newCard = createCard(array);
  container.append(newCard);
};

arrayCactuses.forEach((info) => {
  addCard(info, cardContainerCactuses);
});
arrayOrchideys.forEach((info) => {
  addCard(info, cardContainerOrhideys);
});
arrayPalms.forEach((info) => {
  addCard(info, cardContainerPalms);
});
arrayBonsai.forEach((info) => {
  addCard(info, cardContainerBonsai);
});

//закрытие карточки на крестик
popupCloseIcon.addEventListener("click", () => {
  closePopup();
});                             
//кнопка купить
const buyItem = function(){
closePopup();
alert('Поздравляем с покупкой!');
popupForm.reset();
}
formButtonBuy.addEventListener('click', buyItem)

//кнопка скролла наверх
const showButtonUp = function () {
  buttonUp.classList.add("button-up_active"); 
};

const hideButtonUp = function () {
  buttonUp.classList.remove("button-up_active"); 
};
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    scrollY > 300 ? showButtonUp() : hideButtonUp();
  });
buttonUp.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        left: 0,
        behavior: 'smooth'
    }
    )
})                                                

const changeThemeLight = function(){
    page.classList.remove('dark');
    buttonUp.classList.remove('button-up_dark');
    }
 const changeThemeDark = function(){
        page.classList.add('dark');
        buttonUp.classList.add('button-up_dark');
        }

buttonLightTheme.addEventListener('click', changeThemeLight)
buttonDarkTheme.addEventListener('click', changeThemeDark)