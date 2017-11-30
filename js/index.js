$(document).ready(function(){
  var randomNum;
  var randomQuote;
  var randomAuthor;
  var qT="";
  var qA="";
  getQuote();
  function getQuote(){
   /*var quote= ["bcb","fnkskenfk","shefbhse"];
    var author = ["aut","and","dabw"];
    randomNum= Math.floor(Math.random()*quote.length);
    randomQuote= quote[randomNum];
    randomAuthor= author[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
    */
    var url= "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
    $.getJSON(url, function(data){
      qT= data.quoteText;
      qA= data.quoteAuthor;
       $(".quote").html(qT);
      $(".author").html(qA);
    });
  };
  
  $("#tweet").on("click",function(){
   window.open("https://twitter.com/intent/tweet?text="+qT+"  - "+qA);
  }); 
  
  $("#getQuote").on("click",function(){
     getQuote();
  }); 
  
  
});