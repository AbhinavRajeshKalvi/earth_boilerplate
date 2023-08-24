//body
var bodyvar = document.body






//four buttons
var consumption = document.getElementById("consumption");
console.log(consumption)

var climate = document.getElementById("climate")
console.log(climate)

var resources = document.getElementById("resources")
console.log(resources)

var people = document.getElementById("people")
console.log(people)

//save text
var saveText = document.getElementById("save")

//frame
var frame = document.getElementById("frame")

consumption.onclick=()=>{
    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

    //frame
    frame.src= "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //text
    saveText.innerHTML= "Do your bit! Shop only what you need,eat only what you need and always save the leftovers."

    //buttoncolor
    consumption.style.background= "rgb(53,197,85)"
    resources.style.background= "none"
    climate.style.background= "none"
    people.style.background= "none"
}

resources.onclick=()=>{
    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

    //frame
    frame.src= "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //text
    saveText.innerHTML= "Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"

    //buttoncolor
    resources.style.background= "rgb(234,144,85)"
    climate.style.background= "none"
    people.style.background= "none"
    consumption.style.background= "none"
}

people.onclick=()=>{
    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

    //frame
    frame.src= "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //text
    saveText.innerHTML= "Do your bit! Never waste  food.Rather offer it to people or animals who are in need"

    //buttoncolor
    people.style.background= "rgb(216,72,85)"
    climate.style.background= "none"
    consumption.style.background= "none"
    resources.style.background= "none"

}

climate.onclick=()=>{
    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

    //frame
    frame.src= "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //text
    saveText.innerHTML= "Do your bit! Save trees, use renewable energy sources and prefer to travel green"

    //buttoncolor
    climate.style.background= "rgb(53,125,215)"
    consumption.style.background= "none"
    resources.style.background= "none"
    people.style.background= "none"
}
