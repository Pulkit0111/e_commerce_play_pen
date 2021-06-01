let data = JSON.parse(localStorage.getItem('cart'));
let parent = document.getElementById("data");
var sum = 0;
var count = 0;
for (let i = 0; i < data.length; i++) {
    let div = document.createElement('div');
    let p_name = document.createElement('p')
    p_name.innerHTML = `Name: ${data[i].name}`;
    let p_price = document.createElement('p');
    p_price.innerHTML = `Price: ${data[i].price}`;  
    let img = document.createElement('img');
    img.src = data[i].image;
    sum += Number(data[i].price);
    var cart_total = document.createElement("p");
    cart_total.innerHTML = `Cart Total: ₹${sum}`;
    div.append(p_name, p_price, img);
    parent.append(div);
    count++;
    var items = document.createElement('p');
    items.innerHTML = `Items in Cart: ${count}`;
}
var div2 = document.getElementById("items");
div2.append(cart_total);
div2.append(items);
function promo() {
    let code = document.getElementById("discount").value;
    let dis_div = document.getElementById("dis_div");
    if (code == "masai30") {
        sum = sum - (sum * 0.30);
        let dis_p = document.createElement('p');
        dis_p.innerHTML = `The discounted Price is ${sum}`;
        dis_p.setAttribute('class', 'dis_p');
        dis_div.append(dis_p);
    }
}