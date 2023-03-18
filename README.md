# Build Simple Website with NodeJS, Express & EJS view engine

## Document
* Clone this repo.
* Install dependencies using [npm](https://www.npmjs.com/) javascript package manager.

    ```shell
    npm install
    ```

* Start node server with [nodemon](https://nodemon.io/): 

    ```shell
    nodemon start
    ```

* Tune to url: `http://localhost:3000`

All boilerplate code managed by [express generator](https://expressjs.com/en/starter/generator.html) framework adhering to DRY rule. Routes are defined in routes/index.js file, static view pages are in views folder. I have implemented partials concept to avoid code redundancy in html using EJS view engine. Css and Javascript files are stored in public folder. 