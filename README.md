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

    Angular Intro

        Angular is a typescript framework to develop SPA (Single Page Applications).

        WebSite     is a folder containing a few pre-scripted html documents, hosted on a http-server.

        Dynamic Web Applications

            Server                                                          Client

                server-side programs 
                (servlets / .aspx / .jsp)

                                            <---------------REQ---------------

                                        generate html
                                        content in 
                                        the runtime

                                            -------RESP (generated html content)--->

        Single Page Applications

            Server                                                          Client

                index.html + *.js
                (spa-bundle)
                                            <---------------REQ---------
                                            -------RESP (spa-bundle)----->      index.html along with the JS 
                                                                                    will be loaded.

                                                                                To respond to any event
                                                                                or form submiton or
                                                                                link, the JS on the client
                                                                                will respond. 

                                                                                JS on the cleint can generate
                                                                                dynamic html content
                                                                                and repalce the contnet in the
                                                                                index.html on the go....

                rest-api            <------(.xml/.json)--------------------->   JS app


        AngularJS, Angular, ReactJS, VueJS ..etc., are a few frameworks to develop SPA's. 

        AngularJS       is a javascript based framework.

        Angular 2       is a typescript based framework.
        to Angular 17

    Why we need NodeJS ?

        A project development involves...
            Compostion                          IDE                         VSCode
            Compilation                         compiler(.ts into .js)      tsc
            Dependency Management               build tool                  npm
            Building                            build tool                  npm, angular cli
            Testing                             testing framework           jasmine, karma
            Packing                             build tool                  npm, angular cli
            
            and these tools like npm, tsc, angular cli ..etc, are also JS programs
            and need to run on developer machine (not on client). Thats where
            we need NodeJS.

        the final build-file is then hsoted on a server and passed to a client for execution.

    Angular CLI

        Angular Command Line Interface is a frontier tool offering scripts to automate
        various project management tasks like creating a project, building a project, testing a project
        ...etc.,

        installing angular cli      npm i -g @angular/cli@16.1.3

        ng version              gives the angular version
                
        ng new <proj-name>

                creates a enw angular project. 
                    it automates
                        1. creating a folder for the project
                        2. npm init -y
                        3. npm i all-angular-libraries-along-with-typescript ....
                        4. do initial project structure.

        cd <proj-name>
            
            ng build                        compile, and create a dist folder having the generated artifacts

            ng serve                        compile, and host the build files on a development server @ 4200 port

            ng serve --port 9999            compile, and host the build files on a development server @ 9999 port

            ng serve --port 9999 -o         compile, and host the build files on a development server @ 9999 port 
                                            and launchs the browser pointing to http://localhost:9999
            
            ng test                         compile, and invokes all the test cases.

            ng g (                          short cut for 'ng generate' is used to generate variosu artifacts of the application.

    Angular Architecture

        1. Each angular artifact is a typescript class
        2. Each angular artifact (typescript class) is marked with a decorator to identify their role.
        3. Each decorator is passed a json object called meta-data which serves providing config., to the artifact.

        An angular app comprises

            Modules
                            @NgeModule({
                                declarations:[],
                                imports:[],
                                exports:[],
                                providers:[],
                                bootstrap:[]
                            })
                            class SalesModule {}
            Directives
                            @Directive({
                                selector:'',
                                providers:[]
                            })
                            class FastMovingStockDirective {}
            Components
                            @Component({
                                selector:'',
                                template-url:'',
                                styleUrls:[],
                                providers:[]
                            })
                            class DashboardComponent {}
            Pipes
                            @Pipe({
                                name:'',
                                providers:[]
                            })
                            class InWordsPipe {}
            Services
                            @Injectable({
                                providedIn:'',
                                providers:[]
                            })
                            class OrderBookingService {}

    Angular Modules

        An angular module is different form a typescript/javascript module. Each .ts file is a typescript module.
        We have angular moduels and typescript or javascript modules work alongside. An angular module is a typescript
        class that houses or holds a group of components, directives, pipes and services together.

        Modules are proposed for better maintenence and reusability.

        1. Each angular application will have one and only one top-level module called the 'ROOT-MODULE'.
        2. All other modules are called 'FEATURE-MODULES'
        3. AppModule in 'app.module.ts' is the standard name used for Root-Modules.
    
            @NgeModule({
                declarations:[],  //a list of components, pipes and directives that belong to this module
                imports:[],       //a list of sub-module to be imported into this module
                exports:[],       //a list of components, pipes and directives that belong to this module & can be accessed by other mod.,
                providers:[],     //a list of services that shall be managed by the injector of this module  
                bootstrap:[]      //a list of components that has to be instantiated immidiatly after loading this module  
            })
            class SalesModule {}

        4. RootModules along will have 'bootstrap:[]' section of the meta-data.
        5. RootModules along will not have 'exports:[]' section of the meta-data.

    Angular Components & Directives

        Angular offers HTML extendability meaning that we can create our own html attributes and elements.

        Attribute Directives / Directives           are attributes desinged in angular
        Structural Directives                       are attribute directives that can control the structure
        Component Directives / Components           are elements designed in angular

    Angular Components

        Each component is an html-element defined in angular, and is made up of three
        parts:
                a class         .component.ts       holds the state and behabiour (fields and methods)
                a template      .component.html     holds the html dom 
                a styleSheet    .component.css      holds the css-styling

        @Component({
            selector:'tag-name',
            template-url:'dashboard.component.html',
            styleUrls:['dashboard.component.css'],
            providers:[ /* a list of services that shall be managed by the injector of this component */  ]
        })
        class DashboardComponent {}

        To generate a component using Angular CLI

            ng generate component ComponentName
            ng g c ComponentName
            ng g c ComponentName --skip-tests
            ng g c module-name/ComponentName  --module module-name.module --skip-tests

    Global Style Sheet

        src/styles.css

    Angular Data Binding

        Accessing the fields and method fo a component class in its template is called data binding.

        Interpolation

            is embeding an angular expression into the text of an html element.

            <tag-name>{{angular-expression}}</tag-name>

        Two-way Data Binding

            is used to receive and populate data from and into a form-input-element.

            'ngModel' is a attribute directive from 'FormsModule' from '@angular/forms' is used.

            <input name="tb1" [(ngModel)]="field" />

        One-way Data Binding
            Attribute Binding

                <tag-name [attribute-name]="angular-expression"> </tag-name>

                <p title="abcd"></p>            the title's value is 'abcd'
                <p [title]="abcd"></p>          the title is assigned the value of the field abcd

            Event Binding

                <tag-name (event-attribute-directive)="method($event)"></tag-name>

                $event is a built-in object that carries data emited by the event

                html-event-attributes           angular-event-attribute-directives
                ----------------------------------------------------------------------------
                    onclick                         click
                    ondblclick                      dblClick
                    onblur                          blur
                    onfocus                         focus
                    onchange                        change
                    onmouseover                     mouseOver
                    onmousedown                     mouseDown
                    onkeyup                         keyUp
                    onkeydown                       keyDown
                    onsubmit                        ngSubmit
                    onload                          load

            Css Style Binding

                <tag-name [style.cssProperty]="angular-expression"></tag-name>

                using 'ngStyle' attribute directive

                    <tag-name [ngStyle]="styleObject"></tag-name>

                    styleObject must be a json object where the css-properties are keys
                    and their values are values

                    let styleObject = {'css-property':value,....};

            Css Class Binding
    
                <tag-name [class.className]="angular-boolean-expression"></tag-name>

                using 'ngClass' attribute directive

                    <tag-name [ngClass]="arrayOfClasses"></tag-name>

                    let arrayOfClasses = ['css-class1','css-class2'];
                    
                    <tag-name [ngClass]="classesObject"></tag-name>

                    let classesObject = {cssClass1:booleanExpression1,cssClass2::booleanExpression2};

    Attribute Directives

        built-in
            
            click,dblClick,mouseOver ...etc.,
            ngModel,ngForm from FormsModule
            routerLink,routerLinkActive from RouterModule
            formControl,formControlName,formGroup from ReactiveFormsModule
            ...etc.,

        custom

            ng g directive FastMovingStock --skip-tests

            @Directive({
                selector:'[appFastMovingStock]'
            })
            class FastMovingStockDirective {
                constructor(private ele:ElementRef){

                }
            }

            @HostListener("eventname")
                is a decorator used on a method, so that the method can
                be invoekd when an event occurs on the underlying element.

            @Input()
                is used to mark a field of the class to receive data from the element.
            
            <tag-name appFastMovingStock> </tag-name>
            <tag-name appFastMovingStock=""> </tag-name>
            <tag-name [appFastMovingStock]=""> </tag-name>

    Structural Directives

        *ngIf

            <ng-template [ngIf]="angular-boolean-expression">
                <p> this para will apper only if the boolean expression evalautes to true</p>
            </ng-template>

            <p *ngIf="angular-boolean-expression"> 
                this para will apper only if the boolean expression evalautes to true
            </p>

        *ngFor
            <ng-template [ngFor]="let loopingVar of array">
                <p> this para will be created one for each ele in that array</p>
            </ng-template>

            <p *ngFor="let loopingVar of array"> 
                this para will be created one for each ele in that array
            </p>

        ngSwitch    *ngSwitchCase *ngDefault

            <div [ngSwitch]="angular-expression">
                <p *ngSwitchCase="value1"> appears if the expression evalautes to value1 </p>
                <p *ngSwitchCase="value2"> appears if the expression evalautes to value2 </p>
                <p *ngSwitchCase="value3"> appears if the expression evalautes to value3 </p>
                <p *ngSwitchCase="value4"> appears if the expression evalautes to value4 </p>
                <p *ngDefault> appears if none of the above values match the expression result</p>
            </div>

    Pipes
    
        A pipe is used to transform a value.

            {{ expression | pipe-name : param1 : param2}}

        in-built pipes

            lowercase
            uppercase
            titlecase
            number
            currency
            date
            json
            async

        custom pipe
    
            ng g pipe PipeName --skip-tests

                @Pipe({
                    name:'',
                    providers:[]
                })
                class InWordsPipe implements PipeTransfomr {
                    transform(value:any,...params:any):any {
                        //here goes the code..
                        return transformedValue;
                    }
                }