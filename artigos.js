var TEXTO_NOVOS_ARTIGOS = `

↑ COLE O ARTIGO NOVO AQUI EM CIMA ↑
`;

var ARTIGOS = [

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
  }

];

(function(){
  function slugify(s){
    return String(s || '')
      .toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  var texto = String(typeof TEXTO_NOVOS_ARTIGOS !== 'undefined' ? TEXTO_NOVOS_ARTIGOS : '');
  var blocos = texto.split(/===\s*NOVO ARTIGO\s*===/i).slice(1);
  blocos.forEach(function(bloco){
    bloco = bloco.split(/===\s*FIM\s*===/i)[0];
    var linhas = bloco.replace(/\r\n/g, '\n').split('\n');
    var campos = {};
    var conteudoLinhas = [];
    var emConteudo = false;
    linhas.forEach(function(linha){
      if(!emConteudo){
        var m = linha.match(/^\s*(id|titulo|area|data|autor|cargo|resumo|conteudo)\s*:\s*(.*)$/i);
        if(m){
          var campo = m[1].toLowerCase();
          if(campo === 'conteudo'){
            emConteudo = true;
            if(m[2]) conteudoLinhas.push(m[2]);
          } else {
            campos[campo] = m[2].trim();
          }
          return;
        }
      } else {
        conteudoLinhas.push(linha);
      }
    });
    campos.conteudo = conteudoLinhas.join('\n').trim();
    if(!campos.titulo) return;
    if(!campos.id) campos.id = slugify(campos.titulo);
    if(ARTIGOS.some(function(a){ return a.id === campos.id; })){
      console.warn('[artigos.js] id repetido, artigo ignorado: ' + campos.id);
      return;
    }
    ARTIGOS.push(campos);
  });
})();
