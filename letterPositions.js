const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    //   //console.log(results[location]);
    }
    else {
    results[sentence[i]] = [i];
    }
  }
}
  // logic to update results here
  return console.log(results);
};

letterPositions("lighthouse in the house");


module.exports = letterPositions;
