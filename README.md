# Drupal 10 Module Compatibility Checker

This is a Node.js module that checks the status of Drupal modules for Drupal 10 compatibility. It uses axios to make GET requests to the Drupal project page of each module and looks for the string "Drupal 10 Compatibility" in the response. It returns an array of objects with the module name and its Drupal 10 compatibility status (true or false).

## Installation
To use this module, you need to have Node.js and npm installed on your system. Clone this repository and run the following command in the project directory:

```
npm install
```

This will install the required dependencies (axios).

## Usage
The main class of this module is Check. It has two asynchronous methods:

- `checkModule(module: string)`: Checks the status of a single module and returns a boolean value (true if the module is compatible with Drupal 10, false otherwise).

- `checkModules(modules: string[])`: Parses an array of module names and returns an array of objects with the name and status of each module.

To use this module in your own project, import the Check class and create a new instance:

```
const CheckDrupalModuleCompatibility = require('drupal-10-compatibility-checker');

const modules = [
  "addtoany",
  "admin_toolbar",
  "advagg",
  "antibot",
  "auto_entitylabel",
];

const checker = new CheckDrupalModuleCompatibility();

checker.checkModules(modules)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
```

This will output an array of objects like this:

```
[
  {
    "name": "addtoany",
    "status": true
  },
  {
    "name": "admin_toolbar",
    "status": false
  },
  {
    "name": "advagg",
    "status": false
  },
  {
    "name": "antibot",
    "status": false
  },
  {
    "name": "auto_entitylabel",
    "status": true
  }
]
```

## Contributing
If you have any suggestions for improvements or additions to this module, feel free to create a pull request or open an issue on the GitHub repository.

## License
This module is licensed under the MIT License.