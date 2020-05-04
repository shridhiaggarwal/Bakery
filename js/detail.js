 var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
var name='';
for (var i = 0; i < (queries.length-1); i++)
{
  var name= name + ' ' +queries[i];
  document.getElementById('name').innerHTML= name + " !";
}
 document.getElementById("image").src = "images/" + queries[i] + ".jpeg"; 
 var np = queries[i];
 var value = queries[0];
switch(value)
{
  case 'Desert':
  var t;
  for(t=1;t<desert.length+1;t++)
  {
    document.getElementById("n"+t).innerHTML= desert[t-1].name ;
    document.getElementById("i"+t).src = desert[t-1].src; 
  }
  break;

  case 'Fruit':
  var t;
  for(t=1;t<fruit.length+1;t++)
  {
  document.getElementById("n"+t).innerHTML= fruit[t-1].name ;
  document.getElementById("i"+t).src = fruit[t-1].src; 
  }
  break;

  case 'Chocolate':
  var t;
  for(t=1;t<chocolate.length+1;t++)
  {
  document.getElementById("n"+t).innerHTML= chocolate[t-1].name ;
  document.getElementById("i"+t).src = chocolate[t-1].src; 
  }
  break;

  case 'Wedding':
  var t;
  for(t=1;t<chocolate.length+1;t++)
  {
  document.getElementById("n"+t).innerHTML= wed[t-1].name ;
  document.getElementById("i"+t).src = wed[t-1].src; 
  }
  break;

  case 'Buns':
  var t;
  for(t=1;t<chocolate.length+1;t++)
  {
  document.getElementById("n"+t).innerHTML= bun[t-1].name ;
  document.getElementById("i"+t).src = bun[t-1].src; 
  }
  break;

  case 'Pound':
  var t;
  for(t=1;t<chocolate.length+1;t++)
  {
  document.getElementById("n"+t).innerHTML= opound[t-1].name ;
  document.getElementById("i"+t).src = opound[t-1].src; 
  }
  break;

  case 'Butter':
  var t;
  for(t=1;t<chocolate.length+1;t++)
  {
  document.getElementById("n"+t).innerHTML= butter[t-1].name ;
  document.getElementById("i"+t).src = butter[t-1].src; 
  }
  break;

  case 'Red':
  var t;
  for(t=1;t<chocolate.length+1;t++)
  {
  document.getElementById("n"+t).innerHTML= red[t-1].name ;
  document.getElementById("i"+t).src = red[t-1].src; 
  }
  break;

  case 'Genoise':
  var t;
  for(t=1;t<chocolate.length+1;t++)
  {
  document.getElementById("n"+t).innerHTML= genoise[t-1].name ;
  document.getElementById("i"+t).src = genoise[t-1].src; 
  }
  break;

  case 'Chiffon':
  var t;
  for(t=1;t<chocolate.length+1;t++)
  {
  document.getElementById("n"+t).innerHTML= chiffon[t-1].name ;
  document.getElementById("i"+t).src = chiffon[t-1].src; 
  }
  break;

  case 'Flourless':
  var t;
  for(t=1;t<chocolate.length+1;t++)
  {
  document.getElementById("n"+t).innerHTML= flourless[t-1].name ;
  document.getElementById("i"+t).src = flourless[t-1].src; 
  }
  break;

  case 'Humming':
  var t;
  for(t=1;t<chocolate.length+1;t++)
  {
  document.getElementById("n"+t).innerHTML= humming[t-1].name ;
  document.getElementById("i"+t).src = humming[t-1].src; 
  }
  break;

  case 'Opera':
  var t;
  for(t=1;t<chocolate.length+1;t++)
  {
  document.getElementById("n"+t).innerHTML= opera[t-1].name ;
  document.getElementById("i"+t).src = opera[t-1].src; 
  }
  break;

  case 'Lady':
  var t;
  for(t=1;t<chocolate.length+1;t++)
  {
  document.getElementById("n"+t).innerHTML= lady[t-1].name ;
  document.getElementById("i"+t).src = lady[t-1].src; 
  }
  break;

  case 'Birthday':
  var t;
  for(t=1;t<chocolate.length+1;t++)
  {
  document.getElementById("n"+t).innerHTML= birthday[t-1].name ;
  document.getElementById("i"+t).src = birthday[t-1].src; 
  }
  break;

}
