import './style.css';
import copyTxt from './home.txt';
import menuTxt from './menu.txt';


import restaurantImg from './images/restaurantHome.png';
import menuImage from './images/menu.png';
// import chefImg from './images/chef.png';



const loadPage  = (function () {
    const content = document.getElementById('content');

    const header = document.createElement('div');
    header.classList.add('header');

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
    homeDiv.textContent = 'Home'



    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    menuDiv.textContent = "Menu"

    

    homeDiv.classList.add('page');
    menuDiv.classList.add('page');

    header.appendChild(homeDiv);
    header.appendChild(menuDiv);


    content.appendChild(header);




})();


const homePage = (function() {
    const content = document.getElementById('content');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    // creates the image 
    const homeImg = document.createElement('img');
    homeImg.src = restaurantImg;

    containerDiv.appendChild(homeImg);

    // creates the div for the text side
    const homeText = document.createElement('div');
    homeText.classList.add('text');

    // creates the header
    const pageTitle = document.createElement('h2');
    pageTitle.textContent = 'Welcome to [Restaurant Name]';

    // creates the copy
    const pageCopy = document.createElement('p');
    pageCopy.textContent = copyTxt;

    homeText.appendChild(pageTitle);
    homeText.appendChild(pageCopy);

    containerDiv.appendChild(homeText);




    const initialize = () => {
        content.appendChild(containerDiv);
    }

    const remove = () => {
        content.removeChild(containerDiv);
    }




    return {initialize, remove};
})();



const menuPage = (function() {
    const content = document.getElementById('content');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    // creates the image 
    const menuImg = document.createElement('img');
    menuImg.src = menuImage;

    containerDiv.appendChild(menuImg);

    // creates the div for the text side
    const menuText = document.createElement('div');
    menuText.classList.add('text');

    // creates the header
    const pageTitle = document.createElement('h2');
    pageTitle.textContent = 'Our Menu';

    // creates the copy
    const pageCopy = document.createElement('p');
    pageCopy.textContent = menuTxt;

    menuText.appendChild(pageTitle);
    menuText.appendChild(pageCopy);

    containerDiv.appendChild(menuText);




    const initialize = () => {
        content.appendChild(containerDiv);
    }

    const remove = () => {
        content.removeChild(containerDiv);
    }




    return {initialize, remove};
})();

const buttons = (function() {
    const homebtn = document.querySelector('.home');
    const menubtn = document.querySelector('.menu');

    homebtn.addEventListener('click', () => {
        menuPage.remove();
        homePage.initialize();
    } )
    
    menubtn.addEventListener('click', () => {
        homePage.remove();
        menuPage.initialize();
    } )

})();



homePage.initialize();

