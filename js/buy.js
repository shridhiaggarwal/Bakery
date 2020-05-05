var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
var bname='';
for (var i = 0; i < (queries.length-2); i++)
{
var bname= bname + ' ' +queries[i];
}
var bnumber = queries[i];
var bquantity = parseInt(queries[queries.length-i]);

switch(bname)
{
  case ' desert': bs = desert;
  break;

  case ' fruit': bs = fruit;
  break;

  case ' chocolate':bs = chocolate;
  break;

  case ' wed':bs = wed;
  break;

  case ' bun':bs = bun;
  break;

  case ' opound':bs = opound;
  break;

  case ' butter':bs = butter;
  break;

  case ' red':bs = red;
  break;

  case ' genoise':bs = genoise;
  break;

  case ' chiffon':bs = chiffon;
  break;

  case ' flourless':bs = flourless;
  break;

  case ' humming':bs = humming;
  break;

  case ' opera':bs = opera;
  break;

  case ' lady':bs = lady;
  break;

  case ' birthday':bs = birthday;
  break;

}

// for image 
document.getElementById("image").src = bs[bnumber-1].src;

// for name 
document.getElementById("name").innerHTML = bs[bnumber-1].name;

// for value
if(bname === ' desert' || bname===' bun')
{
  if(bquantity ==1){
    document.getElementById("value").innerHTML = "2 Pieces";
  }
  else if(bquantity ==2){
    document.getElementById("value").innerHTML = "4 Pieces";
  }
  else if(bquantity ==3){
    document.getElementById("value").innerHTML = "6 Pieces";
  }
  else if(bquantity ==4){
    document.getElementById("value").innerHTML = "12 Pieces";
  }         
}
else
{
  if(bquantity ==1){
    document.getElementById("value").innerHTML = "0.5 Kg";
  }
  else if(bquantity ==2){
    document.getElementById("value").innerHTML = "1 Kg";
  }
  else if(bquantity ==3){
    document.getElementById("value").innerHTML = "2 Kg";
  }
  else if(bquantity ==4){
    document.getElementById("value").innerHTML =  "4 Kg";
  }      
}

//for price
document.getElementById("price").innerHTML =bquantity*250;

// for selcting the quantity in starting 
document.getElementById("quant").selectedIndex ="0";

// starting total price
var x= document.getElementsByClassName("total");
for ( var i = 0; i < x.length; i++) {
    t=x[i].innerHTML =  bquantity*250;
  }

dc= document.getElementById("dc").innerHTML = 100; 

// starting grand total calculation
document.getElementById("gt").innerHTML =dc+t; 



// total calculation evertytimefor change in quant  
function total()
{
  bquant = document.getElementById("quant").value;
  var x= document.getElementsByClassName("total");
  for ( var i = 0; i < x.length; i++) {
      t= x[i].innerHTML =  bquantity*bquant*250;
    }
  document.getElementById("gt").innerHTML =dc+t;   
}


// success function 

function success(){
  var s = document.getElementById("success");
  s.innerHTML = "done!"; 
  s.style.color = "white";
  s.style.textAlign = "center";
  s.style.backgroundColor = "#43ba61";
  s.style.borderRadius = "5px";
  s.style.paddingTop = "20px"; 
  s.style.fontsize = "xx-large"; 
  s.style.fontFamily = 'Montserrat', sans-serif;
}
