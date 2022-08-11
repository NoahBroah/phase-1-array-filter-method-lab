

/*function findMatching(collection, driver) {
    const newArray = [];
    for (const name of collection) {
        if (name.toLowerCase() === driver.toLowerCase()) {
            newArray.push(name);
        }
    }
    return newArray;
}
*/
// This is the same as the Function Above
function findMatching(collection, driver) {
    return collection.filter(name => name.toLowerCase() === driver.toLowerCase())
}

function fuzzyMatch(collection, driverLetter) {
    return collection.filter(firstLetter => firstLetter[0] === driverLetter[0]);
}

function matchName(collection, driverString) {
    return (collection.filter(driver => driver.name === driverString));
}