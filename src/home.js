//home.js

const pageContent = document.querySelector('div#content');

function addTextElement (tag, content) {
    const newElement = document.createElement(tag);
    newElement.innerHTML = content;
    pageContent.appendChild(newElement);
};

function textElement (tag, content) {
    this.tag = tag;
    this.content = content;
};

function imageElement (src, alt) {
    this.src = src;
    this.alt = alt;
}

function addImageElement (src, alt) {
    const newImage = document.createElement("img");
    newImage.src = src;
    newImage.alt = alt;
    pageContent.appendChild(newImage);
}



//Home page content
const h1top = new textElement("h1", "Alice's Restaurant");
const h2sub = new textElement("h2", "Get anything you want (on the menu)");
const heroImage = new imageElement("./imgs/vw_bus.jpg", "classic VW bus with VW green color");
const p1 = new textElement("p", "Welcome traveler");
const p2text = "Dumping Alice's garbage will most likely lead to run ins with the police.\n $50 fine and picking it up in the snow is what shall happen.\n Hungry?\n Check out our menu."
const p2 = new textElement("p", p2text);