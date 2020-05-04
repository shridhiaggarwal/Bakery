
var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");
    var s= '';
    for (var i = 0; i < (queries.length-1); i++)
    {
      var s= s + ' ' +queries[i];
    }
    var p=queries[0];
    var number = queries[queries.length-1];


  if( s === ' desert')
     {
        document.getElementById('name').innerHTML= desert[number-1].name;
        document.getElementById('image').src = desert[number-1].src;
        document.getElementById('detail').innerHTML = desert[number-1].detail;
        document.getElementById('b1').innerHTML = "2 Pieces";
        document.getElementById('b2').innerHTML = "4 Pieces";
        document.getElementById('b3').innerHTML = "6 Pieces";
        document.getElementById('b4').innerHTML = "12 Pieces";
     } // end of desert

  else if( s === ' fruit')
     {
        document.getElementById('name').innerHTML= fruit[number-1].name;
        document.getElementById('image').src = fruit[number-1].src;
        document.getElementById('detail').innerHTML = fruit[number-1].detail;
     }
     // end of fruit

  else if( s === ' chocolate')
     {
        document.getElementById('name').innerHTML= chocolate[number-1].name;
        document.getElementById('image').src = chocolate[number-1].src;
        document.getElementById('detail').innerHTML = chocolate[number-1].detail;
     }
     //end of chocolate

  else if( s === ' wed')
     {
       document.getElementById('name').innerHTML= wed[number-1].name;
       document.getElementById('image').src = wed[number-1].src;
       document.getElementById('detail').innerHTML = wed[number-1].detail;
     } 
     //end of wed

  else if( s === ' bun')
     {
      document.getElementById('name').innerHTML= bun[number-1].name;
      document.getElementById('image').src = bun[number-1].src; 
      document.getElementById('detail').innerHTML = bun[number-1].detail;
      document.getElementById('b1').innerHTML = "2 Pieces";
      document.getElementById('b2').innerHTML = "4 Pieces";
      document.getElementById('b3').innerHTML = "6 Pieces";
      document.getElementById('b4').innerHTML = "12 Pieces";
     }
     //end of bun

  else if( s === ' opound')
     {
      document.getElementById('name').innerHTML= opound[number-1].name;
      document.getElementById('image').src = opound[number-1].src; 
      document.getElementById('detail').innerHTML = opound[number-1].detail;      
     }
     //end of pound

     if( s === ' butter')
     {
      document.getElementById('name').innerHTML= butter[number-1].name;
      document.getElementById('image').src = butter[number-1].src;  
      document.getElementById('detail').innerHTML = butter[number-1].detail;  
     }
     // end of butter

     if( s === ' red')
     {
      document.getElementById('name').innerHTML= red[number-1].name;
      document.getElementById('image').src = red[number-1].src;   
      document.getElementById('detail').innerHTML = red[number-1].detail;
     }
     // end of red 

     if( s === ' genoise')
     {
      document.getElementById('name').innerHTML= genoise[number-1].name;
      document.getElementById('image').src = genoise[number-1].src;  
      document.getElementById('detail').src = genoise[number-1].detail; 
     }
     // end of genoise

     if( s === ' chiffon')
     {
      document.getElementById('name').innerHTML= chiffon[number-1].name;
      document.getElementById('image').src = chiffon[number-1].src;   
      document.getElementById('detail').innerHTML = chiffon[number-1].detail;
     }
     // chiffon

     if( name === ' flourless')
     {
      document.getElementById('name').innerHTML= flourless[number-1].name;
      document.getElementById('image').src = flourless[number-1].src; 
      document.getElementById('detail').innerHTML = flourless[number-1].detail;   
     }
     //flourless

     if( name === ' humming')
     {
      document.getElementById('name').innerHTML= humming[number-1].name;
      document.getElementById('image').src = humming[number-1].src; 
      document.getElementById('detail').innerHTML = humming[number-1].detail;  
     }
     //humming

     if( name === ' opera')
     {
      document.getElementById('name').innerHTML= opera[number-1].name;
      document.getElementById('image').src = opera[number-1].src;   
      document.getElementById('detail').innerHTML = opera[number-1].detail;
     }
     //opera

     if( name === ' lady')
     {
      document.getElementById('name').innerHTML= lady[number-1].name;
      document.getElementById('image').src = lady[number-1].src;  
      document.getElementById('detail').innerHTML = lady[number-1].detail;
     }
     //lady

     if( name === ' birthday')
     {
      document.getElementById('name').innerHTML= birthday[number-1].name;
      document.getElementById('image').src = birthday[number-1].src;   
      document.getElementById('detail').innerHTML = birthday[number-1].detail;
     }
     //birthday

