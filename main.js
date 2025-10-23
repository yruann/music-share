function initTracklistInteractions() {
	var coll_cl = document.getElementsByClassName("coll-closed");
	var i;

	var coll_op = document.getElementsByClassName("coll-opened");
	var j;

	// collapsible button (initial state: closed)
	for (i = 0; i < coll_cl.length; i++) {
	coll_cl[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content_closed = this.nextElementSibling;
		if (content_closed.style.display === "inline-block") {
		content_closed.style.display = "none";
		} else {
		content_closed.style.display = "inline-block";
		}
	});
	}


	// collapsible button (initial state: opened)
	for (j = 0; j < coll_op.length; j++) {
	coll_op[j].addEventListener("click", function() {
		this.classList.toggle("active");
		var content_opened = this.nextElementSibling;
		if (content_opened.style.display === "none") {
		content_opened.style.display = "inline-block";
		} else {
		content_opened.style.display = "none";
		}
	});
	}
}

function expandAllTracks() {
  const toggleButtons = document.querySelectorAll('.track-toggle.coll-closed, .track-toggle.coll-opened');
  toggleButtons.forEach(button => {
    button.classList.add("active");
    const content = button.nextElementSibling;
    if (content) {
      content.style.display = "inline-block";
    }
  });
}

function collapseAllTracks() {
  const toggleButtons = document.querySelectorAll('.track-toggle.coll-closed, .track-toggle.coll-opened');
  toggleButtons.forEach(button => {
    button.classList.remove("active");
    const content = button.nextElementSibling;
    if (content) {
      content.style.display = "none";
    }
  });
}