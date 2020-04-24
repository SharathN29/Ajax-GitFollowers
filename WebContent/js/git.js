$(document).ready(function() {
	
	$.ajax({
	
		url: "https://api.github.com/users"
		
	}).then(function(data) {
		
		console.log(data);
		var table = $("#usersTable");
		var contents = "";
		$.each(data, function(idx) {
			
			contents +=  "<tr>";
			contents += "<td>" + data[idx].id + "</td>";
			contents += "<td onclick='getFollowPhoto("+idx+");'>" + data[idx].login + "</td>";
			contents += "<td id='follow_url"+idx+"'>" + data[idx].followers_url + "</td>";
			contents += "<td id='photo_url"+idx+"'> </td>";
			contents += "</tr>";
		})
		
		table.append(contents);
		
	});
	
});

function getFollowPhoto(idx) {
	var fol_url = document.getElementById("follow_url"+idx).innerText;

	$.ajax({
		url: fol_url,
	}).then(function(data) {
		var i;
		var images = "";
		for(i=0; i<5; i++){
			images += "<img src='" + data[i].avatar_url + "' width=40 height=40 style='margin-left:5px;' />";
		}
		$("#photo_url"+idx).empty();
		$("#photo_url"+idx).append(images);
		
	})
}