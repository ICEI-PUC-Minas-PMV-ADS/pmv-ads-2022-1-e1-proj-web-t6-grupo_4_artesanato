import {ProductRepository} from "../repositories/ProductRepository.js"
import { getUser } from '../user.js';

let product_rep = new ProductRepository();

//evento que busca informações no formulario e cria um objeto Usuário Artesão.
document.addEventListener('DOMContentLoaded', () => {

   let btncadastrar = document.getElementById('btnCadastrar'); 
   btncadastrar.addEventListener ('click',function (){
   
      let nome  = document.getElementById('nome').value;
      let descricao = document.getElementById('descricao').value;
      let estoque = document.getElementById ('estoque').value;
      let material = document.getElementById('material').value;
      let categoria = document.getElementById('categoria').value;
      let faixaEtaria = document.getElementById('faixaetaria').value;
      let user = getUser()
      product_rep.create({

         nome: nome,
         descricao: descricao,
         estoque: estoque,
         material: material,
         categoria: categoria,
         faixaEtaria: faixaEtaria,
         img: "",
         ower_id: user.id,
        
      });
      
      alert("Produto cadastrado com sucesso")
      window.location.reload()
      
      // Falta Implementação Função não está funcional.
   })
});