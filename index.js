let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
    ul.classList.toggle("showData");

    if (ul.className === "showData") {
        document.getElementById("bar").className = "fa-solid fa-xmark";
    } else {
        document.getElementById("bar").className = "fa-solid fa-bars";

    }
})


// navbar

let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", () => {
    shops.style.color = "rgb(4, 219, 219)";
    reviews.style.color = "white";
    blogs.style.color = "white";
    contacts.style.color = "white";


})


reviews.addEventListener("click", () => {
    reviews.style.color = "rgb(4, 219, 219)";
    shops.style.color = "white";
    blogs.style.color = "white";
    contacts.style.color = "white";
})


blogs.addEventListener("click", () => {
    blogs.style.color = "rgb(4, 219, 219)"
    reviews.style.color = "white";
    shops.style.color = "white";
    contacts.style.color = "white";
})


contacts.addEventListener("click", () => {
    contacts.style.color = "rgb(4, 219, 219)";
    reviews.style.color = "white";
    blogs.style.color = "white";
    shops.style.color = "white";
})



// connect

function connect() {
    let names = document.getElementById("names");
    let num = document.getElementById("number");
    if (name.value === "" && num.value === "") {
        alert("Fill Details")
    } else {
        alert("Thanks For Connecting")
    }

}

let itemPage = document.querySelector(".itemPage")
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let textHead=document.getElementById("headText")
let buyBtn = document.getElementById("buyBtn");
var inputText=document.getElementById("inputText")
var value=inputText.value
console.log(inputText.value)

//product Details
let productSection = document.getElementById('productSection');

function displayProduct(productObject){
    //console.log(productObject)
    let productCard = document.createElement('div');
    productCard.classList.add('product-card')
    productSection.appendChild(productCard);
      
    let productImg = document.createElement('img');
    productImg.setAttribute('src', `${productObject.image}`)

    productImg.addEventListener('mouseover', function() {
        if (productObject.second_image!=="empty"){
            productImg.setAttribute('src', `${productObject.second_image}`);
        }
    });
    
    
    productImg.classList.add('product-image');
    productCard.appendChild(productImg);
    

    let badgeTextEl = document.createElement('span');
    badgeTextEl.textContent = productObject.badge_text;
    badgeTextEl.classList.add('badge-text');
    if (productObject.badge_text !== null){
        productCard.appendChild(badgeTextEl)
    }
    
    let titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container')
    productCard.appendChild(titleContainer);

    let productTitle = document.createElement('h1');
    if (productObject.title.length > 12){
        productTitle.textContent = productObject.title.slice(0,12)+'...';
    }else{
        productTitle.textContent = productObject.title;
    }
    
    productTitle.classList.add('product-title');
    titleContainer.appendChild(productTitle);

    let vendorEl = document.createElement('li');
    vendorEl.textContent = productObject.vendor
    vendorEl.classList.add('vendor')
    titleContainer.appendChild(vendorEl)

    let priceContainer = document.createElement('div');
    priceContainer.classList.add('price-container');
    productCard.appendChild(priceContainer);

    let actualPrice = document.createElement('span');
    actualPrice.textContent = 'Rs '+ productObject.price + '.00'
    actualPrice.classList.add('actual-price')
    priceContainer.appendChild(actualPrice)

    let camparedPrice = document.createElement('span');
    camparedPrice.textContent = productObject.compare_at_price + '.00'
    camparedPrice.classList.add('compared-price')
    priceContainer.appendChild(camparedPrice)

    let discountEl = document.createElement('span');
    discountEl.textContent = '50% OFF'
    discountEl.classList.add('discount')
    priceContainer.appendChild(discountEl)

    let addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Buy'
    addToCartButton.classList.add('add-to-cart-button')
    addToCartButton.addEventListener("click", function() {
        itemPage.style.display = "flex";
        container.style.display = "none";

        let imgSrc = `${productObject.image}`;
        itemImg.src = imgSrc;
        itemImg.addEventListener('mouseover', function() {
            if (productObject.second_image!=="empty"){
                itemImg.setAttribute('src', `${productObject.second_image}`);
            }
        });
        textHead.textContent='Rs '+ parseInt(productObject.price) + '.00'
        inputText.addEventListener("click",function(event){
            var value1=parseInt(productObject.price)*parseInt(event.target.value)
            if (value1<0){
                textHead.textContent='Rs '+ 0 + '.00'
            }else{textHead.textContent='Rs '+ value1 + '.00'}
            
        })
        

        let buyText = document.querySelector(".buyText");
        buyBtn.addEventListener("click", function() {
            document.querySelector(".buyPage").style.display = "block";
            buyText.innerHTML = `
                <h3>Enter Details :</h3>
                <input type="text" placeholder="Enter Your Name" id="name"> <br>
                <input type="text" placeholder="Enter Your Address" id="address"> <br>
                <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
                <h3>Payment Option :</h3>
                <select>
                    <option value="Google-Pay">Google-Pay</option>
                    <option value="Phone-Pay">Phone-Pay</option>
                    <option value="Bharat-Pay">Bharat-Pay</option>
                    <option value="Cash-on-Delivery">Cash-on-Delivery</option>
    
                </select> <br>
    
                `
            let button = document.createElement("button");
            button.innerText = "Submit";
            buyText.appendChild(button);

            button.addEventListener("click", function() {
                let name = document.getElementById("name");

                if (name.value === "" && address.value === "" && num.value === "") {
                    alert("Please Enter Detail")
                } else {
                    alert("Your Response Recorded");
                    document.querySelector(".buyPage").style.display = "none";

                }
            })

            let cross = document.querySelector(".cross");
            cross.addEventListener("click", function() {
                document.querySelector(".buyPage").style.display = "none";

            })
        })


    })
    productCard.appendChild(addToCartButton)

}

function displayProducts(object){
    Products = object.category_products
    // console.log(womenProducts)
    for (let productObject of Products){
        displayProduct(productObject)
    }
}


let menProductsObject;
let womenProductsObject;
let kidsProductsObject;

fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    categories = data.categories
    
    menProductsObject = categories[0]
    displayProducts(menProductsObject)
    womenProductsObject = categories[1]
    kidsProductsObject = categories[2]
})

let menButton = document.getElementById('menTab');
let womenButton = document.getElementById('womenTab');
let kidsButton = document.getElementById('kidsTab');


menButton.addEventListener('click', function(){
    productSection.textContent = ''
    menButton.classList.add('selected-tab')
    womenButton.classList.remove('selected-tab')
    kidsButton.classList.remove('selected-tab')

    displayProducts(menProductsObject)
})

womenButton.addEventListener('click', function(){
    productSection.textContent = ''
    menButton.classList.remove('selected-tab')
    womenButton.classList.add('selected-tab')
    kidsButton.classList.remove('selected-tab')

    displayProducts(womenProductsObject)
})

kidsButton.addEventListener('click', function(){
    productSection.textContent = ''

    menButton.classList.remove('selected-tab')
    womenButton.classList.remove('selected-tab')
    kidsButton.classList.add('selected-tab')

    displayProducts(kidsProductsObject)
})

// card js







    