/* ============================================================================
   ARTIGOS — Portal de Conteúdo · Xavier Ribeiro & Ribeiro
   ----------------------------------------------------------------------------
   COMO POSTAR UM ARTIGO (passo a passo simples):

   1) Copie um bloco inteiro, da chave de abertura  {  até a  },  (com a vírgula).
   2) Cole logo abaixo da linha  "var ARTIGOS = ["  (não precisa se preocupar com a
      ordem — o site sempre coloca o artigo de data mais recente no topo sozinho).
   3) Troque APENAS o texto que está entre as aspas. NÃO apague as aspas nem as vírgulas.
   4) Salve e suba este arquivo (artigos.js) no GitHub — o site publica sozinho.

   CAMPOS DE CADA ARTIGO:
   - id      : um "apelido" curto, sem espaços e sem acentos (ex.: "revisao-da-vida-toda").
               Cada artigo precisa de um id DIFERENTE de todos os outros.
   - titulo  : o título do artigo.
   - area    : escolha uma — Previdenciário · Trabalhista · Imobiliário ·
               Sucessório e Inventários · Indenizações e Responsabilidade Civil · Geral
   - data    : no formato ANO-MES-DIA (ex.: "2026-06-28"). O artigo com a data mais
               recente vira automaticamente o "destaque" no topo do Portal — não
               precisa mexer em mais nada, nem reordenar o arquivo.
   - autor   : nome de quem assina o artigo (ex.: "Andrea Xavier"). O site gera
               sozinho um círculo com as iniciais (ex.: "AX") ao lado do nome, em
               todo card e na página do artigo. Campo opcional: se deixar em
               branco, o círculo simplesmente não aparece.
   - cargo   : o cargo de quem assina (ex.: "Advogada · Sócia Fundadora"). Aparece
               junto do nome, pequeno, abaixo. Também opcional.
   - resumo  : 1 ou 2 frases curtas, que aparecem no card do portal.
   - conteudo: o texto completo do artigo, escrito NORMALMENTE (igual você escreveria
               no Word) — o site lê sozinho e formata. Nada de tags, nada de "+".
               Repare que o texto começa e termina com um acento grave (`), não com
               aspas (") — é só isso que muda.
                 parágrafo .......  escreva normal; pule UMA linha em branco entre
                                     um parágrafo e outro.
                 subtítulo .......  comece a linha com ##  (ex.: ## Quem pode pedir)
                 negrito .........  coloque ** dos dois lados  (ex.: **atenção**)
                 lista ...........  comece cada linha com um traço -  (uma por linha)

   DICA: mantenha sempre o bloco "modelo-copie-este" no final como referência —
   é só copiá-lo de novo a cada novo artigo. O modelo mostra o formato certo.
   Os artigos mais antigos deste arquivo ainda usam tags HTML (<p>, <h3>...) —
   tudo bem, o site reconhece os dois formatos. Só o texto NOVO precisa ser no
   formato simples acima.
   ============================================================================ */

var ARTIGOS = [
{
  id: `id-curto-sem-espaco-sem-acento`,
  titulo: `Título do artigo aqui`,
  area: `Previdenciário / Trabalhista / Imobiliário / Sucessório e Inventários / Indenizações e Responsabilidade Civil`,
  data: `ano-mes-dia, exemplo: 2026-07-15`,
  autor: `nome de quem assina, exemplo: Andrea Xavier`,
  cargo: `cargo de quem assina, exemplo: Advogada · Sócia Fundadora`,
  resumo: `resumo curto, de 1 a 2 frases, que aparece no card`,
  conteudo: `
Escreva o primeiro parágrafo aqui, normal, como neste documento. Pule uma linha em branco (aperte Enter duas vezes) para começar um parágrafo novo.

## Se quiser um subtítulo no meio do texto, comece a linha assim, com dois jogos-da-velha

Para destacar uma palavra em **negrito**, coloque dois asteriscos dos dois lados dela, assim.

- Para fazer uma lista, comece cada linha com um traço, assim
- Escreva um item por linha, sem pular linha entre um item e outro

Parágrafo final: sempre convide o leitor a falar com o escritório.
`
},	

  {
    id: "negativacao-indevida-o-que-fazer",
    titulo: "Negativação indevida: o que fazer e quando cabe indenização?",
    area: "Indenizações e Responsabilidade Civil",
    data: "2026-06-27",
    autor: "Andrea Xavier",
    cargo: "Advogada · Sócia Fundadora",
    resumo: "Teve o nome incluído no SPC/Serasa por engano ou por dívida já paga? Veja os primeiros passos e quando pode haver reparação.",
    conteudo:
      "<p>Descobrir o nome <strong>negativado</strong> (incluído no SPC ou no Serasa) por uma dívida que você não reconhece — ou que já pagou — é mais comum do que parece. A boa notícia é que há caminhos para corrigir e, em alguns casos, buscar reparação.</p>" +
      "<h3>Primeiros passos</h3>" +
      "<ul>" +
      "<li>Reúna provas: extratos, comprovantes de pagamento, contratos e prints;</li>" +
      "<li>Confirme a origem da cobrança junto ao credor e aos órgãos de proteção ao crédito;</li>" +
      "<li>Guarde os protocolos de todos os contatos.</li>" +
      "</ul>" +
      "<p>Quando a inscrição é <strong>indevida</strong> — sem dívida real, sem aviso prévio ou mesmo depois da quitação — pode caber a retirada do nome e, dependendo do caso, indenização por danos morais. Mas cada situação exige análise individual: nem toda negativação gera reparação, e os detalhes do seu caso fazem diferença.</p>" +
      "<p>Atenção a um ponto importante: se já existir outra negativação legítima ao mesmo tempo, a análise muda. Por isso vale avaliar os documentos com calma antes de agir.</p>" +
      "<p>Está passando por isso? Fale com o escritório e avaliamos o seu caso com franqueza — sem promessas, apenas o que é possível.</p>"
  },

  {
    id: "revisao-da-vida-toda",
    titulo: "Revisão da Vida Toda: quem ainda pode pedir?",
    area: "Previdenciário",
    data: "2026-06-22",
    autor: "Andrea Xavier",
    cargo: "Advogada · Sócia Fundadora",
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
    autor: "Inês Ribeiro",
    cargo: "Advogada · Sócia",
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
    area: "Sucessório e Inventários",
    data: "2026-06-08",
    autor: "Inês Ribeiro",
    cargo: "Advogada · Sócia",
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
    autor: "Nome do autor aqui",
    cargo: "Cargo aqui (ex.: Advogada · Sócia)",
    resumo: "Um resumo curto, de uma ou duas frases, que aparece no card do portal.",
    conteudo: `Primeiro parágrafo do artigo. Escreva de forma simples e direta, como se estivesse explicando para um cliente.

## Um subtítulo, se quiser

Outro parágrafo. Use **negrito** para destacar o que mais importa.

- Um ponto importante
- Outro ponto

Parágrafo final, sempre com uma orientação clara: convide o leitor a falar com o escritório.`
  }

];
