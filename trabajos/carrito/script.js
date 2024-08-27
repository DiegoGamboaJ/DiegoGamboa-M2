let lists = [
    {
      id: "0002",
      name: "Iphone 14 pro",
      price: 1500000,
    },
  ];
  
  function add() {
    let id = document.getElementById("itemID").value;
    let name = document.getElementById("itemName").value;
    let price = parseInt(document.getElementById("itemPrice").value);
  
    let item = {
      id: id,
      name: name,
      price: price,
    };
  
    lists.push(item);
    
  
    document.getElementById("itemID").value = "";
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
  
    alert("Producto agregado exitosamente.");
    
    let itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
    lists.forEach((list) => {
      itemList.innerHTML += `
      <tr>
         <td>${list.id}</td>
         <td>${list.name}</td>
         <td>$ ${list.price}</td>
      </tr>`;
    });
  }
  
   function totalPrice(){
    let sumaTotal = document.getElementById("sumaTotal");
    let total = 0;
      lists.forEach(list => {
        console.log(list.price);
        
        total = (total + list.price);
        sumaTotal.innerText = `$Total: ${total}`; 
      });
    console.log(total);
  }
  