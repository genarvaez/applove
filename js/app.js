(function principal(){
	var box = Array.from(document.getElementsByClassName("size"));
	var modal = document.getElementById("box-work-modal");
	box.forEach(function(e){
		e.addEventListener("click",function(){
			var bgModal = document.createElement("div");
			bgModal.classList.add("background-modal");
			bgModal.innerHTML = e.innerHTML;
			modal.appendChild(bgModal);	
			modal.classList.remove("hide");
			var close = document.createElement("img");
			close.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.setAttribute("id", "close");
			bgModal.appendChild(close);
			close.addEventListener("click", function(){
				modal.classList.add("hide");
			})
		})
	})
})()