const shoppingCart = [];

function addItemToCart(item){
    shoppingCart.push(item)
}

function removeItemFromCart(item){
    const index = shoppingCart.indexOf(item);
    if(index !== -1){
        shoppingCart.splice(index,1)
    }
}

function viewCart(){
    if(shoppingCart.length == 0 ){
        console.log('Your shopping cart is empty')
    }else{
        console.log('itens in your shopping cart: ')
        for(let i = 0; i < shoppingCart.length; i++){
                console.log(`${i + 1} - ${shoppingCart[i]}`)
            }
        }
}

function clearCart(){
    shoppingCart.length = 0;
    console.log('Your shopping cart has been cleared')
}

/*function que adiciona itens ao carrinho*/
addItemToCart('Tênis')
addItemToCart('Blusa')
addItemToCart('Shorts')

/*Console: 1-Tênis 2-Shorts (Chamando function que remove itens do carrinho)*/ 
removeItemFromCart('Blusa')

/*function que limpa todos os itens do carrinho*/
clearCart()


/*function que mostra os itens do carrinho*/
viewCart()