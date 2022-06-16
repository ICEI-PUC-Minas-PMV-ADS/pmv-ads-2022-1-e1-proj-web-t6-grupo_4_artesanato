import { UserARepository } from '../repositories/UserArepository.js'; 

let userA_rep = new UserARepository();

//evento que busca informações no formulario e cria um objeto Usuário Artesão.
document.addEventListener('DOMContentLoaded', () => {

   let btncadastrar = document.getElementById('btnCadastrar'); 
   btncadastrar.addEventListener ('click',function (){
   
      let _nome  = document.getElementById('inputCraftsmanName');
      let _email = document.getElementById('inputCraftsmanEmail');
      let _sobre = document.getElementById ('inputAbout');
      let _senha = document.getElementById('inputCraftsmanPass');
      let _endereco = document.getElementById('inputAddress');
      let _whats = document.getElementById('inputWhatsApp');
      let _img = document.getElementById('inputImgPerf')

      let nome = _nome.value;
      let email = _email.value;
      let sobre = _sobre.value;
      let senha = _senha.value;
      let endereco = _endereco.value;
      let whats = _whats.value;
      let img = _img.value;

      userA_rep.create({

         nome: nome,
         email: email,
         sobre: sobre,
         senha: senha,
         endereco: endereco,
         whats: whats,
         img: img,
         logado: false,

      });
      alert(" Usuario  Cadastrado com sucesso!!!!!! ")
      window.location.reload();
   })
});