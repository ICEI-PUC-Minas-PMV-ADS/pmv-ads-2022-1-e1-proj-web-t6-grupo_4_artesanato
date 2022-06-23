import { EventRepository } from '../repositories/EventRepository.js';
import {getUser} from '../user.js';

let event_rep = new EventRepository();

//evento que busca informações no formulario e cria um objeto da agenda.
document.addEventListener('DOMContentLoaded', () => {
   let btncadastrar = document.getElementById('btnCadastrar');
   
   btncadastrar.addEventListener ('click',function (){
   
      let date  = document.getElementById('dataEvento').value
      let nomeEvento = document.getElementById('nomeEvento').value
      let descricaoEvento = document.getElementById ('descricaoEvento').value
      const user = getUser()

      event_rep.create({
         data: date,
         nome: nomeEvento,
         descricao: descricaoEvento,
         ower_id: user.id,

      });
      alert(" Evento Cadastrado com sucesso!!!!!! ")
      
      date.value = "";
      nomeEvento.value = "";
      descricaoEvento.value = "";

   })
});
