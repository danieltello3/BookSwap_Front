
export function openForm(sessiontoken,monto) {
  window?.VisanetCheckout.configure({
    method:'POST',
    sessiontoken: sessiontoken,
    channel: "web",
    merchantid: "456879852",
    purchasenumber: "20232",
    amount: monto,
    expirationminutes: "20",
    timeouturl: "about:blank",
    merchantlogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFWMbdv3hQNxS0LnJaj2hz2OSlZ_TUM7qkg&usqp=CAU',
    merchantname: "BookSwap",
    formbuttoncolor: "#000000",
    action: "http://localhost:3001/",
    complete: function (params) {
      console.log(params)
      alert(JSON.stringify(params));
    }
  });
  window?.VisanetCheckout.open();
}
