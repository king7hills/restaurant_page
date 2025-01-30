//Menu Page
//Global imports
import { DynamicPage } from './index.js'; //Note: Use the dynamicPage.js file and link through index.js aggregator.
//Don't forget to import any images. Default setting pulls from a directory named imgs found in the src directory.
import placeSetting from './imgs/place_setting.jpg';
import turkishDelight from './imgs/turkish_delight.jpg';

//Create new page instance
const menuPage = new DynamicPage('menu');

//Some default page elements
//Create new elements using this syntax where text elements need a tag and content as arguments.
const h1top = menuPage.textElement('h1', 'menu_title', 'Menu');
const h2sub = menuPage.textElement('h2', 'menu_subtitle', 'Anything you want (from below)');

//Image elements take src and alt as arguments.
//In this case, imported image variables are essentially the src link.
//Simply place the call to the above image variable as the first argument
//then add your alt description as the second argument
const heroImage = menuPage.imageElement(`${placeSetting}`, 'menu_hero_image', 'Picnic cloth place setting with fork and knife');
const h3MenuItem1 = menuPage.textElement('h3', 'menu_item_title', 'Turkish Delight');
const menuItem1image = menuPage.imageElement(`${turkishDelight}`, 'menu_item_image', 'Lovely pistachio turkish delight');
const p1 = menuPage.textElement('p', 'menu_item_description', 'A delicate Turkish candy served family style for the whole table. Pistachio and cherry.');
const p2 = menuPage.textElement('p', 'menu_item_cost', '$9.99');

//Page initialization. Loads the pages array, then populates the html with that content. Order matters.
export function init_menu () {
    menuPage.pageOrder.push(h1top, h2sub, heroImage, h3MenuItem1, menuItem1image, p1, p2);
    menuPage.loadPage(menuPage.pageOrder);
}