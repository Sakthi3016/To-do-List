let inputfield=document.getElementById('inputField');
let addbutton=document.getElementById('addtodo');
let todocontainer=document.getElementById('todocontainer');

addbutton.addEventListener('click',function(){
	var para=document.createElement('li');
	para.innerText=inputfield.value;
	todocontainer.appendChild(para);
	inputfield.value="";

	todocontainer.style.color="green";
	todocontainer.style.fontWeight="bold";

	para.addEventListener('click',function(){
		para.style.textDecoration="line-through";
		para.style.color="red";
	})
})
