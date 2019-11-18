$(document).ready(function(){
	var lang = $("#timer").attr("data-lang");
if (document.getElementById("timer")) {
	var getCountdown = function getCountdown() {

		var current_date = new Date().getTime();
		var seconds_left = (target_date - current_date) / 1000;

		days = pad(parseInt(seconds_left / 86400));
		seconds_left = seconds_left % 86400;

		hours = pad(parseInt(seconds_left / 3600));
		seconds_left = seconds_left % 3600;

		minutes = pad(parseInt(seconds_left / 60));
		seconds = pad(parseInt(seconds_left % 60));
		if (target_date > current_date && lang == "English") {
			countdown.innerHTML = `<span>&nbsp;${days}d&nbsp;</span><span>${hours}h&nbsp;</span><span>${minutes}m</span>`;
		}
		else if (target_date > current_date && lang == "Русский") {
			countdown.innerHTML = `<span>&nbsp;${days}д&nbsp;</span><span>${hours}ч&nbsp;</span><span>${minutes}м&nbsp;</span>`;
		}
		else if (target_date > current_date && lang == "한국인") {
			countdown.innerHTML = `<span>&nbsp;${days}일&nbsp;</span><span>${hours}시간&nbsp;</span><span>${minutes}분&nbsp;</span>`;
		}
		else {
			countdown.innerHTML = "<span>00:</span><span>00:</span><span>00</span>";
		}
	};

	var pad = function pad(n) {
		return (n < 10 ? '0' : '') + n;
	};

	var target_date = 1577836800000;
	var days, hours, minutes, seconds;

	var countdown = document.getElementById("timer");
	getCountdown();

	setInterval(function () {
		getCountdown();
	}, 1000);
}	
})



$(".timeline").slick({
    slidesToShow: 3,
	arrows: false,
	responsive: [
		{
		  breakpoint: 780,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			}
		  }
	  ]
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
		if(window.pageYOffset + parent.clientHeight + 1000> parent.getBoundingClientRect().top + window.pageYOffset){
			var scrollSize = window.pageYOffset;
			if(offset){
				
				element.setAttribute("style", "top:" + ((parent.getBoundingClientRect().top + window.pageYOffset + parent.clientHeight - window.innerHeight) / (animationSpeed * sizeCalc)) + "px;");
			}
			TweenMax.to(element, transition, {y: -(scrollSize - (parent.getBoundingClientRect().top + window.pageYOffset)) / (animationSpeed * sizeCalc)});
		}
	}
	if(!(window.innerWidth > adaptiveMod)){
		element.setAttribute("style", "top:" + "" + "transform:" + "");
		element.css("transform", "");
	}
}
if($(window).innerWidth() > 992){
document.querySelectorAll('.parralax-element').forEach(function(element) {
    var ParalaxParent = element.closest('.parralax-parent');
    var ParalaxElement = element;
    var speedAnim = element.getAttribute('data-speed')
    document.addEventListener('scroll', function (e) {
        Paralax(ParalaxParent, ParalaxElement, 0.1, speedAnim, false,1);
    });
})
}

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
$(".subscribe-trigger").click(function(){
	$("#subscribe-modal").addClass("active");
	$("body").addClass("modal-open");
})


$(".close-trigger").click(function(){
	$(".modal").removeClass("active");
	$("body").removeClass("modal-open");
})




$(".reqiered-field").keyup(function(e){
	if($(this).val() ==""){
		$(this).closest(".input-item").addClass("validation-error");
		$(this).closest(".input-item").find(".valid-error").html(EmptyError);
		sendForm=false;
	}
	else if($(this).attr("name") == "email"){
		if($(this).val() ==""){
			$(this).closest(".input-item").addClass("validation-error");
			$(this).closest(".input-item").find(".valid-error").html(EmptyError);
			sendForm=false;
		}
		else if(!(/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test($(this).val()))){
			$(this).closest(".input-item").addClass("validation-error");
			$(this).closest(".input-item").find(".valid-error").html(EmailError);
			sendForm=false;
		}
		else{
			$(this).closest(".input-item").removeClass("validation-error");
		}
	}
	else{
		$(this).closest(".input-item").removeClass("validation-error");
	}
});


$(".reqiered-field").focusout(function(e){
		if($(this).val() ==""){
		$(this).closest(".input-item").addClass("validation-error");
		$(this).closest(".input-item").find(".valid-error").html(EmptyError);
		sendForm=false;
	}
	else if($(this).attr("name") == "email"){
		if($(this).val() ==""){
			$(this).closest(".input-item").addClass("validation-error");
			$(this).closest(".input-item").find(".valid-error").html(EmptyError);
			sendForm=false;
		}
		else if(!(/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test($(this).val()))){
			$(this).closest(".input-item").addClass("validation-error");
			$(this).closest(".input-item").find(".valid-error").html(EmailError);
			sendForm=false;
		}
		else{
			$(this).closest(".input-item").removeClass("validation-error");
		}
	}
	else{
		$(this).closest(".input-item").removeClass("validation-error");
	}
});




var sendForm;
$("form").on("submit", function(e){
	e.preventDefault();
	var thisForm = $(this);
	sendForm=true;
	$(this).find(".reqiered-field").each(function(){
		if($(this).val() ==""){
			$(this).closest(".input-item").addClass("validation-error");
			$(this).closest(".input-item").find(".valid-error").html(EmptyError);
			sendForm=false;
		}
		else if($(this).attr("name") == "email"){
			if($(this).val() ==""){
				$(this).closest(".input-item").addClass("validation-error");
				$(this).closest(".input-item").find(".valid-error").html(EmptyError);
				sendForm=false;
			}
			else if(!(/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test($(this).val()))){
				$(this).closest(".input-item").addClass("validation-error");
				$(this).closest(".input-item").find(".valid-error").html(EmailError);
				sendForm=false;
			}
			else{
				$(this).closest(".input-item").removeClass("validation-error");
			}
		}
		else{
			$(this).closest(".input-item").removeClass("validation-error");
		}
	});
	if(sendForm){
		$("button[type ='submit']").attr('disabled', true);
		var that = $(this);
		var formData = new FormData(that.get(0));
		$.ajax({
			url: $(this).attr('action'),
			type:'POST',
			contentType: false,
			processData: false,
			data: formData,
			
			success : function( data ) {
				$("button[type ='submit']").attr('disabled', false);
					$(".modal").removeClass("active");
					$("#thk-modal").addClass("active");
					$("body").addClass("modal-open");	
				
				that.find(".form-input").each(function(){
						$(this).val("");
				});
			},
			error   : function( xhr, err , data ) {
				$("button[type ='submit']").attr('disabled', false);
				$(".modal").removeClass("active");
					$("#err-modal").addClass("active");
					$("body").addClass("modal-open");
			}
		});
	}
});