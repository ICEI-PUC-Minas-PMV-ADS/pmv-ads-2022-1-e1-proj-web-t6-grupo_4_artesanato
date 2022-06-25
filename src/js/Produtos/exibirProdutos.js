import {ProductRepository} from "../repositories/ProductRepository.js"
import {getUser} from '../user.js'

let product_rep = new ProductRepository();
let user = getUser();

window.listarProdutos = function listarProdutos() {
    const Produtos = product_rep.getAll().filter((u) => {
     return u.ower_id === user.id
   });
    const createEventCard = (produto) => {
       const el = document.createElement('div');
 
       el.innerHTML = `
       <div class="card mb-3" style="max-width: 900px;">
       <div class="row g-0">
         <div class="col-md-4">
           <img src="${produto.img}" style="height: 300px; width: 300px;" class="imgsize img-fluid rounded-start"
             alt="...">
         </div>
         <div class="col-md-8">
           <div class="card-body">
             <!-- Editar informações dos cards nesta parte -->
             <h5 class="card-title">${produto.nome}</h5>
             <p class="card-text" style="text-align: justify;"> ${produto.descricao} </p>
             <p class="card-text"><small class="text-muted">Qualtidade no Estoque: ${produto.estoque}  </small></p>
             <p class="card-text preco"> R$ : ${produto.preco} </p>
             <button class="btn btn-primary">Deletar Produto</button>
             <!-- Editar Informações -->
           </div>
         </div>
       </div>
     </div>
       `;
 
       const botao_deletar = el.querySelector('.btn.btn-primary');     
       botao_deletar.addEventListener('click', (evt) => {
          if (confirm("Você deseja deletar este Produto?"))
          {
             product_rep.delete(produto.id)
             window.location.reload()
          }
       })
 
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