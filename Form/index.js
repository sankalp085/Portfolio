var input1 = document.getElementById("input1")

var input2 = document.getElementById("input2")

var label1 = document.getElementById("label1")

var label2 = document.getElementById("label2")

var eye = document.getElementById("eye")


input1.addEventListener("input",function(){
    label1.style.transform = "translateY(-40px)"
    label1.style.fontWeight = "bold"
})

input2.addEventListener("input",function(){
    label2.style.transform = "translateY(-40px)"
    label2.style.fontWeight = "bold"
})

eye.addEventListener("click", function(){
    if(input2.type == "password" && eye.innerHTML == '<span class="material-symbols-outlined eye-look">visibility</span>')
    {
        input2.type = "text"
        eye.innerHTML='<span class="material-symbols-outlined eye-look">visibility_off</span>'
    }

    else{
        input2.type = "password"
        eye.innerHTML = '<span class="material-symbols-outlined eye-look">visibility</span>'
    }
})