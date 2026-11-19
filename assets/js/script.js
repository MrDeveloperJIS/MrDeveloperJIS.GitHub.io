(() => {
    const MIN_LOADING_MS = 1500;
    const TYPING_START_MS = 500;
    const IMAGE_TIMEOUT_MS = 8000;

    const card = document.querySelector('main');
    const typed = card.querySelector('.typed');
    const titles = [...card.querySelectorAll('.titles li')].map(li => li.textContent.trim());
    const images = [...card.querySelectorAll('.cover-pic img, .profile-pic img')];

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    const imageReady = img => img.complete
        ? Promise.resolve()
        : new Promise(resolve => {
            img.addEventListener('load', resolve, { once: true });
            img.addEventListener('error', resolve, { once: true });
        });

    function type(index = 0, length = 0, deleting = false) {
        const text = titles[index];
        length += deleting ? -1 : 1;
        typed.textContent = text.slice(0, length);

        let delay = deleting ? 50 : 100;
        if (!deleting && length === text.length) {
            deleting = true;
            delay = 3000;
        } else if (deleting && length === 0) {
            deleting = false;
            index = (index + 1) % titles.length;
            delay = 100;
        }
        setTimeout(type, delay, index, length, deleting);
    }

    const lightbox = document.querySelector('.lightbox');
    const frame = lightbox.querySelector('.lightbox-frame');
    const openBtn = card.querySelector('.profile-btn');

    openBtn.addEventListener('click', () => {
        if (card.classList.contains('loading')) return;
        lightbox.showModal();
    });

    lightbox.addEventListener('click', e => {
        if (!frame.contains(e.target)) lightbox.close();
    });

    Promise.all([
        Promise.race([Promise.all(images.map(imageReady)), wait(IMAGE_TIMEOUT_MS)]),
        wait(MIN_LOADING_MS),
    ]).then(() => {
        card.classList.remove('loading');
        card.classList.add('active-gradient');
        card.removeAttribute('aria-busy');

        if (titles.length) {
            typed.textContent = '';
            setTimeout(type, TYPING_START_MS);
        }
    });
})();