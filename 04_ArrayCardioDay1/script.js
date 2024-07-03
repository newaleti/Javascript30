// Some data to work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
 
    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Berra, Yogi', 'Berry, Wendell'
];
    
// Array.prototype.filter()
    //The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
    // 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true; //store it to variable fifteen
    }
});
console.table(fifteen);

// Array.prototype.map()
//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map((inventor) => {
  return inventor.first + " " + inventor.last;
});

console.table(fullNames);

// Array.prototype.sort()
// The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted.
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);


// Array.prototype.reduce()
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// 4. How many years did all the inventors live 
const totalYears = inventors.reduce((total, inventor) => {
    return total += (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);


// 5. Sort the inventors by years lived
const oldest = inventors.sort(function (a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});

console.table(oldest);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
// const alphaLast = people.sort((a, b) => (a.last > b.last ? 1 : -1));
const alphaLast = people.sort(function (a, b) {
    const [aLast, aFirst] = a.split(', ');
    const [bLast, bFirst] = b.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(alphaLast);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;    
    return obj;
}, {});
console.log(transportation);
