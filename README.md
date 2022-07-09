![set up](./src/images/webpack-babel-typescript-react.png?raw=true)

# NODE SET UP

[see](https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript)

create a server directory in root dir
cd into server directory and run npm init

install ts-node

    npm i ts-node

install express

    npm install --save express

then install typescript

    npm install --save-dev typescript -save-dev @types/express

then create a tsconfig.json file in server directory and add:

    // inside tsconfig.json

    {
      "compilerOptions": {
        "module": "commonjs",
        "esModuleInterop": true,
        "target": "es6",
        "moduleResolution": "node",
        "sourceMap": true,
        "outDir": "dist"
      },
      "lib": ["es2015"]
    }

in server create am src directory with and app.ts file init

Allow the [useage of import and exports in express](https://github.com/TypeStrong/ts-node/issues/1171#issuecomment-798929168)
add this script in package.json

    // inside package.json
    scripts:{
      server: "server": "node app.ts --experimental-modules server.mjs"
    }

Run the server script :

    npm run server
