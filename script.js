$(document).ready(function(){
   var scrollLink = $(".scroll");
    // Smooth scrolling
   scrollLink.click(function(a){
     a.preventDefault();
     $("body,html").animate({scrollTop:$(this.hash).offset().top},1000);
});
   });

//Nav Bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

//Validation
function validateForm(){
  var x = document.forms["cForm"]["name"].value;
  var y = document.forms["cForm"]["email"].value;
  var z = document.forms["cForm"]["comment"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    else if(y == "") {
        alert("E-mail must be filled out");
        return false;
    }
    else if(z == "") {
        alert("Comment must be filled out");
        return false;
    }
};

window.onscroll = function(){myScrollFunction()};
function myScrollFunction(){
  var y = document.getElementById("myProject");
  if(document.body.scrollTop > 1390 || document.documentElement.scrollTop > 1390){
    y.className += " " + "slideUp"; 
  }
};

