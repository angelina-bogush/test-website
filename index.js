const page = document.querySelector('.page');
//const cardContainer = page.querySelector('.category__container');
const cardContainerCactuses = page.querySelector('.category__container_cactuses');
const cardContainerOrhideys = page.querySelector('.category__container_orhideys');
const cardContainerPalms = page.querySelector('.category__container_palms');
const cardContainerBonsai = page.querySelector('.category__container_bonsai');
const cardTemplate = page.querySelector('#template-card').content;
const popup = document.querySelector('.popup');
const popupCloseIcon = popup.querySelector('.popup__close-icon');
const popupImage = popup.querySelector('.popup__image');
const popupTitle = popup.querySelector('.popup__title');

const openPopup = function (){
    popup.classList.add('popup_opened');
  }


const createCard = function(array){                   //создание новой карточки
    const newCard = cardTemplate.querySelector('.card').cloneNode(true);
    const newCardName = newCard.querySelector('.card__name');
    const newCardPrice = newCard.querySelector('.card__price');
    const newCardImage = newCard.querySelector('.card__image');
    const newCardData = newCard.querySelector('.card__data');
    const newCardButton = newCard.querySelector('.card__button')
    newCardName.textContent = array['name'];
    newCardImage.src = array['link'];
    newCardImage.alt = array['name'];
    //newCardData.textContent = cardsContent['data'];
    newCardPrice.textContent = array['price'];

    const clickCard = function(array){
        popupImage.src = array['link'];
        popupImage.alt = array['name'];
        popupTitle.textContent = array['name'];
        openPopup()
          }
 newCardImage.addEventListener('click', clickCard);
    return newCard;
}

const addCard = function (array, container) {           //добавление карточек товаров в секции
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
  })
 
  const closePopup = function(){
    popup.classList.remove('popup_opened');
  }

 /* const clickCard = function(array){
popupImage.src = array['link'];
popupImage.alt = array['name'];
popupTitle.textContent = array['name'];
openPopup(popup)
  }*/
  popupCloseIcon.addEventListener('click',() => {
    closePopup()})
