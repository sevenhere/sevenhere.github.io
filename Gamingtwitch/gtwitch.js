$(function(){
    $(".slideShow img:gt(0)").hide();
    setInterval(function(){
      $(".slideShow :first-child").fadeOut()
         .next("img").fadeIn()
         .end().appendTo(".slideShow");}, 
      3000);
});
$(document).ready(function(){
    $.ajax({
    	type: "GET",
    	url:"https://api.twitch.tv/kraken/users/shroud/follows/channels/",
    	headers:{
    		'Client-ID': 'atr59jk7lhqqg2cdc3lq8wsntkdj5q'
    	},
    	success: function(data){
    		for(var i=0 ;i<4; i++){
    			console.log(data.follows[0]);
    			var stream;
    			var displayName = data.follows[i].channel.display_name;
    			var logo = data.follows[i].channel.logo;
    			var status = data.follows[i].channel.status;
                if(data.stream===null){
					stream = "Online";
				}
				else
				{
					stream = "Offline";
				}
				if(logo==null){
					logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
				}
				$("#streamInfo").prepend("<div class ='row select'>" + "<div class='col-md-3'>" +
              "<a href='https://www.twitch.tv/"+ displayName+"' target='_blank'><img class='streamLogo' src='" + logo + "'></a>"
              +
              "</div>" + "<div class='col-md-3'>" + displayName + "</div>" + "<div class='col-md-3'>" + status + "</div>"+
              "<div class='col-md-3'>"+ stream +"</div></div>");
    }    
    }    
});
    $.ajax({
    	type: "GET",
    	url:"https://api.twitch.tv/kraken/channels/just9n",
    	headers:{
    		'Client-ID': 'atr59jk7lhqqg2cdc3lq8wsntkdj5q'
    	},
    	success: function(data){
    		    var stream;
    			var displayName = data.display_name;
    			var logo = data.logo;
    			var status = data.status;
    			 if(data.stream===null){
					stream = "Online";
				}
				else
				{
					stream = "Offline";
				}
				if(logo==null){
					logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
				}
				$("#streamInfo").prepend("<div class ='row select'>" + "<div class='col-md-3'>" +
              "<a href='https://www.twitch.tv/"+ displayName+"' target='_blank'><img class='streamLogo' src='" + logo + "'></a>"
              +
              "</div>" + "<div class='col-md-3'>" + displayName + "</div>" + "<div class='col-md-3'>" + status + "</div>"+
              "<div class='col-md-3'>"+ stream +"</div></div>");
    	}
    });
    $.ajax({
    	type: "GET",
    	url:"https://api.twitch.tv/kraken/channels/shroud",
    	headers:{
    		'Client-ID': 'atr59jk7lhqqg2cdc3lq8wsntkdj5q'
    	},
    	success: function(data2){
    		    var stream;
    			var displayName = data2.display_name;
    			var logo = data2.logo;
    			var status = data2.status;
    			 if(data2.stream===null){
					stream = "Online";
				}
				else
				{
					stream = "Offline";
				}
				if(logo==null){
					logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
				}
				$("#streamInfo").prepend("<div class ='row select'>" + "<div class='col-md-3'>" +
              "<a href='https://www.twitch.tv/"+ displayName+"' target='_blank'><img class='streamLogo' src='" + logo + "'></a>"
              +"</div>" + "<div class='col-md-3'>" + displayName + "</div>" + "<div class='col-md-3'>" + status + "</div>"+
              "<div class='col-md-3'>"+ stream +"</div></div>");
    	}
    });
   
    $.ajax({
    	type: "GET",
    	url:"https://api.twitch.tv/kraken/channels/chad",
    	headers:{
    		'Client-ID': 'atr59jk7lhqqg2cdc3lq8wsntkdj5q'
    	},
    	success: function(data3){
    		    var stream;
    			var displayName = data3.display_name;
    			var logo = data3.logo;
    			var status = data3.status;
    			 if(data3.stream===null){
					stream = "Online";
			    }
				else
				{
					stream = "Offline";
				}
				if(logo==null){
					logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
				}
				$("#streamInfo").prepend("<div class ='row select'>" + "<div class='col-md-3'>" +
              "<a href='https://www.twitch.tv/"+ displayName+"' target='_blank'><img class='streamLogo' src='" + logo + "'></a>"
              +
              "</div>" + "<div class='col-md-3'>" + displayName + "</div>" + "<div class='col-md-3'>" + status + "</div>"+
              "<div id='lol' class='col-md-3'>"+ stream +"</div></div>");
    	}
    });
 });

window.onscroll = function(){myScrollFunction()};
function myScrollFunction(){
  var y = document.getElementById("header");
  var x = document.getElementById("header2");
  if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
  	y.style.display ='none';
    x.style.display ='block'; 
  }
  else{
  	x.style.display ='none';
    y.style.display ='block'; 
  }
};
