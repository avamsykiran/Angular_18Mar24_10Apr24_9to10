Angular 15
-------------------------------------------------------------------------

    Lab Setup
        Chrome
        VSCode          https://code.visualstudio.com/download
        NodeJS          https://nodejs.org                          node --version
        Angular CLI     npm i -g @angular/cli                       ng version

    Pre-Requisites
        HTML 5
        CSS 3
        Bootstrap 5 (optional)
        Javascript (ES 6)

    NodeJS

        is a javascript runtime.

          .js
          ----
         nodejs
        -------
           OS


        NodeJS offers npm (node package manager) as a build tool.

        npm init -y         creates a new node project
                            npm uses 'package.json' as a build config file.

        npm i thrid-party-packge-name
        npm uninstall thrid-party-packge-name

                            node_modules    folder holds all the downloaded dependencies.

        Javascript Modules

            CommonJS Modules
            RequireJS Modules
            ES6 - ECMAScript Modules (esm)

            Each .js file is a module

            Each artifact of a Javascript module is private to that module.

            'export' keyword is used to allow access to the artifacts of a module outside the module.

            'import' keyword is used to bring the artifacts from one mdoule to another.

            'export default' is used to provide a default artifact of a module. And a module can have
            only one such artifact. Default artifacts can be imported with out {} .

    Typescript

        Typescript = JavaScript + Types

        Creating a project:

            npm init -y
            npm i Typescript 

            npx tsc --init

        Compiling

            npx tsc filename.ts 

        Datatypes

            number
            string
            boolean
            bigint
            symbol
            void

        Special Datatypes

            any
            unknown
            never
            undefined
            null

        Standard tsconfig

            {
                "compilerOptions": {
                    "module": "commonjs",
                    "esModuleInterop": true,
                    "target": "es6",
                    "moduleResolution": "node",
                    "sourceMap": false,
                    "outDir": "dist"
                },
                "lib": ["es2015"]
            }

        functions

            function funName(param1:type,param2:type) : returntype {

            }

            const funName = function(param1:type,param2:type) : returntype {

            }

            returnType can be any supported data type inc;uding void and never.

            mostly we use void, and void facilitates null value.
            never doesnt even allow nulls.

            
        OOP

            interface
            class
            aliases
            enums
