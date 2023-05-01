function paginar(id) 
{
	const itens=document.getElementById("principal")

	for(const filhos of itens.children)
	{
		if (filhos.id == id)
		{
			filhos.style.display = "contents";
			filhos.classList.add("active");
		}else
		{
			filhos.style.display = "none";
			filhos.classList.remove("active");
		}
	}
}
 