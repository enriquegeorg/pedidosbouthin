// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/testehunterco$1.0.0/src/app/views/vagas/lista/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"></head><body>");

  component_globals_tag({}, out);

  out.w("<h1> Listagem de vagas </h1><table><tr><td>ID</td><td>Nome da Vaga</td><td>Nome do Cliente</td><td>Nome do candidato</td><td>Tipo do evento</td><td>Data e hora do evento</td><td>Valor cobrado</td><td>Quem gerou a cobrança</td><td>Ano/Periodo da cobrança</td><td>Valor Perdido</td><td>Motivo da Perda</td></tr>");

  var for__18 = 0;

  marko_forEach(data.vagas, function(vaga) {
    var keyscope__19 = "[" + ((for__18++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(vaga.id) +
      "</td><td>" +
      marko_escapeXml(vaga.job_type) +
      "</td><td>" +
      marko_escapeXml(vaga.client_id) +
      "</td><td>" +
      marko_escapeXml(vaga.candidate) +
      "</td><td>" +
      marko_escapeXml(vaga.eventtype) +
      "</td><td>" +
      marko_escapeXml(vaga.dt_event) +
      "</td><td>" +
      marko_escapeXml(vaga.value) +
      "</td><td>" +
      marko_escapeXml(vaga.billed_by) +
      "</td><td>" +
      marko_escapeXml(vaga.periodo_cobranca) +
      "</td><td>" +
      marko_escapeXml(vaga.lost_value) +
      "</td><td>" +
      marko_escapeXml(vaga.refund_reason) +
      "</td></tr>");
  });

  out.w("</table> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "32");

  out.w("</body> </html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/testehunterco$1.0.0/src/app/views/vagas/lista/lista.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
