import {ProductRepository} from "../repositories/ProductRepository.js"

let product_rep = new ProductRepository();

//evento que busca informações no formulario e cria um objeto Usuário Artesão.
document.addEventListener('DOMContentLoaded', () => {

   let btncadastrar = document.getElementById('btnCadastrar'); 
   btncadastrar.addEventListener ('click',function (){
   
      let _nome  = document.getElementById('nome');
      let _descricao = document.getElementById('descricao');
      let _estoque = document.getElementById ('estoque');
      let _material = document.getElementById('material');
      let _categoria = document.getElementById('categoria');
      let _faixaEtaria = document.getElementById('faixaetaria');

      let nome = _nome.value;
      let descricao = _descricao.value;
      let estoque = _estoque.value;
      let material = _material.value;
      let categoria = _categoria.value;
      let faixaEtaria = _faixaEtaria.value;
     

      product_rep.create({

         nome: nome,
         descricao: descricao,
         estoque: estoque,
         material: '',
         categoria: '',
         faixaEtaria: '',
         img: "",
        
      });
      alert("Produto cadastrado com sucesso")
      window.location.reload()
      
      // Falta Implementação Função não está funcional.
   })
});