import { useNavigate } from "react-router-dom";
import { baseURL } from "../providers/Api";

export function openForm(sessiontoken,monto,nroOrden) {
  window?.VisanetCheckout.configure({
    method:'POST',
    sessiontoken: sessiontoken,
    channel: "web",
    merchantid: "456879852",
    purchasenumber: nroOrden,
    amount: monto,
    expirationminutes: "20",
    timeouturl: "about:blank",
    merchantlogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFWMbdv3hQNxS0LnJaj2hz2OSlZ_TUM7qkg&usqp=CAU',
    merchantname: "BookSwap",
    formbuttoncolor: "#000000",
    action: `${baseURL}pago/confirmacion/?monto=${monto}&orden=${nroOrden}`,
    complete: function (params) {
      console.log(params)
      window.location.href = "/";
      alert(JSON.stringify(params));
    }
  });
  window?.VisanetCheckout.open();
}
