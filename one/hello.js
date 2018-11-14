'use strict';

var s = "Hello";

function greet(name) {
    console.log(s +"," +name +
    "!");
}

function sayBay(name) {
    console.log('bay,' + name);
    return 'abc';
}

module.exports = {
    greetOpen:greet,
    sayBayOpen:sayBay
};
