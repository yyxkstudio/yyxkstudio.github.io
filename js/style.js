// JavaScript Document

function checkdevtools(){
	if(window.outerWidth - innerWidth > 160 || window.outerHeight - innerHeight > 160){
		//location.href = "about:blank";
	}
}

setInterval(checkdevtools,800)

document.addEventListener('contextmenu',function(e){
	location.href = "hid/stars.html";
	e.preventDefault()
})
document.addEventListener('copy',function(e){
	e.preventDefault()
})
document.addEventListener('cut',function(e){
	e.preventDefault()
})
document.addEventListener('selectstart',function(e){
	e.preventDefault()
})
document.addEventListener('dragstart',function(e){
	e.preventDefault();
})
document.addEventListener('keydown',function(e){
	if((e.ctrlKey || e.metaKey) && e.key === 's'){
		e.preventDefault();
	}
})