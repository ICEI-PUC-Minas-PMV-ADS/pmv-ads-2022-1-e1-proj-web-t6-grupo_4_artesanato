import { getCart, deleteCart } from "../cart.js";
import { ProductRepository } from '../repositories/ProductRepository.js';
import { getUser } from "../user.js";

window.exibirCarrinho = () => {
    const carrinhoCompras = document.getElementById("carrinhoCompras");
    const cart = getCart();
    const prod_rep = new ProductRepository();

    if (cart !== null && cart !== undefined) {

        carrinhoCompras.innerHTML = `
            <div>
                <div class="mb-3">
                    <p><b>Usuário: ${getUser().nome}</b></p>
                    <p><b>Total de Unidades:</b> ${cart.total_unidades}</p>
                    <p><b>Valor total: R$ ${cart.valor_total.toFixed(2)}</b></p>
                    <button class="btn btn-secondary">Excluir Carrinho </button>
                </div>

                <ul>
                    ${cart.products.map((entry) => {
                        const product = prod_rep.get(entry.produto_id);

                        return `
                            <li>
                                <p>Nome do Produto : ${product.nome}</p>
                                <p>Preço da unidade: R$ ${parseFloat(product.preco).toFixed(2)}</p>
                                <p>Numero de unidades: ${entry.quantidade}</p>
                                <p>Valor total dos produtos: R$ ${(parseFloat(product.preco) * entry.quantidade).toFixed(2)}</p>
                            </li>
                        `;
                    })}
                </ul>
            </div>
        `;

        const btn_delete = carrinhoCompras.querySelector('.btn.btn-secondary')
        btn_delete.addEventListener('click', () => {
                deleteCart()
                window.location.reload()
        })


    } else {
        carrinhoCompras.innerHTML = "<h1>Não ha produtos a serem exibidos</h1>";
    }


    
}