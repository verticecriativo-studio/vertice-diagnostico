// Cole este código inteiro no editor do Apps Script (Extensões → Apps Script)
// dentro da planilha de respostas. Depois publique como Web App (veja instruções).
// Esta versão substitui a anterior: agora também recebe eventos de funil
// (visita / iniciou), além das respostas completas.

var SHEET_RESPOSTAS = "Respostas";
var SHEET_EVENTOS = "Eventos";

var COLUNAS_RESPOSTAS = [
  "recebido_em",
  "session_id",
  "modo",
  "nome",
  "contato",
  "horario",
  "q1_responsavel",
  "q1b_frequencia_necessidade",
  "q1b_modalidade_preferida",
  "q1b_satisfacao_atual",
  "dor_principal",
  "dor_detalhe",
  "q3_tentativas_ou_experiencia",
  "q4_tempo_semanal",
  "q6_contexto",
  "faturamento_mensal",
  "porte_equipe",
  "q2_gasto_90_dias",
  "q5_investimento",
  "topa_call",
  "consentimento_lgpd"
];

var COLUNAS_EVENTOS = ["recebido_em", "evento", "session_id", "modo"];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    if (data.evento) {
      // Evento de funil: visita ou iniciou
      var sheetEv = ss.getSheetByName(SHEET_EVENTOS);
      var rowEv = COLUNAS_EVENTOS.map(function (col) {
        if (col === "recebido_em") return data.timestamp || new Date().toISOString();
        return data[col] || "";
      });
      sheetEv.appendRow(rowEv);
    } else {
      // Resposta completa do formulário
      var sheet = ss.getSheetByName(SHEET_RESPOSTAS);
      var row = COLUNAS_RESPOSTAS.map(function (col) {
        if (col === "recebido_em") return data.submitted_at || new Date().toISOString();
        if (col === "topa_call" || col === "consentimento_lgpd") {
          return data[col] ? "sim" : "nao";
        }
        return data[col] || "";
      });
      sheet.appendRow(row);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Testes manuais opcionais, direto pelo editor do Apps Script.
function testeManualResposta() {
  var fakeEvent = {
    postData: {
      contents: JSON.stringify({
        session_id: "teste-123",
        modo: "teste",
        nome: "Teste Manual",
        contato: "teste@exemplo.com",
        horario: "",
        q1_responsavel: "Eu mesmo(a)",
        dor_principal: "Não tenho tempo para fazer",
        q4_tempo_semanal: "1h a 3h",
        faturamento_mensal: "R$20 mil a R$50 mil",
        porte_equipe: "2 a 5",
        q2_gasto_90_dias: "R$500 a R$1.500",
        q5_investimento: "R$3.000 a R$7.000",
        topa_call: true,
        consentimento_lgpd: true,
        submitted_at: new Date().toISOString()
      })
    }
  };
  doPost(fakeEvent);
}

function testeManualEvento() {
  var fakeEvent = {
    postData: {
      contents: JSON.stringify({
        evento: "visita",
        session_id: "teste-123",
        modo: "teste",
        timestamp: new Date().toISOString()
      })
    }
  };
  doPost(fakeEvent);
}
