var img1 = "../assets/dead1.jpg";
var img2 = "../assets/dead2.jpg";

function trocar() {
    document.getElementById("imagem1").src = img1;
    let aux = img1;
    img1 = img2;
    img2 = aux
}