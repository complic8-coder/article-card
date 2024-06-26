const shareBtn = document.querySelector('.btn--share');
const shareIcon = document.querySelector('.share-icon path')
const shareContent = document.querySelector('.share__content');

shareBtn.addEventListener("click", () => {
    if (shareContent.style.display === "none") {
        shareContent.style.display = "flex";

        shareBtn.style.background = "hsl(217, 19%, 35%)";
        shareIcon.setAttribute('fill', 'hsl(210, 46%, 95%)');
    } else {
        shareContent.style.display = "none";

        shareBtn.style.background = "hsl(210, 46%, 95%)";
        shareIcon.setAttribute('fill', '#6E8098');
    }
});
