$(document).ready(function(){
	$("#search").click(function(){
		//Gets search input
		var searchTerm=$("#searchTerm").val();
		//API url with searchTerm
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
		+ searchTerm +"&format=json&callback=?";

		$.ajax({
			type:"GET",
			url:url,
			async:false,
			dataType:"json",
			success:function(data){
				$("#output").html('');
				for(var i=0;i<data[1].length;i++){
				$("#output").prepend("<div><div class='result'><a href="+data[3][i]+
					" target='_blank'><h2>"+data[1][i]+ "</h2>" + "<p>" +data[2][i] +
					 "</p></a></div></div>");}
				$("#searchTerm").val('');
			},
			error: function(errorMessage){
				alert("Error");
			}
		});
	});
	$("#searchTerm").keypress(function(e){
		if(e.which==13){
			$("#search").click();
		}
	});


});