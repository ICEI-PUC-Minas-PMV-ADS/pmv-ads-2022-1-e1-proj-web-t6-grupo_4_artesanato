import { EventRepository } from './repositories/EventRepository.js';

let event_rep = new EventRepository();

document.addEventListener('DOMContentLoaded', () => {
   let btncadastrar = document.getElementById('btnCadastrar');
   btncadastrar.addEventListener ('click',function (){
   
     
   
      let date  = document.getElementById('dataEvento');
      let nomeEvento = document.getElementById('nomeEvento');
      let descricaoEvento = document.getElementById ('descricaoEvento');
      let dateInt = date.value
      let nEvento = nomeEvento.value
      let dEvento = descricaoEvento.value
   
      alert(`Os elementos ${dateInt} e ${nEvento} e ${dEvento} foram cadastrados com sucesso.`)
   
      event_rep.create({
         data: date.value,
         nome: nEvento,
         descricao: dEvento,
      });
   })
});

window.cadastrarEventos = function cadastrarEventos () {
   
   alert('funciona Cadastrar Eventos')
   let date  = document.getElementById('datepicker');
   let nomeEvento = document.getElementById('eventoNome');
   let decricaoEvento = document.getElementById ('descricaoEvento');
   

   if (date != '' && nomeEvento != '' ){
     alert('chegou aqui');
   } else 
        {window.alert ("Favor Preencher todos os Campos.");}

}


window.exibirEventos = function exibirEventos() {
   const eventos = event_rep.getAll();

   const createEventCard = (evento) => {
      const el = document.createElement('div');

      el.innerHTML = `
         <div class="card">
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

function deletarEventos () {

}







