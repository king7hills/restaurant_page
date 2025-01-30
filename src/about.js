//about Page
//Global imports
import { DynamicPage } from './index.js'; //Note: Use the dynamicPage.js file and link through index.js aggregator.
//Don't forget to import any images. Default setting pulls from a directory named imgs found in the src directory.
import aliceCh1 from './imgs/aliceCh1.jpg';

//Create new page instance
const aboutPage = new DynamicPage('about');

//Some default page elements
//Create new elements: text elements need a (tag, class, and content) as arguments.
//The class argument may be empty: ''.
const h1top = aboutPage.textElement('h1', 'about_title', 'Down the Rabbit Hole');
const h2sub = aboutPage.textElement('h2', 'about_subtitle', "A brief history of Alice's Restaurant");

//Image elements take (src, class, and alt) as arguments.
//In this case, imported image variables are essentially the src link.
//Simply place the call to the above image variable as the first argument
//then add your alt description as the second argument
const heroImage = aboutPage.imageElement(`${aliceCh1}`, 'about_hero', 'Picture of Alice in Wonderland Ch.1');
const p1 = aboutPage.textElement('p', 'about_description', 'Once upon a time, a young girl named Alice dared to venture into the land of complex mathematics.');
const p2 = aboutPage.textElement('p', 'about_description', 'The rabbit was very late for an important date of tea and crumpets.');

//Page initialization. Clears page's array, then loads it, then populates the html with specified content. Order matters.
export function init_about () {
    aboutPage.pageOrder = []
    aboutPage.pageOrder.push(h1top, h2sub, heroImage, p1, p2);
    aboutPage.loadPage(aboutPage.pageOrder);
}