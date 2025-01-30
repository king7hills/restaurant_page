import { DynamicPage } from "index.js";

const homePage = new DynamicPage('home');



//Home page content
const h1top = homePage.textElement("h1", "Alice's Restaurant");
const h2sub = homePage.textElement("h2", "Get anything you want (on the menu)");
const heroImage = homePage.imageElement("./imgs/vw_bus.jpg", "classic VW bus with VW green color");
const p1 = homePage.textElement("p", "Welcome traveler");
const p2text = "Dumping Alice's garbage will most likely lead to run ins with the police.\n $50 fine and picking it up in the snow is what shall happen.\n Hungry?\n Check out our menu."
const p2 = homePage.textElement("p", p2text);

export function initHome () {
    homePage.pageOrder.push(h1top, h2sub, heroImage, p1, p2);
    homePage.loadPage(homePage.pageOrder);
}