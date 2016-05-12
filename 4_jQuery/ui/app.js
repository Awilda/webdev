$("#draggable").draggable();

$('#resizable').resizable();

$("#target").droppable({
	drop: function(ui, event) {
		$("#target").css("background-color", "red");
	}
})

$("#accordion").accordion();

$("ul").sortable();