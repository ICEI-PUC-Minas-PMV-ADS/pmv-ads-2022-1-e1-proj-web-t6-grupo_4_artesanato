import {ProductRepository} from "../repositories/ProductRepository.js"
import {CartRepository} from "../repositories/CartRepository.js"
import {getUser, isUser} from '../user.js'
import { getCart, saveCart } from "../cart.js"

let cart_rep = new CartRepository()
let product_rep = new ProductRepository()

window.listarProdutos = function listarProdutos() {
    const Produtos = product_rep.getAll();
 
    const createEventCard = (produto) => {
       const el = document.createElement('div');
 
       el.innerHTML = `
       <div class="card mb-3" style="max-width: 900px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${produto.img}" style="height: 300px; width: 300px;" class="imgsize img-fluid rounded-start"
                alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <!-- Editar informações dos cards nesta parte -->
                <h5 class="card-title" id="nome">${produto.nome}</h5>
                <p class="card-text" style="text-align: justify;" id="descricao"> ${produto.descricao} </p>
                <p class="card-text"><small class="text-muted">Qualtidade no Estoque: ${produto.estoque}  </small></p>
                <p class="card-text preco"> R$ : ${produto.preco} </p>                
                <button class="btn btn-primary"> Comprar </button>                
                <!-- Editar Informações -->
              </div>
            </div>
          </div>
        </div>
       `;

       const botao_comprar = el.querySelector('.btn.btn-primary');     
       botao_comprar.addEventListener('click', (evt) => {

          if (!isUser()) {
            alert('para comprar voce precisa estar logado.');
            return;
          }
          let user = getUser()
          let cart = getCart()

          let unidades = parseInt(prompt("Quantas Unidades Voce deseja Comprar???"))

          if (cart === null || cart === undefined) {
            cart = {            
              nome: produto.nome,
              total_unidades: 0,
              valor_total: 0,
              ower_id: user.id,
              products: [],
            };
          }

          cart.products.push({ produto_id: produto.id, quantidade: unidades });
          cart.total_unidades = parseInt(cart.total_unidades) + unidades;
          cart.valor_total = Number.parseFloat(cart.valor_total) + Number.parseFloat(produto.preco) * unidades;

          saveCart(cart);

          console.log({cart});

          /*
          let cart = cart_rep.create({            
            nome: nome,
            descricao: descricao,
            estoque: estoque,
            compra_unidade: unidades,
            preco: preco,
            ower_id: user.id,
            product_id: produto.id,        
      
          });
          */

          /*
            let nome  = document.getElementById('nome').value
            let descricao = document.getElementById('descricao').value
            let estoque = document.getElementById ('estoque').value
            let produto_id = document.getElementById('product_id').value
            */

            

            /*
            cart_rep.create({
            
              nome: nome,
              descricao: descricao,
              estoque: estoque,
              compra_unidade: unidades,
              preco: preco,
              ower_id: user.id,
              product_id: produto.id,        
        
            });
            */
        
            alert("Produto Foi inserido no carrinho de compras!!!!")
          
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