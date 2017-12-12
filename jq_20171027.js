$(document).ready(function() {
	/**
	// add an element
	var txt = document.createElement("h1");
	txt.innerHTML = "cis255 - jQuery Intro - Build HTML from scratch";
	$("body div").append(txt);
	
	
	// add a class to an element
	$("body div h1").addClass("title");
	
	// add an ID to an element
	$("body div h1").attr("id", "title1");
	
	// add 10 paragraph elements in a "for" loop, giving each a unique ID
	/** for(var i=1; i<=5; i++){
		var txt = document.createElement("p");
		txt.innerHTML = "This is paragraph " + i + ".";
		txt.id = "p" + (i+"").padStart(3,"0");
		$("body div").append(txt);
	}
	*/
	// change paragraph text if clicked 
	$("p").click(function() {
		$(this).text("Hey, the text changed!");
		$("#myModal").modal();
		});
	/**
	// use "each" loop to console-log ids of each paragraph element
	var elems = document.getElementsByTagName("p");
	console.log(elems);
	$.each(elems, function(index, value) {
		console.log(elems[index].id);
	});
	
	// use "$(selector).each" loop to console-log hover message
	/** $("p").each(function() {
		$(this).hover(function() {
			console.log("hovered over " + this.id);
		});
	}); */
	
	// toggle() method switches between show() and hide()
	/**$(".trigger").click(function() {
        $(".overlay").toggle();
    });
	*/

}); // end $(document).ready