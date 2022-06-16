import { EventRepository } from '../repositories/EventRepository.js';

let event_rep = new EventRepository();

//evento que busca informações no formulario e cria um objeto da agenda.
document.addEventListener('DOMContentLoaded', () => {
   let btncadastrar = document.getElementById('btnCadastrar');
   
   btncadastrar.addEventListener ('click',function (){
   
      let date  = document.getElementById('dataEvento');
      let nomeEvento = document.getElementById('nomeEvento');
      let descricaoEvento = document.getElementById ('descricaoEvento');
      let dateInt = date.value
      let nEvento = nomeEvento.value
      let dEvento = descricaoEvento.value
      event_rep.create({
         data: dateInt,
         nome: nEvento,
         descricao: dEvento,

      });
      alert(" Evento Cadastrado com sucesso!!!!!! ")
      
      date.value = "";
      nomeEvento.value = "";
      descricaoEvento.value = "";

   })
});
