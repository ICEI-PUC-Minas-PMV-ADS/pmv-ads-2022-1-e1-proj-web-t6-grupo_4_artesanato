import {ProductRepository} from "../repositories/ProductRepository.js"
import {getUser} from '../user.js'

let product_rep = new ProductRepository();
let user = getUser();

window.listarProdutos = function listarProdutos() {
    const Produtos = product_rep.getAll().map((u) => {
      if (u.ower_id === user.id){
         return u;
      } else return undefined;
   });
    const createEventCard = (produto) => {
       const el = document.createElement('div');
 
       el.innerHTML = `
          <div class="card mb-1">
             <h5 class="card-header">${produto.nome}</h5>            
             <div class="card-body">
                <h5 class="card-title"> ${produto.descricao} </h5>
                <p class="card-text">Quantidade em estoque: ${produto.estoque} </p>
                <button class="btn btn-primary">Deletar Produto</button>
             </div>
          </div>
       `;
 
       const botao_deletar = el.querySelector('.btn.btn-primary');     
       botao_deletar.addEventListener('click', (evt) => {
          if (confirm("Você deseja deletar este Produto?"))
          {
             product_rep.delete(produto.id);
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
    
    const produtos_elementos = Produtos.map((produto) => createEventCard(produto));
    const produtos_container = document.getElementById('produto');
    produtos_container.replaceChildren(...produtos_elementos);
 }