class Shape  {
    constructor(color) {
        this.color = color;
    }
    setColor () {

        return this.color;
    }
}

class Circle extends Shape  {
    constructor(color) {
      super(color);
    }
    render () {
        // Returns Circle with color input
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Triangle extends Shape  {
    constructor(color) {
      super(color);
    }
    render () {
        // Returns Triangle with color input
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape  {
    constructor(color) {
      super(color);
    }
    render () {
        // Returns Square with color input
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

module.exports = {Circle, Triangle, Square};