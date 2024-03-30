/* Sets */

function mySet() {
  const collection = [];
 
  this.has = function(element) {
    return(collection.indexOf(element !== -1));
  }

  this.values = function() {
    return collection;
  }

  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  }

  this.remove = function(element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  }

  this.size = function() {
    return collection.length;
  }

  // this method will return the union of two sets
  this.union = function(otherSet) {
    let unionSet = newSet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(function(e) {
      unionSet.add(e);
    });
    secondSet.forEach(function(e){
      unionSet.add(e);
    });
    return unionSet;
  }

  // this method will return the intersection of two sets - all the items in both sets
  this.intersection = function(otherSet) {
    let intersectionSet = new Set();
    let firstSet = this.values();
    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e)
      }
    });
    return intersectionSet;
  }
  
  // this method will return the difference of two sets as a new set - items in one set but not in the other set
  this.difference = function(otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function(e) {
      if(!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }

  // this method will test if the set is a subset of a different set
  this.subset = function(otherSet) {
    let firstSet = this.values();
    return firstSet.every(function(value) {
      return otherSet.has(value);
    });
  }

}

let setA = new mySet();
let setB = new mySet();

setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.intersection(setA).values());