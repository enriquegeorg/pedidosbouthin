// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pedidosbouthin$1.0.0/src/app/views/pedidos/lista/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/huntercodesafio.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/logo_bouthin.png\" alt=\"Hunter Co\" height=\"45px\" width=\"auto\"></h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=\"#\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Login</a></div></div></div></header><main class=\"conteudoPrincipal\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-8\"><h1> Listagem de Pedidos </h1></div><div class=\"col-sm-4\"><button type=\"button\" class=\"btn btn-dark\"> <a href=\"pedidos/form\">Cadastrar Nova</a></button></div></div><div class=\"row\"><table id=\"pedidos\" class=\"table table-striped table-hover\"><thead class=\"thead-dark\"><tr><td>ID</td><td>Empresa</td><td>Data Entrega</td><td>Valor</td><td>Situação</td></tr></thead>");

  var for__33 = 0;

  marko_forEach(data.pedidos, function(pedido) {
    var keyscope__34 = "[" + ((for__33++) + "]");

    out.w("<tr id=\"pedido_" +
      marko_escapeXmlAttr(pedido.id) +
      "\"><a href=\"/form/" +
      marko_escapeXmlAttr(pedido.id) +
      "\" class=\"parent\" style=\"display: block;width: 300px;\"></a><td><a href=\"/pedidos/view/" +
      marko_escapeXmlAttr(pedido.id) +
      "\">" +
      marko_escapeXml(pedido.id) +
      "</a></td><td>" +
      marko_escapeXml(pedido.idempresa) +
      "</td><td>" +
      marko_escapeXml(pedido.dataentrega) +
      "</td><td>" +
      marko_escapeXml(pedido.valor) +
      "</td><td>" +
      marko_escapeXml(pedido.situacao) +
      "</td><td><a href=\"/pedidos/form/" +
      marko_escapeXmlAttr(pedido.id) +
      "\">Editar</a></td><td><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(pedido.id) +
      "\" data-type=\"remocao\">Remover</a></td></tr>");
  });

  out.w("</table> </div><script src=\"estatico/js/remove-pedido.js\">\r\n            </script></div></main><footer class=\"rodape\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/simples_logo.png\" class=\"logo-rodape\"></h1></div><div class=\"col-8\"><ul class=\"redesSociais\"><li><a href=\"https://www.facebook.com/huntercofanpage/\" class=\"compartilhar-facebook\" target=\"_blank\">/SrBouthin</a></li></ul></div></div></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "58");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/pedidosbouthin$1.0.0/src/app/views/pedidos/lista/lista.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
