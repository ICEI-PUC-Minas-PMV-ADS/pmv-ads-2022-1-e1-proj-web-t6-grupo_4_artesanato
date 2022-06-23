import {UserARepository} from './repositories/UserArepository.js';
import { getUser, isUser, login } from './user.js';

const userA_rep = new UserARepository();

document.addEventListener ('DOMContentLoaded', () =>{
    let btn = document.getElementById('btns')
    btn.addEventListener('click',function (evt) {
        evt.preventDefault()
        let logins = document.getElementById("nome").value
        let senha = document.getElementById('senha').value
        let usuario = userA_rep.getAll().find((u) => u.nome === logins && u.senha === senha);
        
        if (usuario) {
           
            login(usuario)
            window.location.href = "usuarioArtesao.html";

        } else {
            
            alert ('Usuário ou senha invalido!')
            window.location.reload()
            
        }
     } );
    
    
     if (isUser()) {
        const user = getUser();
     }
})



