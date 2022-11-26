const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegistrationInput(data) {
  let errors = {};
  console.log(data);

  data.email = !isEmpty(data.email) ? data.email : "";
  data.first_name = !isEmpty(data.first_name) ? data.first_name : "";
  data.last_name = !isEmpty(data.last_name) ? data.last_name : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.age = !isEmpty(data.age) ? data.age : null;
  data.password = !isEmpty(data.password) ? data.password : "";

  /*---------------   Input validation Starts ---------------*/


  if (!Validator.isAlpha(Validator.blacklist(data.first_name, " "))) {
    errors.first_name = "Name must contain only Alphabets";
  }

  if (Validator.isEmpty(data.first_name)) {
    errors.first_name = "Name field is required";
  }
  if (!Validator.isAlpha(Validator.blacklist(data.last_name, " "))) {
    errors.first_name = "Name must contain only Alphabets";
  }

  if (Validator.isEmpty(data.last_name)) {
    errors.first_name = "Name field is required";
  }
  
  if (!Validator.isInt(data.age + '')) {
    errors.phone = "Age field has non-integer input";
  }

  if (Validator.isEmpty(data.age + '')) {
    errors.phone = "Age field is required";
  }

  if (!Validator.isAlpha(Validator.blacklist(data.city, " "))) {
    errors.city = "City must contain only Alphabets";
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = "City field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Invalid Email Id";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }


  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  /*---------------   Input validation Ends ---------------*/

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
