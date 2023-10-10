
const dateFunctions = require('./dates_functions');

// Using functions from dateFunctions module
const currentDate = dateFunctions.getCurrentDate();
const currentMonth = dateFunctions.getCurrentMonth();
const currentDayOfMonth = dateFunctions.getCurrentDayOfMonth();
const currentDayOfWeek = dateFunctions.getCurrentDayOfWeek();
const formattedDate = dateFunctions.formatDate();


console.log("Current Date:", currentDate);
console.log("Current Month:", currentMonth);
console.log("Current Day of the Month:", currentDayOfMonth);
console.log("Current Day of the Week:", currentDayOfWeek);
console.log("Formatted Date:", formattedDate);


// use of Node.js modules:

// File-based Modules:

// In Node.js, each JavaScript file is treated as a separate module.
// Modules encapsulate code and provide a way to organize functionality.
// Exporting and Importing:

// Modules use exports to expose functionality.
// Functions, variables, or objects can be exported for use in other modules.
// require is used to import functionality from other modules.
// module.exports:

// The module object in Node.js contains a property called exports.
// Assigning properties or functions to module.exports makes them accessible outside the module.
// CommonJS Pattern:

// Node.js follows the CommonJS pattern for module definition.
// It involves the use of require for importing and module.exports for exporting.
// Core Modules:

// Node.js provides core modules (e.g., fs, http) that can be imported and used in applications.
// Core modules are part of the Node.js runtime and do not require installation.
// Local Modules:

// Developers can create and use their own modules by organizing code into separate files.
// Local modules are created by dividing the application into smaller, manageable components.
// npm Modules:

// External modules can be installed via npm (Node Package Manager).
// npm allows developers to share and use third-party libraries easily.
// Circular Dependencies:

// Circular dependencies (when modules depend on each other) are managed by Node.js without causing infinite loops.
// Asynchronous Module Loading:

// Node.js supports asynchronous loading of modules, allowing non-blocking behavior in applications.
// ES6 Module Syntax:

// Starting from Node.js version 13, experimental support for ES6 module syntax (import and export) is available.
// It provides an alternative to the CommonJS pattern.