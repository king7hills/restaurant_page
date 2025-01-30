//dynamicPage.js

// Create a new page with methods to make new element objects and append them
export class DynamicPage {
    constructor (name) {
        this.name = name;
        this.pageOrder = [];
        this.pageContent = document.querySelector('div#content');
    }


    textElement (tag, content) {
        return {
            tag: tag,
            content: content,
            type: 'text',
        }
    }

    imageElement (src, alt) {
        return {
            src: src,
            alt: alt,
            type: 'img',
        }
    }

    addTextElement (obj) {
        const newElement = document.createElement(obj.tag);
        newElement.innerHTML = obj.content;
        this.pageContent.appendChild(newElement);
    }

    addImageElement (obj) {
        const newImage = document.createElement("img");
        newImage.src = obj.src;
        newImage.alt = obj.alt;
        this.pageContent.appendChild(newImage);
    }

    loadPage (array) {
        array.forEach(obj => {
            if (obj.type == 'text') {
                this.addTextElement(obj)
            } else if (obj.type = 'img') {
                this.addImageElement(obj)
            }
        })
    }
}