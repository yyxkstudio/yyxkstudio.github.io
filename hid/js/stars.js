// JavaScript Document

document.addEventListener('contextmenu',function(e){
	alert('版权所有 © 2020 音悦星空工作室')
	e.preventDefault()
	
	const audio = document.getElementById('audio');
	audio.play();
	audio.loop = true;
})