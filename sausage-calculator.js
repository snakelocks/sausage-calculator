var MAX_PARTS = 30;
function calcForm() {
  var meatGm = document.getElementById('meatGm').value;
  if (isNaN(meatGm)) {
    return;
  }
  for (i=1; i<MAX_PARTS; i++) {
    var ppkElementId = 'ppk_' + i;
    var ppkElement = document.getElementById(ppkElementId);
    var formElementId = 'part_' + i;
    var formElement = document.getElementById(formElementId);
//  alert('ppkElement=' + ppkElement + ', formElement=' + formElement);
    if (ppkElement != null && formElement != null) {
      var gm = ppkElement.value;
      formElement.value = calcElement(gm, meatGm);
    }
  }
  calcCasing(meatGm);
}

function calcElement(gm, total) {
  var value = gm / 1000 * total;
  return round(value, 2);
}

function round(x, places) {
  return (Math.round(x * Math.pow(10,places))) / Math.pow(10, places)
}

var casingMetersPerKilo = {
  'sheep': 2.1,
  'hog': 1.8,
  'beef_runner': 1.0,
  'beef_middle': 1.0
}

function calcCasing(gm) {
  var casingSelectElement = document.getElementById('casing_select');
  var casingElement = document.getElementById('casing');
  if (casingSelectElement != null && casingElement != null) {
    var casingType = casingSelectElement.value;
    var casingLengthPerKilo = casingMetersPerKilo[casingType];
    if (isNaN(casingLengthPerKilo)) {
      casingElement.value = '';
    } else {
      var casingLength = casingLengthPerKilo * gm / 1000;
      casingElement.value = casingLength;
    }
  }
}

function clearForm() {
  document.getElementById('meatGm').value='';
  for (i=1; i<MAX_PARTS; i++) {
    var formElementId = 'part_' + i;
    var formElement = document.getElementById(formElementId);
    if (formElement != null) {
      formElement.value = '';
    }
  }

}
