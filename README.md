# A FizzBuzz User Interface

This is a User Interface implementing the FizzBuzz Coding Kata in VueJS. The Project was setup via VueCLI. And is hosted on [Vercel](https://vercel.com/) (__->__ formerly known as __Zeit Now__) under [vuezzbuzz.now.sh](https://vuezzbuzz.now.sh/).

## Workflow

The [master](https://github.com/fuxi-de/vuezzbuzz/tree/master) branch is automatically deployed to [vuezzbuzz.now.sh](https://vuezzbuzz.now.sh/) if it gets updated (mainly via PR).

The [develop](https://github.com/fuxi-de/vuezzbuzz/tree/develop) branch represents the current development progress and is automatically deployed to [vuezzbuzz-git-develop.fuxi-de.now.sh](https://vuezzbuzz-git-develop.fuxi-de.now.sh/).

The [feat/srvless](https://github.com/fuxi-de/vuezzbuzz/tree/feat/srvless) branch is a feature branch where the FizzBuzz logic is implemented as a serverless function. This is abandoned as a WIP because it is neither a practical nor performant approach for our use case compared to implementing the function in vue itself and I mainly implemented it because I wanted to play around with the serverless feature of vercel in the first place.

### Get going

Running:

```shell
npm install
```

will install all needed dependencies and running:

```shell
npm run serve
```

will serve the application in development mode with hot reloading under [localhost:8080](http://localhost:8080/)

### Whats included

The application currently consists of 3 components. One (_/src/components/FizzBuzz.vue_) responsible for providing an input form and handling the user input and another one (_/src/components/SuccessMessage.vue_) responsible for displaying a Success Message if the input could be processed correctly. Also Buttons are implemented as a component (_/src/components/Button.vue_) as they share base styles, markup and functionality and deviating usecases can be handled via props the Button component accepts.

#### Tests

unit tests can be run via

```shell
npm run test:unit
```

the suites are implemented using [mochaJS](https://mochajs.org/) and are located under _/tests/unit_

integration tests are located under _/tests/e2e_ can be run via

```shell
npm run test:e2e
```

and are implemented using [cypress](https://www.cypress.io/)

#### Styles

For convenient styling [tailwindcss](https://tailwindcss.com/) is pulled in. The config therefor can be found in a dedicated file (_tailwind.config.js_). Currently the only thing happening here is the definition of the primary immowelt color, one additional shade. This can be extended if needed. The components styles are currently implemented purely by the utility classes that tailwind provides.

### Compiles and minifies for production

```shell
npm run build
```
