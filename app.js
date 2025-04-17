let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("#list");

btn.addEventListener("click", (event)=>{
    event.preventDefault();
    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li);
    inp.value="";

    let chb = document.createElement("input");
    chb.type = "checkbox";
    chb.classList.add("chbx");
    chb.innerText="Delete"

    li.appendChild(chb);
})

// let chb = document.querySelectorAll(".chbx");
// for(ch of chb){
//     ch.addEventListener("click" , function (){
//         let par = this.parentElement;
//         par.remove();
//     })
// }

let done = document.querySelector("#done");
ul.addEventListener("click" , function(event){
    console.dir(event.target);
    if(event.target.nodeName == "INPUT"){
        let item = event.target.parentElement;
        
        let li = document.createElement("li");
        li.innerText = item.innerText;
        done.appendChild(li);
        item.remove();
    }
})