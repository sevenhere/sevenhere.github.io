$(document).ready(function(){
	getQuote();

  var getText;
  var getAuthor;
  var colors = ['#ccccff', '#ffd9cc', '#ffffcc',
   '#f2ffcc', '#ccffcc', '#ccffd9', '#ccfff2', 
   '#ccf2ff', "#ccd9ff", "#e6ccff", "#ffccf2", "#ffccd9"];

	function getQuote(){
		var url="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
		$.getJSON(url, function(data){
			getText=data.quoteText;
			getAuthor=data.quoteAuthor;
			//$(".quote").html('"'+data.quoteText+'"');
			$('.quote').fadeOut(800, function(){
			 $('.quote').html('"'+data.quoteText+'"').fadeIn(800); 
			});
			//$(".author").html("-"+data.quoteAuthor);
			$('.author').fadeOut(800, function(){
			 $('.author').html("-"+data.quoteAuthor).fadeIn(800); 
			});

		});
	};

	$("#tweet").on("click", function(){
      console.log(getText);
      console.log(getAuthor);
      window.open("https://twitter.com/intent/tweet?text=" +'"' + getText + '"' 
      	+" - "+ getAuthor);
  });


	$("#newQuote").on("click", function(){
		getQuote();
		var color = Math.floor(Math.random() * colors.length);
		$("body").css("background-color", colors[color]);
		});
});