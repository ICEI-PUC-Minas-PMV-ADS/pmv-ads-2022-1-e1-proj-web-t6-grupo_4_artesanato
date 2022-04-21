
# Metodologia

Para criação do e-commerce para artesãos foi escolhida a metodologia ágil, seguindo o processo do SCRUM adaptado para a natureza da equipe de trabalho e ao resultado entregável com foco na formação técnica e em gestão dos membros que a compõe.

Incialmente, foi criado o artefato de "Especificação de requisitos de software" através de sua elicitação partindo de entrevistas com os clientes em potencial. Sua análise, especificação e validação foram atividades adotadas e são atividades constantes no decorrer do projeto levando à atualizações frequentes no _backlog_ das _sprints_.

Os ambientes de trabalhos adotados pela equipe são diversos sendo adotados de acordo com o propósito de cada aplicação. A tabela X apresenta as plataformas e propósitos a que se destinam.

|Ambiente                                            |Plataforma     |Link de acesso   |
|----------------------------------------------------|---------------|--------------   |
|Repositório de Código Fonte e Documentos do Projeto |GitHub         |https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t6-grupo_4_artesanato|
|Projeto de Interface e Wireframes                   |Figma          |https://www.figma.com/file/dtoi7KXOF72EnLxpJm6GAy/Fluxo_usu%C3%A1rio_artes%C3%A3o?node-id=0%3A1|
|Gerenciamento do Projeto                            |GitHub         |https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t6-grupo_4_artesanato/projects/1|
|Gerenciamento do Projeto - comunicação e reuniões   |WhatsApp, Teams|https://chat.whatsapp.com/ByoxtpZPTD45nrbTaYSqxG  / encurtador.com.br/ezRU7|


## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada.

> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Gerenciamento de Projeto

### Divisão de Papéis

Foi escolhida a metodologia ágil para a execução do projeto, tendo como base o SCRUM para definição do processo de desenvolvimento, recebendo as devidas adaptações à natureza e objetivos desse trabalho.

Dessa forma, a equipe foi organizada da seguinte maneira:
* _Scrum Master_: Henrique Alexandre Gomes Pinto
* _Product Owner_: Franciele Teixeira Félix
* Equipe de desenvolvimento:
  - Franciele Teixeira Félix
  - Giovanna Maria Elias Coura
  - Guilherme de Souza Araújo
  - Henrique Alexandre Gomes Pinto
  - Thiago Campos de Araújo

As escolhas foram pautadas nas seguintes justificativas: 1) O _Scrum Master_ possui maior conhecimento sobre Desenvolvimento e, portanto, poderá auxiliar melhor o grupo em suas atividades, fornecer os insumos necessários e ter uma visão mais crítica sobre o trabalho que está sendo realizado. 2) O _Product Owner_ escolhido é uma de nossas personas e conhece o perfil do cliente. Portanto, poderá fornecer informações valiosas sobre o _backlog_ do produto e validar as funcionalidades aplicadas. 3) Ao contrário das definições tradicionais to time no SCRUM, todos fazem parte do time de desenvolvimento porque este é um trabalho de caráter formativo em que todos devem aprender e praticar a criação de código e demais atividades atribuidas aos desenvolvedores.

### Processo

Para distribuição de tarefas entre a equipe, foi adotado o método Kanban dentro do GitHub na aba "Projects".
As seguintes listas foram criadas:
* _Product Backlog_: Lista que recebe as tarefas a serem trabalhadas e sua descrição de requisitos. Essa lista é sempre atualizada de acordo com revisões de sprints e identificação de novos requisitos.
* _To do_: Lista que recebe o _Sprint Backlog_ de cada _Sprint_. Nela, há como o time atribuir para si cada uma das tarefas.
* _In progress_: Lista em que os desenvolvedores posicionam as tarefas que estão em andamento.
* _Review_: Lista que recebe o teste de qualidade. Ao final de cada _Sprint_ o trabalho feito é revisto e o grupo decide se ele se enquadra como "Feito" de acordo com o que foi definido no começo da _Sprint_.
* _Done_: Lista que recebe as tarefas que foram concluídas, revistas e classificadas como feitas.
* _Locked_: Lista que recebe as tarefas cujo desenvolvedor não pode concluir a atividade por algum motivo. Nela, a tarefa é incorporada juntamente com um comentário do que a está impedindo de ser realizada.

A Figura X é um _ScreenShot_ da tela em que o método _Kanban_ é aplicado dentro do _GitHub_.
![Figura X - Tela do Kanban utilizada pelo grupo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t6-grupo_4_artesanato/blob/3c652ec0fe743a825a281e2724244af186648699/docs/Kanban.png)

Ainda dentro do processo do SCRUM, o planejamento da _Sprint_ é feita semanalmente em reunião realizada no através do _Teams_, a comunicação diária (_Daily_) é feita por aplicativo de mensagens (_WhatsApp_), e a revisão da Sprint também é feita semanalmente através do _Teams_. Além disso, semanalmente temos a oportunidade de realizar a revisão da _Sprint_ em reuniões com a professora Nathália.

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o
sistema de versão. As ferramentas de comunicação utilizadas possuem
integração semelhante e por isso foram selecionadas. Por fim, para criar
diagramas utilizamos essa ferramenta por melhor captar as
necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)
