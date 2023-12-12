function notirit() {
    document.querySelector("#text").style.display = "none";

    document.querySelector("#i1").value = "";
    document.querySelector("#i2").value = "";
    document.querySelector("#i3").value = "";
    document.querySelector("#i4").value = "";
    
}

function kaboom() {
    let i1 = document.querySelector("#i1").value;
    let i2 = document.querySelector("#i2").value;
    let i3 = document.querySelector("#i3").value;
    let i4 = document.querySelector("#i4").value;

    let story = `
    Reiz dzīvoja pilots ${i1} un viņš bija profesionāls terorists. Viņš lidoja ar lidmašīnu un otrais pilots bija ${i2}. Viņi lidoja pāri ${i3} un ielidināja lidmašīnu ${i4}. Beigas.
    `

    

    if(i1 == "" || i2 == "" || i3 == "" || i4 == ""){
        alert("Visiem laukiem jābūt aizpildītiem 😡")
    } else {
        document.querySelector("#text").style.display = "block";
        document.querySelector("#text").innerText = story;
    }
}
