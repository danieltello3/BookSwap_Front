import logo from "../assets/imgs/Logo.png";
export function openForm(sessiontoken) {
  window?.VisanetCheckout.configure({
    sessiontoken: sessiontoken,
    channel: "web",
    merchantid: "456879852",
    purchasenumber: 2020100901,
    amount: 10.5,
    expirationminutes: "20",
    timeouturl: "about:blank",
    merchantlogo: '../assets/imgs/Logo.png',
    formbuttoncolor: "#000000",
    action: "paginaRespuesta",
    complete: function (params) {
      alert(JSON.stringify(params));
    }
  });
  window?.VisanetCheckout.open();
}
