let dm = localStorage.getItem('darkmode');
const themeBtn = document.getElementById('theme-switch');

const enableDM = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDM = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'none');
}

if (dm === 'active') enableDM();

themeBtn.addEventListener('click', () => {
    dm = localStorage.getItem('darkmode');
    dm !== 'active' ? enableDM() : disableDM();
});