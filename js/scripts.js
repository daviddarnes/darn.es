// Scrambled email
var emaillink = document.querySelectorAll('[title=my email]');
var email = 'me' + '@' + 'daviddarnes' + '.' + 'com';
emaillink.setAttribute('href', 'mailto:' + email);
