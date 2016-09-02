# Foundation-UI

This application displays user details from the foundation API at
https://dtt-foundation.herokuapp.com

It illustrates connecting to a JSON-API backend with ember, and how to use
ember-cli-mirage and faker to run ember acceptance tests.

* Visit [http://localhost:4200/users](http://localhost:4200/users) to see a list of users from the foundation API.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

```
git clone https://github.com/dtt101/foundation-ui.git
cd foundation-ui
npm install
bower install
```

## Running / Development

* `ember s --proxy https://dtt-foundation.herokuapp.com`
* Visit the app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
