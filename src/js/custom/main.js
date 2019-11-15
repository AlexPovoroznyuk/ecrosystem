$(".timeline").slick({
    slidesToShow: 3,
    arrows: false
})


function Paralax(parent, element,transition, animationSpeed, offset, adaptive){
	var adaptiveMod;
	if(!adaptive) {
		adaptiveMod = 992;
	}
	if(adaptive) {
		adaptiveMod = adaptive;
	}
	if(parent !== null && window.innerWidth > adaptiveMod){
		var sizeCalc = parseInt(getComputedStyle(document.body).fontSize) / 20;
		var elemOffset = parent.clientHeight / (animationSpeed * sizeCalc);
		if(window.pageYOffset + parent.clientHeight > parent.offsetTop){
			var scrollSize = window.pageYOffset;
			if(offset){
				
				element.setAttribute("style", "top:" + ((parent.offsetTop + parent.clientHeight - window.innerHeight) / (animationSpeed * sizeCalc)) + "px;");
			}
			TweenMax.to(element, transition, {y: -scrollSize / (animationSpeed * sizeCalc)});
		}
	}
	if(!(window.innerWidth > adaptiveMod)){
		element.setAttribute("style", "top:" + "" + "transform:" + "");
		element.css("transform", "");
	}
}

document.querySelectorAll('.parralax-element').forEach(function(element) {
    var ParalaxParent = element.closest('.parralax-parent');
    var ParalaxElement = element;
    var speedAnim = element.getAttribute('data-speed')
    document.addEventListener('scroll', function (e) {
        Paralax(ParalaxParent, ParalaxElement, 0.1, speedAnim, true,1);
    });
})

document.addEventListener('scroll', function (e) {
	var currentSection;
	if(document.querySelector(".scroll-block") !== null){
       
		document.querySelectorAll(".scroll-block").forEach(function(i){
			if(i.getBoundingClientRect().top < 120 && i.getBoundingClientRect().top > -(i.clientHeight) + 120){
				currentSection = i.getAttribute("id");
				if(!(document.querySelector(".side-menu-item a[href='#" + currentSection + "']").closest(".side-menu-item").classList.contains("active"))){
					document.querySelectorAll(".side-menu-item").forEach(function(nav){
						nav.classList.remove("active");
					});
					document.querySelector(".side-menu-item a[href='#" + currentSection + "']").closest(".side-menu-item").classList.add("active");
				}
			}
		});
	}
});