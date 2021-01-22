const products = [
{
   name: "apple",
   rate: "8.5/10",
   company: "abc",
   img: "C:/Users/HP/Desktop/HTML/WEBSITE/js/project/Tree/1.jpg"
},
{
   name: "banana",
   rate: "6.5/10",
   company: "def",
   img: "C:/Users/HP/Desktop/HTML/WEBSITE/js/project/Tree/2.jpg"
},
{
   name: "cat",
   rate: "5.5/10",
   company: "ghi",
   img: "C:/Users/HP/Desktop/HTML/WEBSITE/js/project/Tree/3.jpg"
}

];

function productsinfo(prod)
{
   return ` <div class="firstrow" style="display: flex;">
	            <div style="width: 100%; height: 100%; padding: 20px;">
	               <img src="${prod.img}" style="width: 60%; height: 60%;">
	               <h2>${prod.name}</h2>
	               <div>
		               <p>${prod.rate}</p>
		               <p>fav</p>
	               </div>
	               <p>Company: ${prod.company}</p>
	               <div>
		               <button style="float: center; width: 25%;" class="cartbtn">CART</button>
		               <button style="float: center; width: 25%;" class="cartbtn">VIEW</button>
	               </div>
	            </div>
             </div>`
}

document.getElementById("Products").innerHTML = ` ${products.map(productsinfo).join('')} `;