import { UserARepository } from "../repositories/UserArepository.js"

let userA_rep = new UserARepository();

window.exibirUserA = function exibirUserA() {
    const usuarios = userA_rep.getAll();
 
    const createEventCard = (usuario) => {
       const el = document.createElement('div');
 
       el.innerHTML = `
          <div class="card mb-1">
             <h5 class="card-header">${usuario.nome}</h5>            
             <div class="card-body">
                <h5 class="card-title"> ${usuario.email} </h5>
                <p class="card-text"> ${usuario.sobre} </p>
                <button class="btn btn-primary">Deletar Usuário </button>
             </div>
          </div>
       `;
 
       const botao_deletar = el.querySelector('.btn.btn-primary');     
       botao_deletar.addEventListener('click', (evt) => {
          if (confirm("Você deseja deletar este Usuário?"))
          {
             userA_rep.delete(usuario.id);
             window.location.reload();
          }
       });
 
       return el; 
    }
 
    /*
    map
    forEach
    filter
    sort
    reduce
    find
    */
 
    const eventos_elementos = usuarios.map((evento) => createEventCard(evento));
    const eventos_container = document.getElementById('eventos');
    eventos_container.replaceChildren(...eventos_elementos);
 }