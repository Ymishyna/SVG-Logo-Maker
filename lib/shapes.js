class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        // Returns Circle with color input
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        // Returns Triangle with color input
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        // Returns Square with color input
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };