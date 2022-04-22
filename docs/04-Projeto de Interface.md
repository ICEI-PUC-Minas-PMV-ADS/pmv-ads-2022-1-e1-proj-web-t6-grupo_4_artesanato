
# Projeto de Interface

As telas a serem desenvolvidas e a interação entre elas foram projetadas utilizando o _Figma_. Estas estão apresentadas abaixo em imagens e textos explicativos de como atendem os requisitos do sistema para satisfazer as histórias de usuário elicitadas ao começo desse projeto.

## User Flow

O Fluxo de usuário (_User Flow_) para mapear todas as telas do site e traçar os possíveis caminhos de ações de cliente final (comprador) e artesão (vendedor) dentro da plataforma de e-commerce formam o diagrama abaixo que é apresentado na Figura X. A imagem abaixo também pode ser consultada através do link: https://www.figma.com/file/dtoi7KXOF72EnLxpJm6GAy/Fluxo_usu%C3%A1rio_artes%C3%A3o?node-id=0%3A1 onde é possível ampliar para visualizar melhor o fluxo. Cada uma das telas será, no entanto, apresentada posteriormente em detalhes.

##### Figura X: Fluxo de usuário para o e-commerce de artesãos
![Fluxo do usuário - Figma](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t6-grupo_4_artesanato/blob/5c7a2f872d8d99450de970dab4d1eeb08ca32ca3/docs/img/Fluxo%20de%20usu%C3%A1rio.png)
Fonte: dos autores.


## Wireframes

Conforme o fluxo de telas apresentado anteriormente, os _wireframes_ de cada uma das telas a serem desenvolvidas no sistema são apresentadas a seguir:

### Login

Nessa tela é apresentada a opção de realizar login através do e-mail de usuário e senha previamente cadastrados no sistema, ou também através das contas de Facebook e Google. Caso o login ou senha estejam incorretos, o sistema responderá com uma mensagem de erro e solicitando que as informações sejam redigitadas. Nesse ambiente o usuário também poderá redefinir e recuperar a senha da conta, e aqueles não cadastrados poderão se cadastrar clicando do botão "criar nova conta".

Entrando com os dados cadastrais corretamente, o usuário redirecionado para a tela principal "Home Page Cliente" ou  "Home Page Artesão".

##### Figura X: Tela de Login
![Fluxo do usuário - Figma](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t6-grupo_4_artesanato/blob/5c7a2f872d8d99450de970dab4d1eeb08ca32ca3/docs/img/Tela%20de%20Login.png)
Fonte: dos autores


### Cadastro de cliente e de artesão

Ambas as telas são apresentadas abaixo e são semelhantes em muitos aspectos. Nela é possível escolher um nome de usuário que será aceito caso o mesmo ainda não se encontre cadastrado na base de dados. O e-mail e a senha também deverão ser informados. Para cadastro da senha haverão critérios a serem seguidos que estão claros na tela e a mesma só será aceita caso tais regras sejam seguidas. Ambos devem clicar no botão "Cadastrar" para que o cadastro seja efetuado e o usuário seja redirecionado para suas _homepages_. Os artesãos, ao diferente dos compradores, receberão posteriormente em seu e-mail as regras legais e de boas práticas que regulamentam o comércio eletrônico. Ao se cadastrarem, eles concordam que somente disponibilizarão à venda produtos que obedeçam as diretrizes que receberão via e-mail. Seguem ambas as páginas apresentadas nas figuras X e X.

##### Figura X: Cadastro de usuários (compradores) no e-commerce
![Cadastro de Cliente](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t6-grupo_4_artesanato/blob/5c7a2f872d8d99450de970dab4d1eeb08ca32ca3/docs/img/Cadastro%20do%20Cliente.png)
Fonte: dos autores.

##### Figura X: Cadastro de artesãos (vendedores) no e-commerce
![Cadastro de Vendedor](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t6-grupo_4_artesanato/blob/5c7a2f872d8d99450de970dab4d1eeb08ca32ca3/docs/img/Cadastro%20Artes%C3%A3o.png)
Fonte: dos autores


### Home Page do Artesão

A tela mostra a página do artesão após a criação da conta e já traz junto ao menu, o nome da pessoa cadastrada.
Com base na estrutura padrão, o bloco de conteúdo traz os produtos cadastrados pelo artesão com a especificação completa, o preço e as avaliações postadas pelos clientes que adquiriram o produto. Nesse mesmo bloco consta também um campo de busca para facilitar a identificação de um produto específico, bem como a opção da barra de rolagem à direita. O bloco da barra lateral traz dois elementos distintos:
- As opções de alterações dos dados cadastrais do artesão;
- As opções necessárias para o cadastro, alteração e remoção dos produtos, a agenda, o histórico de vendas e o contato dos clientes para o envio das mercadorias.

##### Figura X: Homepage do artesão
![Home Page Artesão](Home_Page_Artesão.png)
Fonte: dos autores


### Home Page do Cliente

A tela mostra a página do cliente, após a criação da conta e já traz junto ao menu, o nome da pessoa cadastrada.
Com base na estrutura padrão, o bloco de conteúdo traz as seguintes categorias de produtos: melhor avaliados, mais vendidos e últimos cadastrados, sendo que a busca por esses tópicos acontece através do uso da barra de rolagem na lateral direita. Os produtos de cada categoria apresentados na tela são acompanhados pela descrição, resumo de avaliações e preço,  bem como os botões de setas laterais para busca. Ainda no bloco de conteúdo constam mais dois elementos:
- A opção de procurar um determinado item através do preenchimento do campo pelo nome do produto ou a descrição, e a busca é realizada ao clicar no botão da lupa;
- A opção de ordenar os itens disponíveis pelos mais vendidos, melhor avaliados e últimos cadastrados. O site apresenta as opções de seleção ao clicar na seta para baixo.
O bloco da barra lateral traz as seguintes opções: alteração dos dados cadastrais do cliente, os pedidos realizados e o histórico de compras.

##### Figura X: Homepage do cliente
![Home Page Cliente](Home_Page_Cliente.png)
Fonte: dos autores

### Página de Resultado de Pesquisa
A tela de resultado de pesquisa mostra ao usuário no conteúdo da pagina a lista de produtos pesquisados pela barra de pesquisa. Ao menu lateral temos barra de pesquisa e um filtro de pesquisa baseado em categorias, material e faixa etária.
- Os produtos gerados na lista da pesquisa redirecionam para uma página mais detalhada do produto.
- Os produtos gerados na lista da pesquisa podem ser adicionados ao carrinho de compra.

##### Figura X: Tela de pesquisa e resultados de pesquisa
![Exemplo_da_Pagina](img/P%C3%A1gina%20pesquisa.png)
Fonte: dos autores.

### Página de Avaliação do Produto
A tela de avaliação permite ao usuário comentar um produto que foi vendido e entregue pelo artesão.
O produto pode ser avaliado através de uma nota em formato de estrelas que vai de 1 (ruim) a 5 (excelente) estrelas, a avaliação irá determinar uma média de pontuação para o produto interferindo na exposição do mesmo. Também será possível que ele escreva um breve comentário sobre suas impressões.

##### Foto X: Tela de avaliação do produto
![Exemplo_avaliacao](img/Avalia%C3%A7%C3%A3o%20do%20Produto.png)
Fonte: dos autores.

### Página do carrinho de Compras

Na página do carrinho de compras o cliente poderá visualizar seus pedidos salvos na lista de compras, alterar a quantidade de produtos, remover um item de sua lista e também visualizar o endereço de entrega o preço do frete e o valor total de sua compra.

Após finalizar, o usuário clicando no botão "Continuar Compra" ele será redirecionado para a página de métodos de pagamento. 

##### Tela do carrinho de compras
![carrinho_compras](img/P%C3%A1gina%20carrinho%20de%20Compras.png)
Fonte: dos autores.

### Chat
A janela de chat possui 3 botões, o de minimizar e o de fechar a janela, e o de enviar mensagem. Nela, o usuário pode entrar em contato com a equipe de suporte para esclarecer dúvidas e buscar por informações. Inicialmente há uma mensagem de boas vindas, e um campo para que o usuário escreva a sua solicitação.

##### Janela de Chat
![Janela de Chat](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t6-grupo_4_artesanato/blob/5fcda48208bde47a93de347320a499d3c10f8aea/docs/img/Chat.png)
Fonte: dos autores.

### Alteração de Dados Cadastrais
##### Figura X: Tela para alteração de dados cadastrais
![Alterar dados cadastrais]()
Fonte: dos autores

### Histórico de Compras
##### Figura X: Tela do histórico de compras
![Histórico de compras](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t6-grupo_4_artesanato/blob/5fcda48208bde47a93de347320a499d3c10f8aea/docs/img/Hist%C3%B3rico%20de%20Pedidos.png)
Fonte: dos autores

### Pagamento
##### Figura X: Tela de pagamento
![Pagamento](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t6-grupo_4_artesanato/blob/5fcda48208bde47a93de347320a499d3c10f8aea/docs/img/Tela%20de%20pagamento.png)
Fonte: dos autores

### Exibição do Produto
##### Figura X: Tela de exibição do produto
![Exibição do produto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t6-grupo_4_artesanato/blob/5fcda48208bde47a93de347320a499d3c10f8aea/docs/img/P%C3%A1gina%20do%20Produto.png)
Fonte: dos autores

### Agenda
##### Figura X: Tela de agenda
![Agenda]()
Fonte: dos autores

### Histórico do vendedor
##### Figura X: Tela de histórico do vendedor
![Histórico do vendedor](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t6-grupo_4_artesanato/blob/5fcda48208bde47a93de347320a499d3c10f8aea/docs/img/Hist%C3%B3rico%20de%20Vendas.png)
Fonte: dos autores
