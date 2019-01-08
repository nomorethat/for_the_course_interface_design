$(document).ready(function(){
	$("#topmenu #two a").bind("click", function(){
		document.location.href = 'administration.html';
	});
	
	$("#topmenu #one a").bind("click", function(){
		document.location.href = 'projects.html';
	});
	
	
	$(".page_administration_employeers").bind("click", function(){
		var torename = $('td:nth-child(1)', this).text();
		email = $('td:nth-child(2)', this).text();
		specialization = $('td:nth-child(3)', this).text();
		position = $('td:nth-child(4)', this).text();
		in_project = $('td:nth-child(5)', this).text();
		decides_tasks = $('td:nth-child(6)', this).text();
		login = $('td:nth-child(7)', this).text();
		password = $('td:nth-child(8)', this).text();
		role = $('td:nth-child(9)', this).text();
		//for(var i = 0; i < f.length; i++)
		
		
		document.location.href = 'view_employee.html';
		$("#header_edit_task").append("<h3>Пользователь " + name + "</h3>");
	});
	
	$("#table_with_project tr").bind("click", function(){	
		document.location.href = 'project.html';
	});
	
});
