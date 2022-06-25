const CART_KEY = 'cart_info';

/***
 * hasCart
 */


export const hasCart = () => {
    const cart = JSON.parse(window.sessionStorage.getItem(CART_KEY));
    return cart !== undefined && cart !== null;    
};

/***
 * getCart
 */

export const getCart = () => {
    return JSON.parse(window.sessionStorage.getItem(CART_KEY));
};

/***
 * saveCart
 */

export const saveCart = (cartData) => {
    window.sessionStorage.setItem(CART_KEY, JSON.stringify(cartData));    
};

/*
user = { id: 1, nome: 'pedro', produto_id: 1 };

produtoRepository.get(user.produto_id);

produto = { id: 1, nome: 'Sabao' };

if (isUser())
{
    // Ta logado
}

login({ nome: "pedro", idade: 20 });
*/