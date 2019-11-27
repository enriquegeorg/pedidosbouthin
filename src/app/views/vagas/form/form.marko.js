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
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body>");

  component_globals_tag({}, out);

  out.w("<h1>Cadastro de Vagas</h1><form action=\"/vagas\" method=\"post\"><input type=\"hidden\" id=\"id\" name=\"id\"><div><label for=\"job_type\">Nome da vaga:</label><input type=\"text\" id=\"job_type\" name=\"job_type\" placeholder=\"coloque o nome da vaga\"></div><div><label for=\"client_id\">Nome do cliente:</label><input type=\"text\" id=\"client_id\" name=\"client_id\" placeholder=\"coloque o nome do cliente\"></div><div><label for=\"candidate\">Nome do candidato:</label><input type=\"text\" id=\"candidate\" name=\"candidate\" placeholder=\"coloque o nome do candidato\"></div><div><label for=\"value\">Valor:</label><input type=\"text\" id=\"value\" name=\"value\" placeholder=\"150.25\"></div><input type=\"submit\" value=\"Salvar\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "18");

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
