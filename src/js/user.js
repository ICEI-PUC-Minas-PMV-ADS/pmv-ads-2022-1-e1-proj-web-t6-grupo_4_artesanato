const USER_KEY = 'user_info';

/***
 * isUser
 */

export const isUser = () => {

    const userInfo = JSON.parse(window.sessionStorage.getItem(USER_KEY));
    return userInfo !== undefined && userInfo !== null;
    
};

/***
 * getUser
 */

export const getUser = () => {
    return JSON.parse(window.sessionStorage.getItem(USER_KEY));
};

/***
 * login
 */

export const login = (userData) => {

    window.sessionStorage.setItem(USER_KEY, JSON.stringify(userData));
    
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