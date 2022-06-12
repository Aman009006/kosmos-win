export const infintyKm = () => {

    const infintySectionBody = document.querySelector('.infinty-section__body');

    const tagKm = document.querySelector('.infinty-body__num-km');

    infintySectionBody.addEventListener('scroll', () => {
        tagKm.textContent = (infintySectionBody.scrollLeft * 3473).toLocaleString('ru');
    })
}