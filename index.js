var typed = new Typed("#element", {
    strings: ["Java Developer", "JavaScript Developer","Backend Developer","Frontend Developer"],
    typeSpeed: 50
  });

// function fun1(){
//     var a = ["Java Full Stack Developer", "JavaScript Developer","Node JS Developer","Photoshop Developer","Boot Developer","Spring Boot Developer"]

//     for (i in a)
//     {
//         if(a[i] == a.length-1)
//         {
//             a[i] = a[0]
//         }

//         else{
//             i++
//         }
//     }

// }



  function hide(){
    var cover = document.querySelector(".nav-items")

    cover.classList.toggle("hide")
  }

  function hide_textarea(){
    var hide = document.querySelector(".text-area1")

    hide.classList.toggle("hide")
  }









// var pic = ["./images/pic1.jpg","./images/pic2.png","./images/pic3.jpg","./images/pic4.jpg","./images/pic5.jpeg"]

// var img = document.getElementById("img")

//   function slide(){

//     setInterval(()=>{
//         img.src = pic[i]
//         i++
//     },2000)

//     // return setInterval()
//   }