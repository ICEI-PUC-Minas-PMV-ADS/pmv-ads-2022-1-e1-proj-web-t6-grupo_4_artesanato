import { EventRepository } from "../repositories/EventRepository.js"
import {getUser} from '../user.js'


let event_rep = new EventRepository()
let user = getUser()
window.exibirEventos = function exibirEventos() {
    //const eventos = event_rep.getAll()
  
   const eventos = event_rep.getAll().map((u) => {
      if(u.ower_id === user.id){
         return u
      }else return undefined
    })
    
 
    const createEventCard = (evento) => {
       const el = document.createElement('div');
 
       el.innerHTML = `
          <div class="card mb-1">
             <h5 class="card-header">${evento.nome}</h5>            
             <div class="card-body">
                <h5 class="card-title"> ${evento.data} </h5>
                <p class="card-text"> ${evento.descricao} </p>
                <button class="btn btn-primary">Deletar Evento</button>
             </div>
          </div>
       `;
 
       const botao_deletar = el.querySelector('.btn.btn-primary');     
       botao_deletar.addEventListener('click', (evt) => {
          if (confirm("Você deseja deletar este evento?"))
          {
             event_rep.delete(evento.id);
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
 
    const eventos_elementos = eventos.map((evento) => createEventCard(evento));
    const eventos_container = document.getElementById('eventos');
    eventos_container.replaceChildren(...eventos_elementos);
 }