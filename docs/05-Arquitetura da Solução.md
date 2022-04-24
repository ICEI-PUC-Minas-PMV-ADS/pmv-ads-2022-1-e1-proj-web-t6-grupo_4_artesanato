# Arquitetura da Solução
Os detalhes sobre os componentes que farão parte da solução e o ambiente de hospedagem da mesma escontram-se descritos a seguir.

## Diagrama de componentes

Os componentes que fazem parte da solução proposta nesse projeto encontram-se modelados na Figura 1. Nela é possível notar as tecnologias que serão utilizadas para a interface usuário/máquina e para código, armazenamento de dados e hospedagem para que uma resposta apropriada às requisições do usuário sejam fornecidas.

##### Figura 1: Diagrama dos componentes do sistema
![Diagrama de Componentes](img/Diagrama%20de%20Componentes.png)
<center>Fonte: dos autores.</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Produtos cadastrados** - Informações relevantes dos produtos como descrição, preço, quantidade em estoque, condição do produto e também uma imagem do produto.
     - **Comentários** - registro de opiniões e avaliação dos usuários sobre os produtos.
     - **Histórico de vendas** - registro de vendas efetuadas concluidas ou não.
     - **Registro do Usuário** - registro de informações e dados para login do usuário cliente e artesão.
 - **Hospedagem** - A hospedagem será feita na plataforma do Heroku, as páginas serão mantidas e acessadas pelo navegador. A URL do projeto e a submissão do mesmo (_push_) via git para o repositório será feita nas etapas posteriores do projeto.

Seguindos os componentes do sistema apresentados acima, o casos de uso dos usuários ponta a ponta seguirão o fluxo descrito abaixo: 

Assim que o usuário entra na plataforma, ele é apresentado à tela inicial de login onde há também a possibilidade de criar uma nova conta, cadastrando uma conta de cliente ou artesão. Nessa etapa os repositório local de registro de usuário deverá ser acessado seja para incluir um novo cadastro ou consultar um cadastro já feito para login. Após login, o usuário é redirecionado para a home page do artesão ou cliente, dependendo da conta que possui.

Iniciando pela visão do cliente - comprador. A _homepage_ do cliente é a principal página da plataforma, redirecionando o usuário para todas as demais páginas funcionais. Nela, o usuário pode solicitar alterção dos dados cadastrais. Ao digitar uma palavra chave no campo de pesquisa, é exibido para ele uma lista de produtos relativos a busca efetuada, além de um menu lateral com a funcionalidade de filtrar os produtos por material, categorias e faixa etária a que se destinam. Esses dados de produtos estarão disponíveis em repositório local de cadastro de produtos.

Da homepage ou da página de buscas realizadas ele pode clicar em um produto específico para obter mais informações sobre o mesmo. O repositório local de registro de produtos será acessado nessa busca. Caso se interesse por um produto ele pode adicioná-lo ao carrinho de compras que poderá ser consultado e fechado realizando a compra através da tela de pagamento que se abrirá. Para essa funcionalidade o repositório local de registro de usuário será acessado. Ele também pode optar a ser redirecionado para o seu histórico de compras anteriores onde poderá avaliar os produtos que já foram comprados. Ambos os repositórios locais de comentários e de históricos serão acessados para essas funcionalidades.

Seguindo pela visão do artesão, o mesmo encontrará em sua homepage os produtos cadastrados que serão passíveis de alteração de preço, estoque, inclusão e exclusão. Atividades estas que requisitarão o armazenamento local de registro de produtos. De lá, o artesão poderá optar por exibir a sua agenda pessoal (repositório local de histórico contemplará as datas de venda e entrega previstas), ou visualizar as vendas realizadas e estatísticas de desempenho.

Para visualização gráfica dos possíveis casos de uso ponta a ponta, retornar à imagem 1 presente na documentação "Projeto de Interface"

## Tecnologias Utilizadas

As tecnologias escolhidas para o desenvolvimento são
Linguagens de Programação a serem utilizadas: HTML, JS, CSS
Frameworks: Figma
IDEs de desenvolvimento: Visual Studio Code.



