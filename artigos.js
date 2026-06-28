/* ============================================================================
   ARTIGOS — Portal de Conteúdo · Xavier Ribeiro & Ribeiro
   ----------------------------------------------------------------------------
   COMO POSTAR UM ARTIGO (passo a passo simples):

   1) Copie um bloco inteiro, da chave de abertura  {  até a  },  (com a vírgula).
   2) Cole logo abaixo da linha  "var ARTIGOS = ["  (para o artigo novo aparecer no topo).
   3) Troque APENAS o texto que está entre as aspas. NÃO apague as aspas nem as vírgulas.
   4) Salve e suba este arquivo (artigos.js) no GitHub — o site publica sozinho.

   CAMPOS DE CADA ARTIGO:
   - id      : um "apelido" curto, sem espaços e sem acentos (ex.: "revisao-da-vida-toda").
               Cada artigo precisa de um id DIFERENTE de todos os outros.
   - titulo  : o título do artigo.
   - area    : escolha uma — Previdenciário · Trabalhista · Inventário & Sucessões ·
               Indenizações · Geral
   - data    : no formato ANO-MES-DIA (ex.: "2026-06-28"). É por ela que o site ordena.
   - resumo  : 1 ou 2 frases curtas, que aparecem no card do portal.
   - conteudo: o texto completo. Use estas "etiquetas" simples:
                 parágrafo .......  <p>seu texto</p>
                 subtítulo .......  <h3>seu subtítulo</h3>
                 negrito .........  <strong>texto em destaque</strong>
                 lista ...........  <ul><li>item 1</li><li>item 2</li></ul>
               Para textos longos, junte vários trechos com  +  (veja os exemplos abaixo).

   DICA: mantenha sempre o bloco "modelo-copie-este" no final como referência —
   é só copiá-lo de novo a cada novo artigo.
   ============================================================================ */

var ARTIGOS = [

  {
    id: "revisao-da-vida-toda",
    titulo: "Revisão da Vida Toda: quem ainda pode pedir?",
    area: "Previdenciário",
    data: "2026-06-22",
    resumo: "Entenda em poucos minutos se a revisão pode aumentar o seu benefício e quais são os prazos.",
    conteudo:
      "<p>A chamada <strong>Revisão da Vida Toda</strong> permite que parte dos aposentados inclua no cálculo do benefício as contribuições feitas antes de julho de 1994 — período que, em algumas regras, ficava de fora.</p>" +
      "<h3>Quem pode se beneficiar</h3>" +
      "<p>Em geral, quem teve bons salários antes de 1994 e se aposentou por uma regra que ignorava esse período. Mas atenção: cada caso exige uma análise individual do seu histórico de contribuições (CNIS).</p>" +
      "<p>Existem <strong>prazos</strong> para pedir a revisão, e nem todo benefício se enquadra. Por isso, antes de qualquer passo, é essencial avaliar os documentos com cuidado — sem promessa de aumento, mas com franqueza sobre o que é possível.</p>" +
      "<p>Ficou em dúvida se o seu caso se aplica? Fale com o escritório e avaliamos com você, sem compromisso.</p>"
  },

  {
    id: "saí-do-emprego-quais-verbas-conferir",
    titulo: "Saí do emprego: quais verbas eu devo conferir?",
    area: "Trabalhista",
    data: "2026-06-15",
    resumo: "Aviso prévio, férias, 13º, FGTS e multa — um guia rápido do que checar na hora da rescisão.",
    conteudo:
      "<p>Ao fim de um contrato de trabalho, é comum restar a dúvida: <strong>recebi tudo o que era meu?</strong> Vale a pena conferir cada verba com atenção.</p>" +
      "<ul>" +
      "<li><strong>Saldo de salário</strong> e <strong>aviso prévio</strong>;</li>" +
      "<li><strong>Férias</strong> vencidas e proporcionais, com o adicional;</li>" +
      "<li><strong>Gratificação natalina</strong> (13º) proporcional;</li>" +
      "<li><strong>FGTS</strong> e, na dispensa sem justa causa, a <strong>multa</strong>.</li>" +
      "</ul>" +
      "<p>Diferenças nesses valores são mais comuns do que parece. Uma análise dos seus contracheques e da carteira mostra rapidamente se há algo a corrigir.</p>"
  },

  {
    id: "inventario-judicial-ou-extrajudicial",
    titulo: "Inventário em cartório ou na Justiça: qual é o seu caso?",
    area: "Inventário & Sucessões",
    data: "2026-06-08",
    resumo: "Havendo consenso entre os herdeiros, o inventário pode ser mais rápido. Entenda quando isso é possível.",
    conteudo:
      "<p>Organizar o patrimônio de quem partiu é um momento delicado — e o caminho escolhido faz diferença no tempo e no custo.</p>" +
      "<h3>Quando dá para fazer em cartório</h3>" +
      "<p>O inventário <strong>extrajudicial</strong> (em cartório) costuma ser possível quando há acordo entre todos os herdeiros, todos são maiores e capazes e há um advogado acompanhando. Tende a ser mais rápido.</p>" +
      "<p>Já o inventário <strong>judicial</strong> é o caminho quando há divergência, herdeiro menor ou questões que precisam da decisão de um juiz.</p>" +
      "<p>Não sabe por onde começar? Conte a sua situação e mostramos os próximos passos, com cuidado e respeito.</p>"
  },

  {
    id: "modelo-copie-este",
    titulo: "Título do artigo aqui",
    area: "Geral",
    data: "2026-01-01",
    resumo: "Um resumo curto, de uma ou duas frases, que aparece no card do portal.",
    conteudo:
      "<p>Primeiro parágrafo do artigo. Escreva de forma simples e direta, como se estivesse explicando para um cliente.</p>" +
      "<h3>Um subtítulo, se quiser</h3>" +
      "<p>Outro parágrafo. Use <strong>negrito</strong> para destacar o que mais importa.</p>" +
      "<ul><li>Um ponto importante.</li><li>Outro ponto.</li></ul>" +
      "<p>Parágrafo final, sempre com uma orientação clara: convide o leitor a falar com o escritório.</p>"
  }

];
