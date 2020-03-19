// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pedidosbouthin$1.0.0/src/app/views/empresas/lista/view.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/huntercodesafio.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/logo-cabecalho.png\" alt=\"Hunter Co\" height=\"35px\" width=\"auto\"></h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=\"#\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Login</a></div></div></div></header><main class=\"conteudoPrincipal\"><div class=\"container\"><h1>Visualização de Empresa</h1><div class=\"form-group\"><label for=\"razaosocial\">Razão social:</label><input disabled type=\"text\" id=\"razaosocial\" name=\"razaosocial\" value=\"" +
    marko_escapeXmlAttr(data.empresa.razaosocial) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"nomefantasia\">Nome Fantasia:</label><input disabled type=\"text\" id=\"nomefantasia\" name=\"nomefantasia\" value=\"" +
    marko_escapeXmlAttr(data.empresa.nomefantasia) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"cnpj\">CNPJ:</label><input disabled type=\"text\" id=\"cnpj\" name=\"cnpj\" value=\"" +
    marko_escapeXmlAttr(data.empresa.cnpj) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"ie\">IE:</label><input disabled type=\"ie\" id=\"ie\" name=\"ie\" value=\"" +
    marko_escapeXmlAttr(data.empresa.ie) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"im\">IM:</label><input disabled type=\"im\" id=\"im\" name=\"im\" value=\"" +
    marko_escapeXmlAttr(data.empresa.im) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"cep\">CEP:</label><input disabled type=\"cep\" id=\"cep\" name=\"cep\" value=\"" +
    marko_escapeXmlAttr(data.empresa.cep) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"bairro\">Bairro:</label><input disabled type=\"bairro\" id=\"bairro\" name=\"bairro\" value=\"" +
    marko_escapeXmlAttr(data.empresa.bairro) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"cidade\">Cidade:</label><input disabled type=\"cidade\" id=\"cidade\" name=\"cidade\" value=\"" +
    marko_escapeXmlAttr(data.empresa.cidade) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"endereco\">Endereço:</label><input disabled type=\"endereco\" id=\"endereco\" name=\"endereco\" value=\"" +
    marko_escapeXmlAttr(data.empresa.endereco) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"telefone1\">Telefone principal:</label><input disabled type=\"telefone1\" id=\"telefone1\" name=\"telefone1\" value=\"" +
    marko_escapeXmlAttr(data.empresa.telefone1) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"telefone2\">Telefone Secundário:</label><input disabled type=\"telefone2\" id=\"telefone2\" name=\"telefone1\" value=\"" +
    marko_escapeXmlAttr(data.empresa.telefone2) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"email\">Email:</label><input disabled type=\"email\" id=\"email\" name=\"email\" value=\"" +
    marko_escapeXmlAttr(data.empresa.email) +
    "\" class=\"form-control\"></div><br><input type=\"submit\" value=\"Editar\" onclick=\"window.location='/empresas/form/" +
    marko_escapeXmlAttr(data.empresa.id) +
    "';\"> </div></main><footer class=\"rodape\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/logo-rodape.png\" class=\"logo-rodape\"></h1></div><div class=\"col-8\"><ul class=\"redesSociais\"><li><a href=\"https://www.facebook.com/huntercofanpage/\" class=\"compartilhar-facebook\" target=\"_blank\">/HunterCoFanPage</a></li><li><a href=\"https://www.linkedin.com/company/hunterco/\" class=\"compartilhar-linkedin\" target=\"_blank\">/HunterCo</a></li></ul></div></div></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "69");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/pedidosbouthin$1.0.0/src/app/views/empresas/lista/view.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
