// <!-- Hide scrollbar -->

const setNavHeightVar = () => {
    const nav = document.getElementById('navbar');
    const navHeight = nav ? nav.offsetHeight : 120;
    document.documentElement.style.setProperty('--nav-h', `${navHeight}px`);
};
setNavHeightVar();
window.addEventListener('resize', setNavHeightVar);