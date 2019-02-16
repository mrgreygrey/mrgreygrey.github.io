var productOne = {
    image:"./images/ProductsOne.jpeg"
}

var productTwo = {
    image:"./images/ProductsTwo.jpeg"
}

var productThree = {
    image:"./images/ProductsThree.jpeg"
}

var productFour = {
    image:"./images/ProductsFour.jpeg"
}

var productFive = {
    image:"./images/ProductsFive.jpeg"
}

var images = [];
var imageSelector = 1;

images.push(productOne);
images.push(productTwo);
images.push(productThree);
images.push(productFour);
images.push(productFive);

function changeImage(){
    var selectedImage = images[imageSelector];
    document.getElementById("homeImages").src=selectedImage.image;
    if(imageSelector >= 4){
        imageSelector = 0;
    } else {
        imageSelector++;
    }
}