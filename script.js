function addProducts() {
    let form = document.getElementById("pro_form");
    let name = form.name.value;
    let price = form.price.value;
    let image = form.image.value;
    let product = {
        name,
        price,
        image
    }
    // console.log(product);
    let arr;
    arr = localStorage.getItem('products');
    // console.log(arr);//This will return null which means i am using the application for the first time.
    if (arr == null) {
        arr = []; // if the app is going to be used for the first time initia;ize an array in local storage to store the forthcoming data
    } else {
        /*In order to add the further more data in the array i need to push that data into the array
        but the array is in JSON format in the local storage in order to push the data into it
        i need to first convert it into array format by using JSON.parse a*/
        arr = JSON.parse(localStorage.getItem('products'));
    }
    arr.push(product);//Pushing the data into the array
    localStorage.setItem('products', JSON.stringify(arr));//adding the arry to local storage by first converting it in JSON format using JSON.strigyfy
}
function showProducts() {
    //get the data from the local storage and convert it into a workable form using JSON.parse
    let data = JSON.parse(localStorage.getItem('products'));
    // console.log(data);
    let parent = document.getElementById("data");
    parent.innerHTML = null;
    for (let i = 0; i <data.length; i++) {
        let div = document.createElement('div');
        let p_name = document.createElement('p')
        p_name.innerHTML = `Name: ${data[i].name}`;
        let p_price = document.createElement('p');
        p_price.innerHTML = `Price: ${data[i].price}`;
        let img = document.createElement('img');
        img.src = data[i].image;
        let btn = document.createElement('button');
        btn.textContent = "Add to Cart";
        btn.style.display = "block";
        btn.onclick = function () {
            addFav(data[i]);
        }
        div.append(p_name, p_price, img,btn);
        parent.append(div);
    }
}
function addFav(n) {
    let cartarr;
    let arr;
    cartarr=localStorage.getItem('cart');
    if (cartarr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('cart'));
    }
    arr.push(n);
    localStorage.setItem('cart', JSON.stringify(arr));
}