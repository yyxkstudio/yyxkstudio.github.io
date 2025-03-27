// JavaScript Document

function checkdevtools(){
	if(window.outerWidth - innerWidth > 160 || window.outerHeight - innerHeight > 160){
		location.href = "about:blank";
	}
}

setInterval(checkdevtools,800)

document.addEventListener('contextmenu',function(e){
	e.preventDefault()
	//alert('版权所有 © 2020 音悦星空工作室')
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