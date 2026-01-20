import { inventors } from "./data.js";



// Map, Filter, ForEach

const born1500 = inventors
    .filter(inventor => (inventor.year >=1500 && inventor.year <1600))
    .map(inventor => inventor.first + " " + inventor.last)
    .forEach(inventor => console.log(inventor));



// Sort

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.log(ordered);