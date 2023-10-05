const ConsoleBox = document.querySelector(".console");
const textbox = document.getElementById("textbox");
function ADD(){
    if(ConsoleBox.style.visibility=="hidden"){
        ConsoleBox.style.visibility = "visible";
    }
}

function save(){
    if(textbox.value!=""){
        var text = textbox.value;
        var div = document.createElement("div");
        var paragraf = document.createElement("h4");
        div.className = "todo";
        document.querySelector(".list").appendChild(div);
        paragraf.innerHTML = text;
        paragraf.className = "prgrf";
        div.appendChild(paragraf);
        text="";
        textbox.value="";
        ConsoleBox.style.visibility = "hidden";
    }
    else{
        ConsoleBox.style.visibility = "hidden";
    }
}