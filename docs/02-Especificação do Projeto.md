# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários. 


## Personas
As personas levantadas durante o processo de entendimento do problema são apresentadas a seguir:   

### Andréa Silva 

Idade: 59 

Ocupação: Artesã, decoradora e professora. Trabalha com artesanato desde 1984 produzindo almofadas decorativas em diversos formatos, futons, travesseiros, capas de colchão e cadeira, tapetes, produtos infantis diversos como: toucas, tiaras, bolas siliconadas, almofadas de amamentação, travesseiros, protetor para cinto de carro, além de trabalhar com reforma de assentos de cadeiras. 

Aplicativos: WhatsApp, Aplicativos de banco

Motivações: Inspira-se em produtos mostrados em programas de televisão, uma vez que atraem o interesse das pessoas que assistem. Gosta de andar por lojas e mercados para verificar tendências.  

Frustrações: Não conseguir aumentar as vendas. Não conseguir promover a divulgação dos produtos online. Atualmente divulga os produtos em loja física e feiras (quando tem). Muitas vezes é necessário ir para Belo Horizonte para conseguir vender certos produtos. 

Hobbies, História: Cuida de casa, do marido, do cachorro e de sua horta. Gosta de passear no interior, dançar e inventar coisas diferentes, sem desperdiçar nada, pois tudo é transformado. Nascida no interior do Espírito Santo, veio para Ibirité e começou a trabalhar cuidando de crianças, ao mesmo tempo que estudava. Depois fez o curso de Magistério e quando começou a cursar a faculdade, precisou trabalhar com o irmão para pagar a graduação. Aprendeu a desmanchar sofás, costurar e fazer pequenas peças com sobras de tecidos. Depois foi aprimorando as técnicas e vendendo o produzia. 

### Narayhane Delabrida  

Idade: 29 

Ocupação: “Sou turismóloga e artesã. Trabalho com consultoria em turismo e macramê.” 
Aplicativos: “Instagram é o principal, depois uso Facebook, WhatsApp, Canva, Trello. São os de comunicação direta com meus clientes, para criação de conteúdo, planejamento/organização.” 

Motivações: “Minha principal motivação é o amor pelo que faço, gosto muito, faço com muito carinho“ 

Frustrações: “As vezes não dar conta de tudo a ponto de fechar a agenda de encomendas. E a desvalorização do artesanato, mas tenho visto uma melhora nos últimos tempos.” 

Hobbies, História: “O macramê é meu hobby, mesmo sendo o meu trabalho também. Comecei a fazer macramê para diminuir a ansiedade e estresse, com objetivo de ocupar a mente com outras coisas que não fosse só a maternidade no meio de uma pandemia. E hoje mesmo sendo um trabalho sério, com todas as obrigações de um negócio, o ato de tecer ainda é meu hobby.”  


### Franciele Félix  

Idade: 28 

Ocupação: Engenheira de Materiais, professora de inglês e artesã. Como artesã, faço amigurumis para o nicho materno / infantil.  

Aplicativos: Instagram, WhatsApp, Aplicativos de bancos, Editores de imagem.  

Motivações: Vitrine para expor seus produtos. Conseguir oferecer melhores formas de pagamento para o cliente.   Desburocratizar e facilitar a logística de envio e entrega (o site já coleta todos os dados necessários como endereço, CPF, etc)

Frustrações: Sites pouco profissionais que desvalorizam o produto. Comissões elevadas que geram em torno de 15% a 25% do valor do produto. Sites que exigem fundo branco e não permitem valorizar o produto com o cenário. Não conseguir uma comunicação eficiente com o cliente em caso de personalização do produto. O que pode inclusive fazer o preço variar.  

Hobbies, História: Ela trabalha de casa e divide o tempo entre cuidar do lar e do trabalho. Domina muito as técnicas de artesanato, mas precisa de ajuda com as demais áreas de venda do seu produto. Como uma pessoa criativa, ela gosta de hobbies que estimulem os seus sentidos: Assistir séries e filmes, se inspirar com os perfis de outros artesãos, viajar, ouvir música.  


## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários. 

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Andréa Silva| Expor meus produtos de maneira simples e de fácil acesso para meus clientes.|Para melhorar na divulgação dos meus produtos aumentando o número de clientes em potencial.|
|Andréa Silva| Possibilidade de organizar minhas vendas para conciliar vendas online e em loja física. |Para ter melhor controle de materiais, estoque e prazo de entrega.|
|Andréa Silva |Opção de clientes retirarem os produtos direto da loja física |Para atender melhor os clientes que moram nas proximidades.|
|Franciele Félix|Possibilidade de oferecer diferentes formas de pagamento para o cliente.|Para facilitar e atender melhor às necessidades dos clientes.|
|Franciele Félix|Possibilidade de coletar dados relevantes do cliente de maneira simples e eficiente|Para desburocratizar e facilitar a logística de envio e entrega.|
|Franciele Félix|Possibilidade de personalização do cenário de exposição do produto|Para agregar valores na exposição do meu produto|
|Narayhane Delabrida |Possibilidade de organização das encomendas para conciliar com minha rotina diária com mais qualidade. |Para controle do estoque de materiais e entregas dentro do prazo. |
|Narayhane Delabrida |Mais uma opção para exposição e venda meus produtos.|Para aumentar as encomendas e a possibilidades de clientes de outras regiões adquirirem os produtos.|


## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir. 

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01|O site deve oferecer uma funcionalidade de criação de usuário Vendedor (Artesão) ou Cliente (Comprador).|Alta|  
|RF-02|O site deve apresentar, na página do usuário (cliente) os últimos itens cadastrados e melhores avaliados.|Média|  
|RF-03|O site deve apresentar, na página do usuário (cliente) produtos mais vendidos.|Baixa|
|RF-04|O site deve oferecer uma funcionalidade para alteração ou remoção de conta.|Alta|  
|RF-05|O site deve oferecer uma funcionalidade de filtro-pesquisa para permitir ao usuário - cliente localizar um produto pelo material, categorias ou faixa etária.|Média|
|RF-06|O site deve efetuar login de cliente cadastrado em sua página inicial, ou redirecionar usuário para criação de conta.|Alta|
|RF-07|O site deve permitir ao usuário (vendedor) cadastrar, alterar ou deletar algum produto.|Alta|
|RF-08|O site deve listar para um cliente todos os produtos cadastrados de um vendedor especifico, através de uma pesquisa.|Baixa|
|RF-09|O site deve oferecer uma funcionalidade para definir a forma de pagamento.|Alta|
|RF-10|O site deve oferecer uma funcionalidade para definir formas de envio e prazos de entrega dos produtos.|Alta|
|RF-11|O site deve exibir os comentários registrados juntamente com o produto que foi vendido.|Baixa| 
|RF-12|O site deve oferecer informações completas de um produto incluindo uma imagem do mesmo.|Alta|
|RF-13|O site deve oferecer uma funcionalidade de chat entre Vendedor e Cliente.|Baixa|  
|RF-14|O site deve permitir usuário avaliar e comentar um produto que tenha comprado.|Média|
|RF-15|O site deve fornecer ao usuário (vendedor), dados do usuário (cliente) que facilitem e agilizem o envio.|Média|  
|RF-16|O site deve filtrar e pesquisar vendedores em regiões especificas.|Baixa|
|RF-17|O site deve oferecer uma funcionalidade para o usuário (artesão) consultar seus pedidos e organizar sua agenda. (Formato de calendário)|Baixa  
|RF-18|O site deve oferecer uma funcionalidade de histórico de compras para os usuários.|Média|
|RF-19|O site deve oferecer uma funcionalidade para devolução de produtos.|Alta|
|RF-20|O site deve oferecer uma funcionalidade para personalização do leiaute do usuário (artesão).|Baixa|  
|RF-21| O site deve exibir um termo de confidenciabilidade de dados para usuário durante a criação da conta respeitando as normas da LGPD.|Alta| 


### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01|O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku).|Alta|  
|RNF-02|O site deverá ser responsivo permitindo a visualização em um celular de forma adequada.|Alta|  
|RNF-03|O site deve ser ágil e de fácil entendimento para os usuários.|Média|
|RNF-04|O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).|Alta|
|RNF-05|O site deve receber imagens com qualidade especifica no cadastramento dos produtos do usuário, para não causar lentidão ou mal uso do espaço do servidor.|Alta|  
|RNF-06|O site deverá ter limite de produtos cadastrados.|Média|  
|RNF-07|O site deve manter o histórico de compras e pagamentos, por certo período.|Média|  
|RNF-08|O site deve coletar e tratar dados de acordo com as normas da LGPD (Lei Geral de Proteção de Dados do Brasil). |Alta| 


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir. 

|ID| Restrição                                             |
|-----|-------------------------------------------------------|
|RE-01|O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 12/06/2022.|
|RE-02|O aplicativo deve se restringir às tecnologias básicas da Web no Front-end|
|RE-03|A equipe não pode subcontratar o desenvolvimento do trabalho.|
