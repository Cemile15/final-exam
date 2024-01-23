const pulse1= document.querySelector('.cart')
fetch('http://localhost:3000/pulse')
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
      pulse1.innerHTML +=`
      <div class="cart2">
                            <div class="name">
                                <h1>${element.name}</h1>
                                <p>${element.category}</p>
                            </div>
                            <div class="xett3"></div>
                            <div class="qiymet">
                                <h2>${element.price}</h2>
                            </div>
      `  
    });
})