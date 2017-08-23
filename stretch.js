function loopyLighthouse(range, multiples, words)
{
  var arr = [];
  for(var i=range[0]; i<range[1]; i++)
  {
    if(i % multiples[0] === 0)
    {
      if (i % multiples[1] === 0)
      {
        arr.push(words[0]+words[1]);
      }
      else arr.push(words[0]);
    }
    else if(i % multiples[1] === 0)
    {
      if (i % multiples[0] === 0)
      {
         arr.push(words[0]+words[1]);
      }
      else arr.push(words[1]);
    }
    else arr.push(i);
  }
  return arr;
}


console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));

