// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航栏滚动效果
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // 向下滚动
        header.style.transform = 'translateY(-100%)';
    } else {
        // 向上滚动
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

// 添加页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
}); 