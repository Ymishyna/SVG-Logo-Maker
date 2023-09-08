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
                    name: 'name',
                    message: 'What is your name?',
                },
                {
                    type: 'input',
                    name: 'location',
                    message: 'Where are you from?',
                },
                {
                    type: 'input',
                    name: 'hobby',
                    message: 'What is your favorite hobby?',
                },
                {
                    type: 'input',
                    name: 'food',
                    message: 'What is your favorite food?',
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter your GitHub Username',
                },
                {
                    type: 'input',
                    name: 'linkedin',
                    message: 'Enter your LinkedIn URL.',
                },
            ])
            .then((answers) => {
                const htmlPageContent = generateHTML(answers);

                fs.writeFile('index.html', htmlPageContent, (err) =>
                    err ? console.log(err) : console.log('Successfully created index.html!')
                );
            })
    }
}

new LogoShape().run();

