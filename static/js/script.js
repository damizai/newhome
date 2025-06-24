const musicButtons = document.querySelectorAll('.music-btn');
const audios = {
    audio1: document.getElementById('audio1'),
    audio2: document.getElementById('audio2'),
    audio3: document.getElementById('audio3')
};

// 播放状态管理
let playingStates = {
    audio1: false,
    audio2: false,
    audio3: false
};

musicButtons.forEach(button => {
    button.addEventListener('click', () => {
        const audioId = button.dataset.audio;
        const audio = audios[audioId];

        if (playingStates[audioId]) {
            audio.pause();
            playingStates[audioId] = false;
            button.classList.remove('playing');
        } else {
            audio.play().catch(error => {
                console.log('自动播放被阻止，需要用户交互');
            });
            playingStates[audioId] = true;
            button.classList.add('playing');
        }
    });
});

// 首次点击解锁音频播放
document.addEventListener('click', () => {
    musicButtons.forEach(button => {
        const audioId = button.dataset.audio;
        const audio = audios[audioId];
        if (audio.paused) return;
        audio.play().catch(() => { });
    });
}, { once: true });

// 窗口resize时调整按钮容器宽度
window.addEventListener('resize', () => {
    const container = document.querySelector('.btn-container');
    const buttonWidth = container.querySelector('.music-btn').offsetWidth;
    const maxButtons = Math.floor(window.innerWidth / (buttonWidth + 20));
    container.style.maxWidth = `${maxButtons * (buttonWidth + 15) - 5}px`;
});
