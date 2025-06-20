function consecutiveSubstrings(string) {
  //Initializing result array to return
  const result = [];

  //If string has a length of 0, return empty array
  //If it has a length of 1, return an array with just the string
  if (string.length === 0){
    return result;
  } else if (string.length === 1) {
    result.push(string);
    return result;
  }

  //Outer loop that will iterate along each substring in the string,
  //to use each as a starting point
  for (let i = 0; i < string.length; i++){
    //Inner loop will iterate along each substring after the starting point,
    //to use each as an ending point
    for (let j = i + 1; j < string.length + 1; j++){
      //Add the substring that goes from start point to end point to the result array
      result.push(string.slice(i, j));
    }
  }

  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;