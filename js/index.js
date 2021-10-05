function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function equal() {
  var ere = document.form.textview.value;
  if (ere) {
    document.form.textview.value = eval(ere);
  }
}

function c() {
  document.form.textview.value = "";
}

function back() {
  var ere = document.form.textview.value;
  document.form.textview.value = ere.substring(0, ere.length - 1);
}
