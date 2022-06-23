import { UserARepository } from '../repositories/UserArepository.js'; 

let userA_rep = new UserARepository();

//evento que busca informações no formulario e cria um objeto Usuário Artesão.
document.addEventListener('DOMContentLoaded', () => {

   let btncadastrar = document.getElementById('btnCadastrar'); 
   btncadastrar.addEventListener ('click',function (){
   
      let nome  = document.getElementById('inputCraftsmanName').value
      let email = document.getElementById('inputCraftsmanEmail').value
      let sobre = document.getElementById ('inputAbout').value
      let senha = document.getElementById('inputCraftsmanPass').value
      let endereco = document.getElementById('inputAddress').value
      let whats = document.getElementById('inputWhatsApp').value
      let img = document.getElementById('inputImgPerf').value


      userA_rep.create({

         nome: nome,
         email: email,
         sobre: sobre,
         senha: senha,
         endereco: endereco,
         whats: whats,
         img: img,
        

      });
      alert(" Usuario  Cadastrado com sucesso!!!!!! ")
      window.location.replace("login_tela.html")
      
      
   })
});