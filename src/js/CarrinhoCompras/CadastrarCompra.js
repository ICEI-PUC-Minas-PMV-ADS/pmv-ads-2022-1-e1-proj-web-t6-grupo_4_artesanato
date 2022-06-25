import {CartRepository} from "../repositories/CartRepository.js"
import {ProductRepository} from '../repositories/ProductRepository.js'
import { getUser } from '../user.js'

let cart_rep = new CartRepository()
let product_rep = new ProductRepository()
//evento que busca informações no formulario e adiciona um objeto no carrinho
document.addEventListener('DOMContentLoaded', () => {

   let btncadastrar = document.getElementById('btnCadastrar')
   btncadastrar.addEventListener ('click',function (){
   
      let nome  = document.getElementById('nome').value
      let descricao = document.getElementById('descricao').value
      let estoque = document.getElementById ('estoque').value
      let produto_id = document.getElementById('product_id').value
      let user = getUser()
      cart_rep.create({

         nome: nome,
         descricao: descricao,
         estoque: estoque,
         preco: preco,
         ower_id: user.id,
         product_id: produto_id,
        
        
      });

        
      alert("Produto Foi inserido no carrinho de compras!!!!")
      window.location.reload()
      
      // Falta Implementação Função não está funcional.
   })
});