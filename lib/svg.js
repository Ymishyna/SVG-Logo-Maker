class SVG  {
    constructor() {
        this.elementText = "";
        this.elementShape = "";
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.elementShape}${this.elementText}</svg>`;
    }
    setText (message, color) {
        if (message.length > 3) {
            throw new Error ('Text must not exceed 3 characters.');
        }
        this.elementText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }
    setShape (shape) {
        this.elementShape = shape.render()
    }
}

module.exports = SVG;

