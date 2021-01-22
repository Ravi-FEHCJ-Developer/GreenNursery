  	// sidebar     
 { 
    const toggleBtn = document.querySelector(".cart-btn");
    const sidebar = document.querySelector(".cart");
    const closeBtn = document.querySelector(".close-cart");

    toggleBtn.addEventListener("click",function()
    {
     sidebar.classList.toggle("showCart");
    });

    closeBtn.addEventListener("click", function()
    {
       sidebar.classList.remove("showCart");
    });
  }
//end of side bar
     

//cart
    let carts = document.querySelectorAll(".cartbtn");

      let products = [
            {
      	      name: "apple",
      	      tag: "1",
      	      price: 10,
      	      inCart:0,
      	      img: "C:/Users/HP/Desktop/HTML/WEBSITE/js/project/Tree/1.jpg"
            },
            {
            	  name: "banana",
      	      tag: "2",
      	      price: 20,
      	      inCart:0,
      	      img: "C:/Users/HP/Desktop/HTML/WEBSITE/js/project/Tree/2.jpg"
            },
            {
      	      name: "cat",
      	      tag: "3",
      	      price: 30,
      	      inCart:0,
      	      img: "C:/Users/HP/Desktop/HTML/WEBSITE/js/project/Tree/3.jpg"
            },
            {
      	      name: "dog",
      	      tag: "4",
      	      price: 40,
      	      inCart:0,
      	      img: "C:/Users/HP/Desktop/HTML/WEBSITE/js/project/Tree/4.jpg"
            },
            {
            	  name: "elephant",
      	      tag: "5",
      	      price: 50,
      	      inCart:0,
      	      img: "C:/Users/HP/Desktop/HTML/WEBSITE/js/project/Tree/5.jpg"
            },
            {
      	      name: "lion",
      	      tag: "6",
      	      price: 60,
      	      inCart:0,
      	      img: "C:/Users/HP/Desktop/HTML/WEBSITE/js/project/Tree/6.jpg"
            },
            {
      	      name: "i",
      	      tag: "7",
      	      price: 70,
      	      inCart:0,
      	      img: "C:/Users/HP/Desktop/HTML/WEBSITE/js/project/Tree/2.jpg"
            },
            {
            	  name: "unny",
      	      tag: "8",
      	      price: 80,
      	      inCart:0,
      	      img: "C:/Users/HP/Desktop/HTML/WEBSITE/js/project/Tree/1.jpg"
            },
            {
      	      name: "ven",
      	      tag: "9",
      	      price: 90,
      	      inCart:0,
      	      img: "C:/Users/HP/Desktop/HTML/WEBSITE/js/project/Tree/3.jpg"
            },
      ]


  	for (let i = 0; i < carts.length; i++)
  	{
  		carts[i].addEventListener("click", ()=>
  		{
  			cartNumbers(products[i]);
  			totalCost(products[i]);
  		})
  	}


      function onLoadCartNumbers()
      {
          let productNumbers = localStorage.getItem("cartNumbers");

          if (productNumbers) 
          {
  			document.querySelector(".cart-items span").textContent = productNumbers;
  		}

      }

  	function cartNumbers (product) {

  		let productNumbers = localStorage.getItem("cartNumbers");
          console.log(productNumbers);
          productNumbers = parseInt(productNumbers);

  		if (productNumbers) {
  			localStorage.setItem("cartNumbers", productNumbers + 1);
  			document.querySelector(".cart-items span").textContent = productNumbers + 1;
  		}
  		else
  		{
              localStorage.setItem("cartNumbers", 1);
              document.querySelector(".cart-items span").textContent = 1;
  		}

  		setItem(product);
  	}

      
      function setItem(product)
      {
          let cartItems = localStorage.getItem("productsInCart");
          cartItems = JSON.parse(cartItems);
          console.log('My cart items are', cartItems);

          if (cartItems != null) 
          {
          	if (cartItems[product.tag] == undefined)
          	{
          		cartItems = {
          			...cartItems,
          			[product.tag]: product
          		}
          	}

              cartItems[product.tag].inCart += 1;        	
          }
          else {
          	product.inCart = 1;
          	cartItems = {
          		[product.tag] : product 
          	}
          }

          localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      }

      function totalCost(product)
      {
          let cartCost = localStorage.getItem("totalCost");

          if (cartCost != null)
          {
          	cartCost = parseInt(cartCost);
          	localStorage.setItem("totalCost", cartCost + product.price);
          }
          else {
          	localStorage.setItem("totalCost" ,product.price);
          }
      }

      function displayCart()
      {
      	let cartItems = localStorage.getItem('productsInCart');
      	cartItems = JSON.parse(cartItems);
      	let productContainer = document.querySelector(".cart-item");
      	if (cartItems && productContainer ) {
      		productContainer.innerHTML = "";
      		Object.values(cartItems).map(item =>{
      			productContainer.innerHTML +=
      			` <img src="${item.img}" alt="product">
               	    <div>
               		    <h4>${item.name}</h4>
                		    <h5>${item.price}</h5>
               		    <span class="remove-item">Remove</span>
              	    </div>
              	    <div>
                		    <i class="fa fa-chevron-up"></i>
                		    <p class="item-amount">1</p>
               		    <i class="fa fa-chevron-down"></i>
               	    </div> 
                   
                   `
      		});
      	}
      }
      
      const clearBtn = document.querySelector(".clear-cart");
      clearBtn.addEventListener("click", function()
      {
         localStorage.removeItem('productsInCart');
         localStorage.removeItem("totalCost");
         localStorage.removeItem("cartNumbers");
      });


      displayCart();
  	onLoadCartNumbers();
