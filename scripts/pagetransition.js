document.addEventListener('DOMContentLoaded', function() {
    function transitionToPage(url) {
        const pageContent = document.querySelector('.page-content');
        
        if (pageContent) {
            pageContent.classList.remove('page-enter');
            pageContent.classList.add('page-leave');
            
            setTimeout(() => {
                window.location.href = url;
            }, 500); 
        } else {
            window.location.href = url;
        }
    }

    const returnHomeBtn = document.getElementById('return-home-btn');
    if (returnHomeBtn) {
        returnHomeBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            transitionToPage('./index.html');
        });
    }
    
    const navLinks = document.querySelectorAll('a[href^="./"], a[href^="../"]');
    navLinks.forEach(link => {
        if (link.id === 'return-home-btn') return;
        
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && (href.endsWith('.html') || href === './')) {
                e.preventDefault();
                transitionToPage(href);
            }
        });
    });
});