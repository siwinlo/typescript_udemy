"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("../sorter");
var NumbersCollection_1 = require("../NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var sorter = new sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
