# hunterco_desafio
Desafio proposto para vaga de estagiário em desenvolvimento.

How to start:

npm install
npm start

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
