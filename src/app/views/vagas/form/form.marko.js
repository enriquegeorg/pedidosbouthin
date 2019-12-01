// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/testehunterco$1.0.0/src/app/views/vagas/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body>");

  component_globals_tag({}, out);

  out.w("<h1>Cadastro de Vagas</h1><form action=\"/vagas\" method=\"post\">");

  if (data.vaga.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
      marko_escapeXmlAttr(data.vaga.id) +
      "\"></div>");
  }

  out.w("<div><label for=\"job_type\">Nome da vaga:</label><input type=\"text\" id=\"job_type\" name=\"job_type\" value=\"" +
    marko_escapeXmlAttr(data.vaga.job_type) +
    "\" placeholder=\"coloque o nome da vaga\"></div><div><label for=\"client_id\">Nome do cliente:</label><input type=\"text\" id=\"client_id\" name=\"client_id\" value=\"" +
    marko_escapeXmlAttr(data.vaga.client_id) +
    "\" placeholder=\"coloque o nome do cliente\"></div><div><label for=\"candidate\">Nome do candidato:</label><input type=\"text\" id=\"candidate\" name=\"candidate\" value=\"" +
    marko_escapeXmlAttr(data.vaga.candidate) +
    "\" placeholder=\"coloque o nome do candidato\"></div><div><label for=\"value\">Valor:</label><input type=\"text\" id=\"value\" name=\"value\" value=\"" +
    marko_escapeXmlAttr(data.vaga.value) +
    "\" placeholder=\"150.25\"></div><div><label for=\"refund_reason\">Motivo da perda:</label><textarea cols=\"20\" rows=\"10\" id=\"refund_reason\" name=\"refund_reason\" placeholder=\"descreva o motivo da perda\">" +
    marko_escapeXml(data.vaga.refund_reason) +
    "</textarea></div><div><label for=\"billed_by\">Nome de quem gerou a cobrança:</label><input type=\"text\" id=\"billed_by\" name=\"billed_by\" value=\"" +
    marko_escapeXmlAttr(data.vaga.billed_by) +
    "\" placeholder=\"nome de quem gerou a cobranca\"></div><select name=\"eventtype\"><option id=\"eventtype\" name=\"eventtype\" value=\"CANDIDATE_SENT\">Candidato Enviado</option><option id=\"eventtype\" name=\"eventtype\" value=\"CANDIDATE_APPROVED\">Candidato Contratado</option></select><input type=\"submit\" value=\"Salvar\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "29");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/testehunterco$1.0.0/src/app/views/vagas/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
