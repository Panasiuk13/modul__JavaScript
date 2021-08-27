// все формы

/*let forms = document.forms;
console.log(forms);

let loginForm = document.forms.login;
console.log(loginForm);

//контроллы

/*let formElemets = loginForm.elements;
console.log(formElemets.password);
*/

//Pолучение значений элемента формы

/*let nameFeddback = document.forms.feedback.name;

nameFeddback.value = "Leo";
console.log(nameFeddback.value);

/*let rememberLogin = document.forms.login.remember;
console.log(rememberLogin.checked);

rememberLogin.checked = true;*/

/*let fromFeedback = document.forms.feedback.from;
console.log(fromFeedback.value);

fromFeedback.value = 'russia';
console.log(fromFeedback.value);


let userLogin = document.forms.login.name;
userLogin.addEventListener('focus', function () {
  console.log('In focus');
});
userLogin.addEventListener('blur', function () {
    console.log('Out focus');
});


//focusIn / focusOut
//focus/ blur

loginForm.addEventListener('focusin', function () {
    console.log(this);
});


//input change

nameFeedback.addEventListener('change', function () {
    console.log(this.value);
});

let emailFeedback = document.forms.feedback.email;
emailFeedback.addEventListener('input', function () {
  console.log(this.value);
});*/

//регулярки
let str = 'i love javascript. i am front-end developer';


let regexpt = new RegExp(/Script/, 'i');

console.log(regexpt.test(str));
console.log(str.search(/love/i));
console.log(str.match(/a/));

//class simvolov
console.log(str.match(/\d/g));
console.log(str.match(/\s/g));
console.log(str.match(/\w/g));


console.log(str.match(/\i\b/gi));
console.log(str.match(/\i\B/gi));
console.log(str.match(/i^/gi));