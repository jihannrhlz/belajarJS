// console.log("Hello World")
// alert("Notifikasi")
// prompt("Pinjam dulu seratus...")

// var Promnet = "Coding is Hard"
// console.log(Promnet)
// var Promnet = "Coding not Easy"
// console.log(Promnet)

// let Promnet = "Coding is Hard"
// console.log(Promnet)
// let kamu = "Coding not Easy"
// console.log(kamu)

// const Promnet = "Coding is Hard"
// console.log(Promnet)
// const Promnet = "Coding not Easy"
// console.log(Promnet)

// let totalPoin = prompt ("Masukkan poin anda")
//     if(totalPoin >100) {
//         document.write("<h1>Congratulation</h1>");
//     } 
//     else {
//         document.write("<h1>Thank You<h1>");
//     }

// let x = 6;
// let y = 3;

// if (x < 10 && y > 1) {
//     document.write("True")
// } else {
//     document.write("False")
// }

// if (x < 10 && y < 1) {
//     document.write("True")
// } else {
//     document.write("False")
// }

// if (x == 5 || y == 5) {
//     document.write("True")
// } else {
//     document.write("False")
// }

// if (x == 6 || y == 5) {
//     document.write("True")
// } else {
//     document.write("False")
// }

// if ( x == y) {
//     document.write("True")
// } else {
//     document.write("False")
// }

// let x=6;
// let y=3;

// console.log(x<10 && y>1)
// console.log(x<10 && y<1)
// console.log(x==5 || y==5)
// console.log(x==6 || y==5)
// console.log(!(x==y))


// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener ('click', function() {
//     let isi = input.value
//     console.log(isi)
//     p.innerText = isi
// })

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value == '') {
        alert("You must write something!!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();