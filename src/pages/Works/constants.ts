import avatar1 from "./assets/avatars/Irina.png";
import avatar2 from "./assets/avatars/Ivan.png";

import work1 from "./assets/prj/orderTaxi.png";
import work2 from "./assets/prj/friendsFilter.png";
import work3 from "./assets/prj/geoReviews.png";
import work4 from "./assets/prj/Hamburger.png";


export const comments = [
  {
    id: 0,
    avatarUrl: avatar1,
    name: "Ирина Петрова",
    text:
      `Этот парень проходил обучение веб-разработке! 
      2 месяца самых тяжелых испытаний 
      и бессонных ночей!`,
  },
  {
    id: 1,
    avatarUrl: avatar2,
    name: "Сергей Иванов",
    text:
      `Этот код выдержит любые испытания. Только пожалуйста, 
      не загружайте сайт на слишком старых браузерах`,
  },
];

export const sliderList = [
  {
    title: "Loft Taxi",
    technologies: "React, Redux, Redux-Form, Redux-Saga, MaterialUI",
    description:
      `Клиентская часть для заказа такси. Пункты назначения 
      предоставляются сервером. По двум точкам строится маршрут.`,
    link: "https://github.com/serbes85/react-project-loftTaxi",
    imgUrl: work1,
  },
  {
    title: "Фильтр друзей",
    technologies: "HTML5, CSS3, JavaScript, HandleBars, VK-API",
    description:
      `Приложение с использованием API VК. С помощью приложения можно 
      отфильтровать (добавить из одного списка в другой по клику по кнопке
      "+" или с помощью "drag and drop") друзей ВКонтакте.`,
    link: "https://github.com/serbes85/js-project-friendsFilter",
    imgUrl: work2,
  },
  {
    title: "Геоотзывы",
    technologies: "HTML5, CSS3, JavaScript, HandleBars, YandexMap",
    description:
      `Приложение с использованием API Яндекс карт. С помощью приложения 
      можно добавить geo-отзывы на карту.`,
    link: "https://github.com/serbes85/js-project-geoReviews",
    imgUrl: work3,
  },
  {
    title: "Бургер",
    technologies: "HTML5, CSS3, JavaScript",
    description:
      `Проект лендинг-страницы по продаже бургеров.`,
    link: "https://github.com/serbes85/hamburger",
    imgUrl: work4,
  },
];
