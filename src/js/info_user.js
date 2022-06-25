
import {getUser} from '../user.js'

let user = getUser();

window.userInfo = function userInfo() {
    let info = document.getElementById('cabecalho')
        const el = document.createElement('div');
        el.innerHTML = `
          <div class="card mb-1">
             <h5 class="card-header">Bem Vindo </h5>            
             <p> ${ user.nome } </p>
          </div>
       `;
 
       return el; 
    
    
    info.innerHTML = el
    /*
    map
    forEach
    filter
    sort
    reduce
    find
    */
 }