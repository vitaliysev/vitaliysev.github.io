document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.footer');
    const pageHeight = document.documentElement.scrollHeight;
    console.log(pageHeight);

    const stickyStart = window.innerHeight;
    console.log(stickyStart);
    window.addEventListener('scroll', function() {
       console.log(window.pageYOffset);
        if (window.pageYOffset >= stickyStart || window.pageYOffset * 2 >= pageHeight - 600) {
            navbar.style.display = 'flex';
        } else  {
            navbar.style.display = 'none';
        }
    })});