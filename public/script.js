let messagesRef = firebase.database().ref('messages');
//submit event
const contactForm = document.querySelector('#contactForm');
let submitForm = e => {
    e.preventDefault();
    let name = getVal('name'),
        email = getVal('email'),
        phone = getVal('phone'),
        message = getVal('message');
    saveMessages(name, email, phone, message);

    //show alert
    document.querySelector('.alert').style.display = 'block';

    //hide alert after a few seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
    //clear form
    contactForm.reset();
};

contactForm.addEventListener('submit', submitForm);

//get input values
const getVal = selector => document.getElementById(selector).value;

//save messages 
let saveMessages = (name, email, phone, message) => {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
}












/*
 *togles the mobile menu.
 */
const burguerMenu = document.querySelector('.burger-menu');
const navbarList = document.querySelector('.navbar__list');
burguerMenu.addEventListener('click', () => {
    if (navbarList.style.display === "block") {
        navbarList.style.display = "none";
    } else {
        navbarList.style.display = "block";
    }
});