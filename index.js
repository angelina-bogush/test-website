const page = document.querySelector(".page");
const cardContainerCactuses = page.querySelector(
  ".category__container_cactuses"
);
const cardContainerOrhideys = page.querySelector(
  ".category__container_orhideys"
);
const header = page.querySelector('.header');
const headerLinks = page.querySelectorAll('.header__link');
const categoriesLinks = page.querySelectorAll('.categories__link');
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
const toggleButton = page.querySelector('.header__change-theme');
const toggleButtonText = page.querySelector('.header__theme-text');
const headerBag = page.querySelector('.header__bag');
const menuButton = page.querySelector('.header__menu-button');
const menu = page.querySelector('.header__list');
//открытие карточки при покупки
const openPopup = function () {
  popup.classList.add("popup_opened");
};
const closePopup = function () {
  popup.classList.remove("popup_opened");
};
//функция даты
 function getDayInfo(dateString) {
   const date = new Date(dateString);
   const options = {
     weekday: "long",
     week: "numeric",
     month: "long",
     year: "numeric",
   };
   const formatter = new Intl.DateTimeFormat("ru-RU", options);
   const formattedDate = formatter.format(date);
   const parts = formattedDate.split(" ");
   const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
   const firstMondayOfMonth = new Date(firstDayOfMonth);
   firstMondayOfMonth.setDate(
     firstMondayOfMonth.getDate() + ((1 - firstDayOfMonth.getDay() + 7) % 7)
   );
   const weekNumber =
     Math.floor((date.getDate() - firstMondayOfMonth.getDate()) / 7) + 1;
   const monthsGenitive = [
     "января",
     "февраля",
     "марта",
     "апреля",
     "мая",
     "июня",
     "июля",
     "августа",
     "сентября",
     "октября",
     "ноября",
     "декабря",
   ];
   const monthIndex = date.getMonth();
   const monthGenitive = monthsGenitive[monthIndex];
   const result = `${parts[3]}, ${weekNumber} неделя ${monthGenitive} ${parts[1]} года`;
   return result;
 }
//редактирую дату под стандарт ISO
 const reverseDate = function (arrayData) {
   return arrayData.split(".").reverse().join("-");
 };
 //функция открытия карточки при клике
 const clickCard = function (arrayLink, arrayName, arrayPrice, arrayDate) {
   popupImage.src = arrayLink;
   popupImage.alt = arrayName;
   popupTitle.textContent = arrayName;
   popupPrice.textContent = `Стоимость:  ${arrayPrice}`;
   popupDate.textContent = getDayInfo(arrayDate);
   openPopup();
 };

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
   newCardDate.textContent = getDayInfo(reverseDate(array["data"]));
   newCardPrice.textContent = array["price"];

   newCardButton.addEventListener("click", function () {
     clickCard(array["link"], array["name"], array["price"], array["data"]);
   });
   newCardImage.addEventListener("click", function () {
     clickCard(array["link"], array["name"], array["price"], array["data"]);
   });
   return newCard;
 };
//добавление новой карточки в категорию
 const addCard = function (array, container) {
   const newCard = createCard(array);
   container.append(newCard);
 };
//перебор массивов для выведения карточек
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

 //закрытие карточки
 popupCloseIcon.addEventListener("click", () => {
   closePopup();
 });
 //кнопка купить
 const buyItem = function () {
   closePopup();
   alert("Поздравляем с покупкой!");
   popupForm.reset();
 };
 popupForm.addEventListener("submit", buyItem);

 //кнопка скролла наверх
 const showButtonUp = function () {
   buttonUp.classList.add("button-up_active");
 };

 const hideButtonUp = function () {
   buttonUp.classList.remove("button-up_active");
 };
 window.addEventListener("scroll", () => {
   const scrollY = window.scrollY;
   scrollY > 300 ? showButtonUp() : hideButtonUp();
 });
 buttonUp.addEventListener("click", () => {
   window.scrollTo({
     top: 0,
     left: 0,
     behavior: "smooth",
   });
 });
// кнопка смены темы
 const changeThemeDark = function () {
   page.classList.toggle("dark");
   buttonUp.classList.toggle("button-up_dark");
   header.classList.toggle("dark");
   headerLinks.forEach((link) => {
     link.classList.toggle("dark");
   });
   toggleButtonText.classList.toggle("dark");
   headerBag.classList.toggle("dark");
   categoriesLinks.forEach((link) => {
     link.classList.toggle("dark");
   });
 };
 toggleButton.addEventListener("click", changeThemeDark);

  