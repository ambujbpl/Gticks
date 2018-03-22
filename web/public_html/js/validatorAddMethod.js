// Validation
$.validator.addMethod("onlyLatters", function(value) {
  return /^[a-zA-Z\s]+$/i.test(value)
});
$.validator.addMethod("emailformat", function(value) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value)
});
$.validator.addMethod("photoformat", function(value) {
  return (value).match(/\.(png)$/)
});
$.validator.addMethod("maxfilesize",function (value, element) {
        if (this.optional(element) || ! element.files || ! element.files[0]) {
            return true;
        } else {
            return element.files[0].size <= 200000;//not more then 200 KB
        }
});
$.validator.addMethod("validDate", function(value) {
  return moment(value,'DD-MM-YYYY',true).isValid()
});
$.validator.addMethod("pwcheckspechars", function(value) {
  return /[!@#$%^&*()_=\[\]{};':"\\|,.<>\/?+-]/.test(value)
});
$.validator.addMethod("pwchecknumber", function(value) {
  return /\d/.test(value) // has a digit
});
var number = /^[0-9]+$/;
var letters = /^[a-zA-Z\s]+$/;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// Validation
