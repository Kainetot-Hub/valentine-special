 window.addEventListener('load', function () {
            const loader = document.getElementById('loading-screen');
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.opacity = 'none';
                }, 500);
            }, 2500);
        });

function goToAcceptedPage() {
    // 1. Swaps active screens
    document.getElementById('page-ask').classList.remove('active');
    document.getElementById('page-accepted').classList.add('active');

    // 2. Play music assets
    const music = document.getElementById('bg-music');
    if (music) { music.play().catch(e => console.log(e)); }

    // 3. Kickoff paragraph triggers
    const lines = document.querySelectorAll('.typing-h6');
    lines.forEach(line => line.classList.add('start-typing'));

    // 4. TRIGER IMAGE APPEARANCE
    setTimeout(() => {
        const image = document.getElementById('lip-bite-img');
        if (image) {
            image.classList.add('fade-in');
        }
    }, 2000); // Fades into place precisely 2 seconds after page swap
}

function allowMusic() {
    sessionStorage.setItem('playMusic', 'true');
}

window.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('playMusic') === 'true') {
        const audio = document.getElementById('bg-music');

        audio.play().catch(error => {
            console.log("Autoplay was prevented by the browser configuration:", error);
        });

function allowMusic() {
    sessionStorage.setItem('playMusic', 'true');
}

window.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('playMusic') === 'true') {
        const audio = document.getElementById('bg-music');
        
        if (audio) {
            audio.play().catch(error => {
                console.log("Autoplay blocked by browser. Click anywhere on the page to play.", error);

                document.addEventListener('click', () => {
                    audio.play();
                }, { once: true });
            });
        }
        sessionStorage.removeItem('playMusic');
    }
});
        sessionStorage.removeItem('playMusic');
    }
});

window.onload = function() {
    setTimeout(() => {
        const paragraph = document.querySelector('h6');
        if (paragraph) {
            paragraph.classList.add('start-typing');
        }
    }, 2500);
};

const paragraphs = document.querySelectorAll('.typing-h6');
paragraphs.forEach(p => {
    p.classList.add('start-typing');
});