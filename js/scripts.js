let itens=document.getElementsByClassName("item")

function paginar(id) 
{
	for(i=0;i<itens.length;i++)
	{
		//itens[i].classList.remove("active");
	}

	document.getElementById(id).style.display = "block";
}
 