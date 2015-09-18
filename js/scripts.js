// Scrambled email
var emaillink = document.querySelector('[myAttribute=my email]');
var email = 'me' + '@' + 'daviddarnes' + '.' + 'com';
emaillink.setAttribute('href', 'mailto:' + email);
