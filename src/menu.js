//Menu Page
//Global imports
import { DynamicPage } from './index.js'; //Note: Use the dynamicPage.js file and link through index.js aggregator.
//Don't forget to import any images. Default setting pulls from a directory named imgs found in the src directory.
import _ from './imgs/_';

//Create new page instance
const menuPage = new DynamicPage('menu');

//Some default page elements
//Create new elements using this syntax where text elements need a tag and content as arguments.
const h1top = menuPage.textElement('h1', 'Menu');
const h2sub = menuPage.textElement('h2', 'Anything you want (from below)');

//Image elements take src and alt as arguments.
//In this case, imported image variables are essentially the src link.
//Simply place the call to the above image variable as the first argument
//then add your alt description as the second argument
const heroImage = menuPage.imageElement(`{ _ }`, '');
const p1 = menuPage.textElement('p', '');
const p2 = menuPage.textElement('p', '');

//Page initialization. Loads the pages array, then populates the html with that content. Order matters.
export function init_menu () {
    menuPage.pageOrder.push(h1top, h2sub, heroImage, p1, p2);
    menuPage.loadPage(menuPage.pageOrder);
}