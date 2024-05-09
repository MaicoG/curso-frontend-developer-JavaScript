document.addEventListener('DOMContentLoaded', function() {
    const menuEmail = document.querySelector('.navbar-email');
    const desktopMenu = document.querySelector('.desktop-menu');
    const menuHamIcoN = document.querySelector('.menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
    const productDetailCLoseIcon = document.querySelector('.product-detail-close');
    const shoppingCartContainer = document.querySelector('#shoppingCartContainer'); 
    const productDetailContainer = document.querySelector('#productDetail'); 
    const cardsConteiner = document.querySelector('.cards-container'); 

    menuEmail.addEventListener('click',toggleDesktopMenu);
    menuHamIcoN.addEventListener('click',toggleMobileMenu);
    menuCarritoIcon.addEventListener('click',toggleCarritoAside);
    productDetailCLoseIcon.addEventListener('click',closeProductAside);

    function toggleDesktopMenu() {
        mobileMenu.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
        shoppingCartContainer.classList.add('inactive');
        desktopMenu.classList.toggle('inactive');
    }

    function toggleMobileMenu() {
        desktopMenu.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
        shoppingCartContainer.classList.add('inactive');
        mobileMenu.classList.toggle('inactive');
    }

    function toggleCarritoAside() {
        desktopMenu.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
        mobileMenu.classList.add('inactive');
        shoppingCartContainer.classList.toggle('inactive');
    }
    function toggleProductDetail() {
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
        shoppingCartContainer.classList.toggle('inactive');
    }

    const productList=[];
    productList.push({
        name:'Bike',
        price:120,
        imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
    productList.push({
        name:'Moto',
        price:2000,
        imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
    productList.push({
        name:'Pantalla',
        price:200,
        imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });

    function openProductDetailAside(){
        productDetailContainer.classList.remove('inactive');
    }
    function closeProductAside(){
        shoppingCartContainer.classList.toggle('inactive');
        productDetailContainer.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    }  

    function getAllProductos(arr) {
        for(product of arr) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.imagen);
            productImg.addEventListener('click', openProductDetailAside);

            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');

            const productInfoDiv = document.createElement('div');

            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + product.price;
            const productName = document.createElement('p');
            productName.innerText = product.name;

            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);

            const productInfoFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

            productInfoFigure.appendChild(productImgCart);
            productInfo.appendChild(productInfoFigure);
            productInfo.appendChild(productInfoDiv);

            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);

            cardsConteiner.appendChild(productCard);
        }
    }

    getAllProductos(productList);
});