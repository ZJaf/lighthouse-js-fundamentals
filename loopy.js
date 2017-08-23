function printNumbers()
{
  var arr = [];
  for(var i=100; i<200; i++)
  {
    if(i % 3 === 0)
    {
      if (i % 4 === 0)
      {
        arr.push("LoopyLighthouse");
      }
      else arr.push("Loopy");
    }
    else if(i % 4 === 0)
    {
      if (i % 3 === 0)
      {
         arr.push("LoopyLighthouse");
      }
      else arr.push("Lighthouse");
    }
    else arr.push(i);
  }
  return arr;
}

console.log(printNumbers());

