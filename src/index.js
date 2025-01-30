//index.js
import "./styles.css";

export { DynamicPage } from "./dynamicPage.js";

import {init_home} from "./home.js";
import {init_menu} from "./menu.js";

init_home(); //Default to home page

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () =>
    {init_home()},
);

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () =>
    {init_menu()},
);