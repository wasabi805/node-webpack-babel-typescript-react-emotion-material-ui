![set up](./src/images/webpack-babel-typescript-react.png?raw=true)

# REACT

This repo builds off of the set up for webpack, babel, and typescript found [here](https://github.com/wasabi805/webpack-babel-typescript)

The documentation for setting up React with webpack referrences [Sulenchy's medium post](https://medium.com/@abuduabiodunsulaiman/setup-react-app-with-webpack-ts-and-js-da80cf3b7278)

To run the app,

    npm i start

The documentation below are the modifications to the configurations based off [this repo:](https://github.com/wasabi805/webpack-babel-typescript)

## Remove test

    // remove this import
    import IndexComponent from '../../src/index'

    describe('test', ()=>{
        it('tests that 1 + 1 is equal to 2',()=>{

            // remove this console.log()
            console.log( typeof IndexComponent )
            expect(1+1===2).toBe(true)
        })

        it('tests that 4 divided by 2 is equal to 2',()=>{
            expect(4/2 ===2).toBe(true)
        })
    })

## Installation

    npm install --save-dev react react-dom @babel/preset-react @types/react

## Update presets

Update the presets array In babel.config.js to include @babel/preset-react.

    // inside babel.config.js

    module.exports = {
      presets: [
        ...
        '@babel/preset-env',
        '@babel/preset-typescript',
        ...
      ],
    };

## Update Entry in webpack.config.js

Since all our react componets will get prefixed with .tsx, update the entry point in webpack.config.js

    //inside webpack.config.js
    module.exports = {
      mode: "development",

      // This should be a tsx file now
      entry: "./src/index.tsx",
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.bundle.js",
      },
    }

## Create an App.tsx file

Create a components directory and inside that directory, create an App.tsx file as shown below:

    //inside src/components/App.tsx

    import React from 'react';

    const App = ()=>{
        return (<div>Test</div>)
    }

    export default App

## Update src/index.tsx

    //  inside src/index.tsx
    import React from 'react'
    import ReactDom from 'react-dom'
    import App from './components/App'

    ReactDom.render(
      <App/>, document.getElementById('root')
    )

Notice that we're targeting a dom node with the id of "root" : We'll need to update src/html/index.html

    //inside src/index.html

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Webpack-TypeScript-Tailwind</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>

        // Add this div with an id of "root"

        <div id="'root" ></div>

      </body>
    </html>

## Update package.json scripts

    //  inside package.json

    {
      "name": "webpack-typescript-tailwind",
      "version": "1.0.0",
      "description": "",
      "private": true,
      "scripts": {
        ...
        "webpack": "npx webpack ",
        "typescript": "tsc",
        "format": "npx prettier --write .",
        "test": "jest",
        "dev": "webpack server",

        //  Add these scripts
        "start": "webpack-dev-server --open --mode development --hot",
        "build": "webpack --mode production"

        ...
      },
      ...
    }

## Test the App

    npm run start

# Styled Components | Emotion

[docs for install emotion](https://emotion.sh/docs/install)
[docs for @emotion/babel-plugin](https://github.com/emotion-js/emotion/tree/main/packages/babel-plugin)

## Install emotion

    npm install --save @emotion/react @emotion/styled

## Instal @emotion/babel-plugin

    npm install --save-dev @emotion/babel-plugin

## Update babel configuration

      // Inside babel.config.js

      module.exports = {
        presets: [
        ...
          '@babel/preset-env',
          '@babel/preset-typescript',

          // Add emotion to the presets
          '@emotion'
          ...
        ],
      };

[extending styles](https://styled-components.com/docs/basics#extending-styles)
[passed Props](https://styled-components.com/docs/basics#passed-props)
