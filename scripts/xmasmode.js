let xm = localStorage.getItem('xmasmode');
const xmasBtn = document.getElementById('xmas-switch');

const enableXM = () => {
    document.body.classList.add('xmas-mode');
    localStorage.setItem('xmasmode', 'active');
    document.dispatchEvent(new CustomEvent('xmasModeChange', { 
        detail: { active: true }
    }));
}

const disableXM = () => {
    document.body.classList.remove('xmas-mode');
    localStorage.setItem('xmasmode', 'none');
    document.dispatchEvent(new CustomEvent('xmasModeChange', {
        detail: { active: false }
    }));
}

if (xm === 'active') {
    enableXM();
} else {
    disableXM();
}

xmasBtn.addEventListener('click', () => {
    xm = localStorage.getItem('xmasmode');
    xm !== 'active' ? enableXM() : disableXM();
    
    const xmasArrow = document.getElementById('xmas-arrow');
    if (xmasArrow) {
        xmasArrow.style.transition = 'opacity 0.5s ease-out';
        xmasArrow.style.opacity = '0';
        setTimeout(() => {
            xmasArrow.style.display = 'none';
        }, 500);
    }
});
