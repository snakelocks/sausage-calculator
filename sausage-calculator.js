function calcForm() {
  var meatGm = document.getElementById('meatGm').value;
  for (i=1; i<30; i++) {
    var ppkElementId = 'ppk_' + i;
    var ppkElement = document.getElementById(ppkElementId);
    var formElementId = 'ingreedient_' + i;
    var formElement = document.getElementById(formElementId);
    if (ppkElement != null && formElementId != null) {
      var gm = ppkElement.value;
      formElement.value = calcElement(gm, meatGm);
    }
  }
}

function calcElement(gm, total) {
  var value = gm / 1000 * total;
  return round(value, 2);
}

function round(x, places) {
  return (Math.round(x * Math.pow(10,places))) / Math.pow(10, places)
}
