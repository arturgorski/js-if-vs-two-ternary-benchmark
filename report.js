const fs = require('fs');

const fileToArray = pathToFile => {
    return fs.readFileSync(pathToFile)
            .toString()
            .split("\n")
            .filter(val => val.trim() !== '')
            .map(parseFloat);
};

const sum = (a, b) => a + b;

const addAllElements = arr => arr.reduce(sum, 0);

const averageValue = arr => addAllElements(arr) / arr.length;

const report = (pathToFile, testName) => {
    let testResults = fileToArray(pathToFile);
    let sumOfValues = addAllElements(testResults);
    let averageTime = averageValue(testResults);
    
    console.info('=====================================');
    console.info(`Test name: ${testName}`);
    console.info(`File: ${pathToFile}`);
    console.info('=====================================\n');

    console.info(`Total time: ${sumOfValues} ms`);
    console.info(`Average time: ${averageTime} ms`);
    console.info(`Lowest value: ${Math.min(...testResults)} ms`);
    console.info(`Highest value: ${Math.max(...testResults)} ms`);

    console.info('\n');
};

report('./t1.txt', 'One if statement');
report('./t2.txt', 'Two ternary operators');
