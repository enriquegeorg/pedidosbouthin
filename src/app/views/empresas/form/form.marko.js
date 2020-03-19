// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pedidosbouthin$1.0.0/src/app/views/empresas/form/form.marko",
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

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/huntercodesafio.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/logo-cabecalho.png\" alt=\"Hunter Co\" height=\"35px\" width=\"auto\"></h1></div><div class=\"cabecalhoPrincipal-navegacao col-8\"><a href=\"#\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Login</a></div></div></div></header><main class=\"conteudoPrincipal\"><div class=\"container\"><h1>Cadastro de Empresa</h1>");

  if (data.errosValidacao) {
    out.w("<div>");

    var for__20 = 0;

    marko_forEach(data.errosValidacao, function(erro) {
      var keyscope__21 = "[" + ((for__20++) + "]");

      out.w("<div class=\"alert alert-danger\">" +
        marko_escapeXml(erro.msg) +
        "</div>");
    });

    out.w("</div>");
  }

  out.w("<form action=\"/empresas/form\" method=\"post\">");

  if (data.empresa.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
      marko_escapeXmlAttr(data.empresa.id) +
      "\" class=\"form-control\"></div>");
  }

  out.w("<div class=\"form-group\"><label for=\"razaosocial\">Razão social:</label><input type=\"text\" id=\"razaosocial\" name=\"razaosocial\" value=\"" +
    marko_escapeXmlAttr(data.empresa.razaosocial) +
    "\" placeholder=\"coloque a razão social da empresa\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"nomefantasia\">Nome Fantasia:</label><input type=\"text\" id=\"nomefantasia\" name=\"nomefantasia\" value=\"" +
    marko_escapeXmlAttr(data.empresa.nomefantasia) +
    "\" placeholder=\"coloque o nome fantasia da empresa\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"cnpj\">CNPJ:</label><input type=\"text\" id=\"cnpj\" name=\"cnpj\" value=\"" +
    marko_escapeXmlAttr(data.empresa.cnpj) +
    "\" placeholder=\"coloque o cnpj\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"ie\">IE:</label><input type=\"text\" id=\"ie\" name=\"ie\" value=\"" +
    marko_escapeXmlAttr(data.empresa.ie) +
    "\" placeholder=\"coloque a inscrição estadual\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"im\">IM:</label><input type=\"text\" id=\"im\" name=\"im\" value=\"" +
    marko_escapeXmlAttr(data.empresa.im) +
    "\" placeholder=\"coloque a inscrição municial\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"cep\">CEP:</label><input type=\"text\" id=\"cep\" name=\"cep\" value=\"" +
    marko_escapeXmlAttr(data.empresa.cep) +
    "\" placeholder=\"coloque o cep\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"bairro\">Bairro:</label><input type=\"text\" id=\"bairro\" name=\"bairro\" value=\"" +
    marko_escapeXmlAttr(data.empresa.bairro) +
    "\" placeholder=\"coloque o bairro\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"cidade\">Cidade:</label><input type=\"text\" id=\"cidade\" name=\"cidade\" value=\"" +
    marko_escapeXmlAttr(data.empresa.cidade) +
    "\" placeholder=\"coloque a cidade\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"endereco\">Endereço:</label><input type=\"text\" id=\"endereco\" name=\"endereco\" value=\"" +
    marko_escapeXmlAttr(data.empresa.endereco) +
    "\" placeholder=\"coloque o endereço com numero\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"telefone1\">Telefone principal:</label><input type=\"text\" id=\"telefone1\" name=\"telefone1\" value=\"" +
    marko_escapeXmlAttr(data.empresa.telefone1) +
    "\" placeholder=\"(xx) xxxxx-xxxx\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"telefone2\">Telefone Secundário:</label><input type=\"text\" id=\"telefone2\" name=\"telefone1\" value=\"" +
    marko_escapeXmlAttr(data.empresa.telefone2) +
    "\" placeholder=\"(xx) xxxxx-xxxx\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"email\">Email:</label><input type=\"text\" id=\"email\" name=\"email\" value=\"" +
    marko_escapeXmlAttr(data.empresa.email) +
    "\" placeholder=\"coloque email para contato e nfe\" class=\"form-control\"></div><br><input type=\"submit\" value=\"Salvar\" class=\"btn btn-primary\"></form></div></main><footer class=\"rodape\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/estatico/imagens/logo-rodape.png\" class=\"logo-rodape\"></h1></div><div class=\"col-8\"><ul class=\"redesSociais\"><li><a href=\"https://www.facebook.com/huntercofanpage/\" class=\"compartilhar-facebook\" target=\"_blank\">/HunterCoFanPage</a></li></ul></div></div></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "75");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/pedidosbouthin$1.0.0/src/app/views/empresas/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
