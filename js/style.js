// JavaScript Document

function checkdevtools(){
	if(window.outerWidth - innerWidth > 160 || window.outerHeight - innerHeight > 160){
		//location.href = "about:blank";
	}
}

setInterval(checkdevtools,800)

document.addEventListener('contextmenu',function(e){
	alert('版权所有 © 2020 音悦星空工作室')
	e.preventDefault()
	
	const audio = document.getElementById('audio');
	audio.play();
	audio.loop = true;
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