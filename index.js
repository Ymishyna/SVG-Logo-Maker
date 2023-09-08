const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const SVG = require('./lib/svg');
const { Circle, Triangle, Square } = require('./lib/shapes');

class LogoShape {
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Pick a text for your logo',
                    validate: (text) => text.length <= 3 || "Please pick only 3 letters",
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Pick a color for your text',
                },
                {
                    type: 'list',
                    name: 'shapeType',
                    message: 'Pick a shape for your logo',
                    choices: ['circle', 'triangle', 'square']
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Pick a color of the shape for your logo',
                }
            ])
            .then(({ text, textColor, shapeType, shapeColor }) => {
                let shape;
                switch (shapeType) {
                    case "circle":
                        shape = new Circle();
                        break;
                    case "triangle":
                        shape = new Triangle();
                        break;
                    case "square":
                        shape = new Square();
                        break;
                }
                shape.setColor(shapeColor);
                const svg = new SVG();
                svg.addText(text, textColor);
                svg.addShape(shape)
                return writeFile('logo.svg', svg.render())
            })
            .then(() => console.log('Generated logo.svg'))
            .catch((err) => {
                console.log(err);
                console.log('Oops.. Something went wrong!');
            });
    }
}


new LogoShape().run();

