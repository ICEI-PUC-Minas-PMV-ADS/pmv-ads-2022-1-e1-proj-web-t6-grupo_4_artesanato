import {UserARepository} from './repositories/UserArepository.js';
import { getUser, isUser } from './user.js';

const userA_rep = new UserARepository();

document.addEventListener ('DOMContentLoaded', () =>{
    let btn = document.getElementById('btns')
    btn.addEventListener('click',function () {
        let login = document.getElementById("nome").value
        let senha = document.getElementById('senha').value
        let usuario = userA_rep.getAll().find((u) => u.nome === login && u.senha === senha);
        
        if (usuario) {
           
            login(usuario);
            window.location.href = "http://127.0.0.1:5500/usuarioArtesao.html";
        } else {
            alert ('Usuário ou senha invalido!');
            
        }
     } );

     if (isUser()) {
        const user = getUser();
     }
})



