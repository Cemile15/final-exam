let name = document.querySelector("#name")
let cat = document.querySelector("#cat")
let pri = document.querySelector("#pri")
let form = document.querySelector("form")
let table = document.querySelector("table")
let modal = document.querySelector('.modal')
let closeBtn = document.querySelector("#closeBtn")
let sumbit = document.querySelector("#sub")



fetch("http://localhost:3000/pulse")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            table.innerHTML += `
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.category}</td>
        <td>${element.price}</td>
        <td>
        <button onclick="deleteEl(${element.id})">Delete</button>
        </td>
    </tr>
        
        `
        });
    })

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (name.value && cat.value && pri.value) {
        let obj = {};

        obj = {
            name: name.value,
            category: cat.value,
            price:pri.value
        }

        console.log(obj);
        axios.post("http://localhost:3000/pulse", obj)
            .then(res => {
                
            })

    }
    else {
        modal.style.display = "flex"
    }
})


closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
})


///deleete

function deleteEl(id) {
    axios.delete("http://localhost:3000/pulse/" + id)
        .then(res => window.location.reload())
}