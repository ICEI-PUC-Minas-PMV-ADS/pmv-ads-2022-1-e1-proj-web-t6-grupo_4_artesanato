import { getCart } from "../cart.js";
import { ProductRepository } from '../repositories/ProductRepository.js';
import { getUser } from "../user.js";

window.exibirCarrinho = () => {
    const carrinhoCompras = document.getElementById("carrinhoCompras");
    const cart = getCart();
    const prod_rep = new ProductRepository();


    /**
     * nome: produto.nome,
              total_unidades: 0,
              valor_total: 0,
              ower_id: user.id,
              products: [],
     */

    if (cart !== null && cart !== undefined) {

        carrinhoCompras.innerHTML = `
            <div>
                <div>
                    <p>${getUser().nome}</p>
                    <p>Total de Unidades: ${cart.total_unidades}</p>
                    <p>Valor total: R$ ${cart.valor_total.toFixed(2)}</p>
                </div>

                <ul>
                    ${cart.products.map((entry) => {
                        const product = prod_rep.get(entry.produto_id);

                        return `
                            <li>
                                <p>${product.nome}</p>
                                <p>Preço unidade: R$ ${parseFloat(product.preco).toFixed(2)}</p>
                                <p>Numero de unidades: ${entry.quantidade}</p>
                                <p>Valor total dos produtos: R$ ${(parseFloat(product.preco) * entry.quantidade).toFixed(2)}</p>
                            </li>
                        `;
                    })}
                </ul>
            </div>
        `;
    } else {
        carrinhoCompras.innerHTML = "<h1>Não ha produtos a serem exibidos</h1>";
    }
}