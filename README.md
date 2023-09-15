# SVG Logo Maker

## Description

Building a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

## Table of Contents 
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Walkthrough Video](#walkthrough-video)
- [Helpful SVG Resources](#helpful-svg-resources)
- [Questions](#questions)

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Mock-Up

The following image shows a mock-up of the generated SVG given the following input entered by the user: `SVG` for the text, `white` for the text color, `circle` from the list of shapes, and `green` for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:

![Image showing a green circle with white text that reads "SVG.".](./Images/10-oop-homework-demo.png)

## Installation

1. Download the zip file and copy it to a directory of your choice or clone to a directory of your choice using your terminal. 
2. Open the file in VS Code or any editor you prefer.
3. Open the terminal in VS Code and make sure you’re in the correct directory.
4. Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.
5. Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.
6. Ensure inquirer is installed [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4). Run `npm i` to install dependencies in local project directory.

## Usage

1. Open your terminal.
2. The application will be invoked by using the following command:

```bash
node index.js
```

3. Answer questions that follow.
4. A logo.svg file will be generated.
5. To perform Unit Testing by using Jest invoke the following command - `npm test`

## Contributing

Any Contribution is more than welcome!

## Walkthrough Video

```
Disclaimer: The following video provides an illustrative example of how to respond to prompts using the given content. It is intended solely for instructional purposes and to showcase the concept. Users are encouraged to utilize their own responses, thoughts, and ideas when interacting with prompts to achieve personalized and authentic outcomes. The video's content should not be considered prescriptive or definitive, as individual preferences, opinions, and circumstances vary. Viewer discretion is advised, and any actions taken based on the video's content are the responsibility of the user.
````
[Walkthrough Video Link](https://drive.google.com/file/d/1hq4dmEL1C9HxiAxeRvb931_xIhClTvZ5/view?usp=sharing)

## Questions

If you have any question, Email me at: yana.mishina.92@gmail.com

Find me on GitHub: [Ymishyna](https://github.com/Ymishyna)




