import {CartRepository} from "../repositories/CartRepository.js"
import { getUser } from '../user.js';

let cart_rep = new CartRepository();

//evento que busca informações no formulario e adiciona um objeto no carrinho
document.addEventListener('DOMContentLoaded', () => {

   let btncadastrar = document.getElementById('btnCadastrar')
   btncadastrar.addEventListener ('click',function (){
   
      let _nome  = document.getElementById('nome').value
      let descricao = document.getElementById('descricao').value
      let estoque = document.getElementById ('estoque').value
      let material = document.getElementById('material').value
      let categoria = document.getElementById('categoria').value
      let faixaEtaria = document.getElementById('faixaetaria').value
      let preco = document.getElementById('preco').value
      let img = document.getElementById('foto').value
      let user = getUser()
      product_rep.create({

         nome: _nome,
         descricao: descricao,
         estoque: estoque,
         material: material,
         categoria: categoria,
         faixaEtaria: faixaEtaria,
         img: img,
         ower_id: user.id,
         preco: preco,
        
      });
      
      alert("Produto cadastrado com sucesso")
      window.location.reload()
      
      // Falta Implementação Função não está funcional.
   })
});