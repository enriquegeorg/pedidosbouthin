// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/testehunterco$1.0.0/src/app/views/vagas/lista/dados.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"></head><body>");

  component_globals_tag({}, out);

  out.w("<h1> Dados qualitativos e quantitativos </h1><h3> Valores por periodo </h3><table id=\"valores\"><tr><td>Periodo</td><td>Valor</td><td>Valor Perdido</td></tr>");

  var for__11 = 0;

  marko_forEach(data.periodos, function(periodo) {
    var keyscope__12 = "[" + ((for__11++) + "]");

    out.w("<tr id=\"periodo_" +
      marko_escapeXmlAttr(periodo.periodo) +
      "\"><td>" +
      marko_escapeXml(periodo.periodo) +
      "</td><td>" +
      marko_escapeXml(periodo.total_valor) +
      "</td><td>" +
      marko_escapeXml(periodo.total_valor_perdido) +
      "</td></tr>");
  });

  out.w("</table>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "17");

  out.w("</body> </html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/testehunterco$1.0.0/src/app/views/vagas/lista/dados.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
