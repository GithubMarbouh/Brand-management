let brands=[
    {"image": "https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
     "brand": "Apple",
     "email": "apple@apple.com",
     "category": "Technology",
     "price": 200.00,
     "status": "available",
     "checked": false
    },
    {
     "image": "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
     "brand": "Realme",
     "email": "Realme@Realme.com",
     "category": "Technology",
     "price": 300.00,
     "status": "no Stock",
     "checked": true


    
    },
    { 
     "image": "https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80",
     "brand": "Samsung",
     "email": "Samsung@Samsung.com",
     "category": "Technology",
     "price": 400.00,
     "status": "start sale",
     "checked": false

    }
]
function getBrandFromLoclStroage(){
    let retrieveBrand = JSON.parse(localStorage.getItem("brands"));
    brands=retrieveBrand ?? [];
}
getBrandFromLoclStroage();
function afficheBrand(){
 document.getElementById("read").innerHTML =``;
 let indice=0;
 let condition="read";

for (index of  brands){

content=`
<tr class="bg-gray-800">
<td class="p-3">
    <div class="flex align-items-center">
        <img class="rounded-full h-12 w-12  object-cover" src="${index.image}" alt="unsplash image">
        <div class="ml-3">
            <div class="">${index.brand}</div>
            <div class="text-gray-500">${index.email}</div>
        </div>
    </div>
</td>
<td class="p-3">
    ${index.category}
</td>
<td class="p-3 font-bold">
    ${index.price + '$'}
</td>
<td class="p-3">
    <span ${ condition  = index.status=='available' ?'class="bg-green-400 text-gray-50 rounded-md px-2">available':
    (index.status=='no Stock') ? 'class="bg-red-400 text-gray-50 rounded-md px-2">no stock' : 'class="bg-yellow-400 text-gray-50  rounded-md px-2">start sale'
    }</span>
</td>
<td class="p-3 ">
    ${index.checked ? `
    <a   onclick='checkedBrand(${indice});'href="#"class="text-gray-400 hover:text-gray-100 mr-2">
    <i class="material-icons-outlined text-base">check</i>
</a>
    ` : `
    <a onclick='checkedBrand(${indice})' href="#" class="text-gray-400 hover:text-gray-100 mr-2">
    <i class="material-icons-outlined text-base">close</i>
</a>
    `}
    
    <a onclick='updateBrand(${indice});' href="#" class="text-gray-400 hover:text-gray-100  mx-2">
        <i class="material-icons-outlined text-base">edit</i>
    </a>
    <a href="#"  onclick='deleteBrand(${indice});'class="text-gray-400 hover:text-gray-100  ml-2">
        <i class="material-icons-round text-base">delete_outline</i>
    </a>
</td>
</tr>
`
document.getElementById('read').innerHTML+=content;
indice++;
}
}
afficheBrand();

document.getElementById('add-btn').addEventListener('click', function() {
        // Utilisez la fonction prompt pour demander des informations à l'utilisateur
        let brand    = prompt("Entrez le brand :");
        let image    = prompt("Enter the image link:");
        let email    =    prompt("Enter the email:");
        let category = prompt("Enter the category:");
        let price    =   prompt("Enter the price:");
        let  status = prompt("Choose from the following options (available, no stock, start sale):");

        let newbrand={
            "image": image,
            "brand": brand,
            "email": email,
            "category": category,
            "price": price,
            "status": status,
            
        }
        brands.push(newbrand);
        setLocalStorage();
        afficheBrand();
        
    });

     function updateBrand(index){

        brands[index].image = prompt("Enter the brand",brands[index].image);
        brands[index].brand = prompt("Enter the image link:",brands[index].brand);
        brands[index].email = prompt("Enter the email:",brands[index].email);
        brands[index].category = prompt("Enter the category:",brands[index].category);
        brands[index].price = prompt("Enter the price:",brands[index].price);
        brands[index].status = prompt("Choose from the following options (available, no stock, start sale):",brands[index].status);
        setLocalStorage();
        afficheBrand();

     }

    function deleteBrand(index){
        let bran =brands[index];
        let confermed=confirm("Are you sure you want to delete?",bran.brand);
        if(confermed){
            brands.splice(index, 1);
            setLocalStorage();
            afficheBrand();
        }
       
    }
    function checkedBrand(index) {
        let brand = brands[index];
        brand.checked = !brand.checked;
        setLocalStorage();
        afficheBrand();
    }

    function setLocalStorage() {
        let brandString = JSON.stringify(brands);
        localStorage.setItem('brands', brandString);

    }

 
