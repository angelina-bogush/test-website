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
const buttonUp = page.querySelector(".button-up");
const formButtonBuy = popup.querySelector('.form__button');


const openPopup = function () {
  popup.classList.add("popup_opened");
};
const closePopup = function () {
  popup.classList.remove("popup_opened");
};

const createCard = function (array) {
                                                                       //создание новой карточки
  const newCard = cardTemplate.querySelector(".card").cloneNode(true);
  const newCardName = newCard.querySelector(".card__name");
  const newCardPrice = newCard.querySelector(".card__price");
  const newCardImage = newCard.querySelector(".card__image");
  const newCardData = newCard.querySelector(".card__data");
  const newCardButton = newCard.querySelector(".card__button");
  newCardName.textContent = array["name"];
  newCardImage.src = array["link"];
  newCardImage.alt = array["name"];
  //newCardData.textContent = cardsContent['data'];
  newCardPrice.textContent = array["price"];

  const clickCard = function (arrayLink, arrayName, arrayPrice) {
    popupImage.src = arrayLink;
    popupImage.alt = arrayName;
    popupTitle.textContent = arrayName;
    popupPrice.textContent = `Стоимость:  ${arrayPrice}`;
    openPopup();
  };
  newCardButton.addEventListener("click", function () {
    clickCard(array["link"], array["name"], array["price"]);
  });
  newCardImage.addEventListener("click", function () {
    clickCard(array["link"], array["name"], array["price"]);
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
alert('Поздравляем с покупкой!')
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


