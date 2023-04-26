"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initial = void 0;
const parsePairs_1 = require("../utils/parsePairs");
exports.initial = {
    emailConfirmation: ({ code, name }) => {
        var _a;
        return ({
            subject: 'Confirmação do seu cadastro',
            text: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Confirmação do seu cadastro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <style type="text/css">
          body {
            font-family: 'Open Sans', sans-serif;
            margin: 0px;
            width: 100vw;
            height: 100vh;
          }
          @media screen {
            @font-face {
              font-family: 'Source Sans Pro';
              font-style: normal;
              font-weight: 400;
              src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
            }
            @font-face {
              font-family: 'Source Sans Pro';
              font-style: normal;
              font-weight: 700;
              src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
            }
          }
          body,
          table,
          td,
          a {
            font-family: 'Open Sans', sans-serif;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
          table,
          td {
            mso-table-rspace: 0pt;
            mso-table-lspace: 0pt;
            background: white;
          }
          img {
            -ms-interpolation-mode: bicubic;
          }
          a[x-apple-data-detectors] {
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            color: inherit !important;
            text-decoration: none !important;
          }
          div[style*="margin: 16px 0;"] {
            margin: 0 !important;
          }
          body {
            width: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          table {
            border-collapse: collapse !important;
          }
          a {
            color: #1a82e2;
          }
          img {
            height: auto;
            line-height: 100%;
            text-decoration: none;
            border: 0;
            outline: none;
          }
        </style>
      
      </head>
      <body
        style="background-color: white;"
      >
        <h1
          class="preheader"
          style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;"
        >
          NOVO CADASTRO
        </h1>
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="100%"
        >
          <tr>
            <td
              align="center"
              bgcolor="white"
            >
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="left" valign="top">
                    <img
                      src="https://github.com/joeydoesntsharefood/public-assests/blob/main/Sem%20T%C3%ADtulo-2.png?raw=true"
                      alt="geometric" 
                      style="width: 250px; height: 300px !important;"
                    />
                  </td>
                  <td align="right" valign="center">
                    <img
                      src ="https://github.com/joeydoesntsharefood/public-assests/blob/main/Sem%20T%C3%ADtulo-3.png?raw=true"
                      alt="agriland-logo"
                      style="width: 250px;"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" bgcolor="#e9ecef">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0;">
                    <h1 style="color: #ffc904;margin: 0; font-size: 32px; font-weight: bold; letter-spacing: -1px; line-height: 48px;">NOVO CADASTRO</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" bgcolor="#e9ecef">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px; font-size: 16px; line-height: 24px;">
                    <p style="margin: 0; color: #707171; font-weight: bold;">SEJA BEM-VINDO(A), ${name}.</p>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="display: flex; flex-direction: column; gap: 5px; padding: 24px; font-size: 18px; line-height: 24px;">
                    <p style="margin: 0; color: #707171;">O futuro chegou e Agriland te convida a fazer parte dele.</p>
                  </td>
                  <td align="left" bgcolor="#ffffff" style="display: flex; flex-direction: column; gap: 5px; padding: 24px; font-size: 18px; line-height: 24px;">
                    <p style="margin: 0; color: #707171;">Para concluir a ação de cadastro, insira o código-chave abaixo no campo solicitado pela plataforma.</p>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="display: flex; gap: 45px; padding: 24px; font-size: 16px; line-height: 24px;">
                    ${(_a = (0, parsePairs_1.parsePairs)(code)) === null || _a === void 0 ? void 0 : _a.map(value => `<p class="code" style="font-weight: 600; color: #ffc904; font-size: 50px; margin-bottom: 20px; margin-right: 20px;">${value}</p>`).join(' ')}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 24px; font-size: 18px; line-height: 24px;">
                    <p style="margin: 0; font-weight: bold; color: #707171">*este código tem validade de 24 horas.</p>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px; font-size: 18px; line-height: 24px;">
                    <p style="margin: 0; color: #707171;">Confirme o envio e você já poderá explorar a aplicação.</p>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px; font-size: 25px; line-height: 24px; font-weight: bold; color: #707171;">
                    <p style="margin: 0;">NOS VEMOS EM AGRILAND!</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" bgcolor="#e9ecef" style="padding: 24px; border-top: 1px solid #707171;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                  <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-size: 14px; line-height: 20px; color: #666;">
                    <p style="margin: 0; text-align: left;">Está é uma mensagem automática.</p>
                    <p style="margin: 0; text-align: left"> <b>BrasilAgriland</b> não envia anexos, nem solicita envio de senhas ou informações cadastrais.</p>
                    <p style="margin: 0; text-align: left"> Precisa de ajuda? Entre em contato através do e-mail <b>contato@brasilagriland.com</b></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
        });
    },
    forgetPassword: ({ name, code }) => {
        var _a;
        return ({
            subject: 'Recuperação de senha',
            text: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Redifinição de senha.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <style type="text/css">
          body {
            font-family: 'Open Sans', sans-serif;
            width: 100vw;
            height: 100vh;
            margin: 0px;
          }
          @media screen {
            @font-face {
              font-family: 'Source Sans Pro';
              font-style: normal;
              font-weight: 400;
              src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
            }
            @font-face {
              font-family: 'Source Sans Pro';
              font-style: normal;
              font-weight: 700;
              src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
            }
          }
          body,
          table,
          td,
          a {
            -ms-text-size-adjust: 100%; /* 1 */
            -webkit-text-size-adjust: 100%; /* 2 */
          }
          table,
          td {
            mso-table-rspace: 0pt;
            mso-table-lspace: 0pt;
          }
          img {
            -ms-interpolation-mode: bicubic;
          }
          a[x-apple-data-detectors] {
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            color: inherit !important;
            text-decoration: none !important;
          }
          div[style*="margin: 16px 0;"] {
            margin: 0 !important;
          }
          body {
            width: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          table {
            border-collapse: collapse !important;
          }
          a {
            color: #1a82e2;
          }
          img {
            height: auto;
            line-height: 100%;
            text-decoration: none;
            border: 0;
            outline: none;
          }
        </style>
      
      </head>
      <body style="background-color: white">
        <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
          REDEFINIÇÃO DE SENHA
        </div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background: white;">
          <tr>
            <td align="center" bgcolor="white">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="left" valign="top">
                    <img
                      src="https://github.com/joeydoesntsharefood/public-assests/blob/main/Sem%20T%C3%ADtulo-2.png?raw=true"
                      alt="geometric" 
                      style="width: 250px; height: 300px !important;"
                    />
                  </td>
                  <td align="right" valign="center">
                    <img
                      src ="https://github.com/joeydoesntsharefood/public-assests/blob/main/Sem%20T%C3%ADtulo-3.png?raw=true"
                      alt="agriland-logo"
                      style="width: 250px;"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" bgcolor="white">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0;">
                    <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px; color: #febe00;">REDEFINIÇÃO DE SENHA</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" bgcolor="white">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px; font-size: 18px; line-height: 24px;">
                    <p style="margin: 0; color: #666;">Olá, ${name}!</p>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px; font-size: 18px; line-height: 24px;">
                    <p style="margin: 0; color: #666;">Recebemos a sua solicitação para redefinição de senha.</p>
                    <p style="margin: 0; color: #666;">Insira o código-chave abaixo no campo solicitado pela plataforma.</p>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="display: flex; gap: 45px; padding: 24px; font-size: 18px; line-height: 24px;">
                    ${(_a = (0, parsePairs_1.parsePairs)(code)) === null || _a === void 0 ? void 0 : _a.map(value => `<p class="code" style="font-weight: 600; color: #ffc904; font-size: 50px; margin-bottom: 20px; margin-right: 20px;">${value}</p>`).join(' ')}
                  </td>
                </tr>
                <tr>
                  <td bgcolor="#ffffff" style="padding: 24px; font-size: 18px; line-height: 24px;">
                    <p style="margin: 0; font-weight: bold; color: #707171">*este código tem validade de 15 minutos.</p>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px; font-size: 18px; line-height: 24px;">
                    <p style="margin: 0; color: #666;">Lembre-se: a nova senha deve conter mínimo de 8 caracteres, incluindo números, maiúsculas e símbolos.</p>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px; font-size: 18px; line-height: 24px;">
                    <p style="margin: 0; color: #666;">Se você não solicitou redefinição de senha, ignore este e-mail.</p>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px; font-size: 25px; line-height: 24px; font-weight: bold; color: #707171;">
                    <p style="margin: 0;">NOS VEMOS EM AGRILAND!</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" bgcolor="white" style="padding: 24px; border-top: 1px solid #707171;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                  <td align="center" bgcolor="white" style="padding: 12px 24px; font-size: 14px; line-height: 20px; color: #666;">
                    <p style="margin: 0; text-align: left;">Está é uma mensagem automática.</p>
                    <p style="margin: 0; text-align: left"> <b>BrasilAgriland</b> não envia anexos, nem solicita envio de senhas ou informações cadastrais.</p>
                    <p style="margin: 0; text-align: left"> Precisa de ajuda? Entre em contato através do e-mail <b>contato@brasilagriland.com</b></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `
        });
    },
    invite: ({ eventName, eventDate, eventHour, eventLocation }) => ({
        subject: 'Você foi convidado para um evento.',
        text: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <title>SAVE THE DATE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
          body {
            font-family: 'Open Sans', sans-serif;
            width: 100vw;
            height: 100vh;
            margin: 0px;
          }
          @media screen {
            @font-face {
              font-family: 'Source Sans Pro';
              font-style: normal;
              font-weight: 400;
              src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
            }
            @font-face {
              font-family: 'Source Sans Pro';
              font-style: normal;
              font-weight: 700;
              src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
            }
          }
          body,
          table,
          td,
          a {
            -ms-text-size-adjust: 100%; /* 1 */
            -webkit-text-size-adjust: 100%; /* 2 */
          }
          table,
          td {
            mso-table-rspace: 0pt;
            mso-table-lspace: 0pt;
          }
          img {
            -ms-interpolation-mode: bicubic;
          }
          a[x-apple-data-detectors] {
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            color: inherit !important;
            text-decoration: none !important;
          }
          div[style*="margin: 16px 0;"] {
            margin: 0 !important;
          }
          body {
            width: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          table {
            border-collapse: collapse !important;
          }
          a {
            color: #1a82e2;
          }
          img {
            height: auto;
            line-height: 100%;
            text-decoration: none;
            border: 0;
            outline: none;
          }
        </style>
      
      </head>
      <body style="background-color: white;">
        <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
          SAVE THE DATE
        </div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center" bgcolor="white">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="left" valign="top">
                    <img
                      src="https://github.com/joeydoesntsharefood/public-assests/blob/main/Sem%20T%C3%ADtulo-2.png?raw=true"
                      alt="geometric" 
                      style="width: 250px; height: 300px !important;"
                    />
                  </td>
                  <td align="right" valign="center">
                    <img
                      src ="https://github.com/joeydoesntsharefood/public-assests/blob/main/Sem%20T%C3%ADtulo-3.png?raw=true"
                      alt="agriland-logo"
                      style="width: 250px;"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" bgcolor="white">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0;">
                    <h1 style="color: #009289; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">SAVE THE DATE</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" bgcolor="white">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px;  font-size: 18px; line-height: 24px;">
                    <p style="margin: 0; font-weight: bold; color: #666;">OLÁ!</p>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px;  font-size: 18px; line-height: 24px;">
                    <p style="margin: 0; color: #666;">Você está convidado para um evento no <b>Metaverso Agriland.</b></p>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px;  font-size: 18px; line-height: 24px;">
                    <p style="margin: 0; color: #009289; font-size: 20px;">[ ${eventName} | ${eventDate} | ${eventHour} | ${eventLocation} ]</p>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px;  font-size: 18px; line-height: 24px;">
                    <p style="margin: 0; color: #666;">Esta é uma mensagem informativa, não requer confirmação. Configure seus compromissos acessando Menu > Agenda da aplicação.</p>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px;  font-size: 18px; line-height: 24px;">
                    <p style="margin: 0; font-weight: bold; color: #666;">Ainda não tem cadastro em Agriland?</p>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="left" bgcolor="" style="padding: 12px;">
                          <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td align="center" bgcolor="#009289" style="margin-top: 20px;width: 220px;height: 60px;border: 2px solid #009289;font-family: 'Lato', sans-serif;font-weight: 500;background: #009289;cursor: pointer;transition: all 0.3s ease;position: relative;display: inline-block; margin-left: 10px;">
                                <a href="http://brasilagriland.com/" target="_blank" style="line-height: 60px; display: inline-block; font-size: 16px; color: white; text-decoration: none; border-radius: 6px;">Cadastre-se</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px; font-size: 25px; line-height: 24px; font-weight: bold; color: #707171;">
                    <p style="margin: 0;">NOS VEMOS EM AGRILAND!</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" bgcolor="white" style="padding: 24px; border-top: 1px solid #707171;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                  <td align="center" bgcolor="white" style="padding: 12px 24px; font-size: 14px; line-height: 20px; color: #666;">
                    <p style="margin: 0; text-align: left;">Está é uma mensagem automática.</p>
                    <p style="margin: 0; text-align: left"> <b>BrasilAgriland</b> não envia anexos, nem solicita envio de senhas ou informações cadastrais.</p>
                    <p style="margin: 0; text-align: left"> Precisa de ajuda? Entre em contato através do e-mail <b>contato@brasilagriland.com</b></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    `
    })
};
