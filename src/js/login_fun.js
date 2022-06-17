import {getUser} from "../js/user.js"
import {UserARepository} from './repositories/UserArepository.js';
const userA_rep = new UserARepository();

function logar () {
    let login = document.getElementById("nome").value
    let senha = document.getElementById('senha').value
    let usuario = userA_rep.getAll().find()
    
    alert(login)
    alert (usuario)

}