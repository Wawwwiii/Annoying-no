const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const IlikeyoutooBtn = document.querySelector('.i-like-you-too-btn');
const NoBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const NoBtnRect = NoBtn.getBoundingClientRect();

IlikeyoutooBtn.addEventListener('click', () => {
    question.innerHTML = 'Yeheyy!';
});

NoBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - NoBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - NoBtnRect.height)) + 1;

    NoBtn.style.left = i + 'px';
    NoBtn.style.top = j + 'px';
});