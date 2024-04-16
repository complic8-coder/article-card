const shareBtn = document.querySelector('.btn--share');
const shareIcon = document.querySelector('.share-icon path')
const shareContent = document.querySelector('.share__content');

shareBtn.addEventListener("click", () => {
    if (shareContent.style.opacity === "0") {
        shareContent.style.opacity = "1";

        shareBtn.style.background = "hsl(217, 19%, 35%)";
        shareIcon.setAttribute('fill', 'hsl(210, 46%, 95%)');
    } else {
        shareContent.style.opacity = "0";

        shareBtn.style.background = "hsl(210, 46%, 95%)";
        shareIcon.setAttribute('fill', '#6E8098');
    }
});