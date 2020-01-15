# huntercodesafio
Desafio proposto para vaga de estagiário em desenvolvimento.

How to start:

npm install

npm start

Descrição da jornada: 
tentei usar lowdb em cima de um projeto pronto (desafio para vaga de dev antigo da hunterco que achei no git) sem sucesso;
tentei usar low db num projeto blank;
dificuldade extrema de entender os projetos já feitos encontrados no git;
aproveitei a promoção e assinei o alura, vou fazer o curso de 20 horas;
decidi usar o sqlite3 pois é a linguagem que eu conheço e coincidentemente é a que o curso do alura cita;
muita dificuldade em conciliar o tempo de estudo, produção e demais projetos pessoais;
quanto a amostragem dos dados, farei a tratativa deles via query sql pois é o que conheço, imagino que poderia faze-lo com os dados que já busquei em outra requisição ao banco, mas não detenho conhecimento.
implementei as funções de update e delete da listagem por conta do curso também realizar. Tem também uma função de busca por id que falta capturar o id via post no form.;
estou com dificuldade de mostrar duas consultas na mesma rota usando metodo dao.;
facilitação do código com as metodologias de boas práticas de programação;
problemas para entender a lógica por trás do item 4 do desafio;
dúvidas esclarecidas pelo Flávio;

____

Escopo: 
Utilizando os dados disponibilizados em https://hunterco-web-static.s3-us-west-2.amazonaws.com/docs/dados_desafio.json, faça um programa que descubra:

1) Total de Valores Faturados e perdidos por Período de Cobrança
2) Quem foi/foram o(s) candidato(s) que mais foram rejeitados
3) Clientes que mais Rejeitaram Candidados, em quantidade total
4) Cliente que rejeitaram todos os candidatos enviados


Cada registro possui as seguintes informações:
* PROCESS_ID: Código da Vaga,
* JOB_TYPE: Nome da Vaga
* CLIENT_ID: Nome do Cliente,
* CANDIDATE: Nome do Candidato
* eventType: Tipo de Evento (Candidato enviado - SENT ou Candidato Contratado - APPROVED),
* DT_EVENT: Data e hora do evento
* VALUE: Valor Cobrado
* BILLED_BY: Quem gerou a cobrança
* PERIODO_COBRANCA: Qual ano/período que será cobrado
* LOST_VALUE: Valor Perdido,
* REFUND_REASON: Motivo da Perda

Observe que as cobranças podem ter sido rejeitadas pelo cliente. Quando isso acontece, o valor do campo VALUE é transferido para o campo LOST_VALUE e o campo REFUND_REASON recebe o motivo da rejeição.


Você deve fazer um programa em Java ou Javascript/NodeJS que responda às questões acima. Não é exigida nenhum uso de uma biblioteca específica mas você está livre para utilizar qualquer uma que julgar necessário ou que vá facilitar o seu trabalho. A decisão de como os dados serão apresentados também é sua, fique à vontade para escolher aquilo que você acha que consegue utilizar e que lhe dará um diferencial dentre os candidatos.
Importante: O programa deve rodar sem precisar de nenhum serviço pré-instalado ou rodando (por exemplo, banco de dados).

Você também pode colocar outros 'insights' sobre os dados além das 4 perguntas citadas acima.

Por fim, você deve publicar o seu código como um projeto no github para que possamos avaliá-lo. Você também deve dizer quais foram as principais decisões que você teve que tomar no projeto, quais as opções que você tinha e porquê escolheu a que você utilizou.

Um exemplo de decisão de projeto: Você pode optar por utilizar um banco de dados embutido ou processar os dados você mesmo. Ambas as formas podem chegar no mesmo resultado e você precisa dizer quais opções você considerou, qual foi a escolhida e por qual motivo.
