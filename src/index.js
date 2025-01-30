//index.js
import "./styles.css";

export { DynamicPage } from "./dynamicPage.js";

import {init_home} from "./home.js";
import {init_menu} from "./menu.js";
import {init_about} from "./about.js";

init_home(); //Default to home page

function loadContent (initFunction) {
    const page = document.querySelector('div#content');
    page.innerHTML = '';
    initFunction();
};

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () =>
    {loadContent(init_home)},
);

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () =>
    {loadContent(init_menu)},
);

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", () =>
    {loadContent(init_about)},
);