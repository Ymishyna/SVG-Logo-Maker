class SVG  {
    constructor() {
        this.elementText = "";
        this.elementShape = "";
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.elementShape} ${this.elementText}</svg>`;
    }
    addText (message, color) {
        if (message.length > 3) {
            console.log(message.length)
            throw new Error ('Please pick only 3 letters');
        }
        this.elementText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`
    }
    addShape (shape) {
        this.elementShape = shape.render()
    }
}

module.exports = SVG;

