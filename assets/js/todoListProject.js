//Check off specific todos by clicking
$("ul").on("click", "li", function() { //use .on here because it applies to future and current elements, .click only applies to current elements - also, we do it on the ul so that it will apply to lis in the ul and specify li in the call on .on so that the change occurs only when you press on an li
	$(this).toggleClass("completed");
	// Longer Method
	// // if li is gray
	// if ($(this).css("color") === "rgb(128, 128, 128)") {
	// 	// turn it black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// }
	// // else
	// else {
	// 	// turn it gray
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through" // have to use camelCase here because JS
	// 	});
	// 	// alternate method
	// 	// $(this).css("color", "gray");
	// 	// $(this).css("text-decoration", "line-through");
	// }
});

//Click on X to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function(){ // parent returns the jQuery parent object so the li (parent of span) is removed
		$(this).remove(); // here, the this refers to the li - what the function is doing is removing the element once it fades out because fadeOut does not actually remove, rather it sets its display to none (meaning it is hidden on the page)
	}); 
	event.stopPropagation(); // stops event bubbling, i.e. when you click on span, the rest of the events in the li (strikethrough), ul, div, or body do not occur
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();
		// clear input box
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
})