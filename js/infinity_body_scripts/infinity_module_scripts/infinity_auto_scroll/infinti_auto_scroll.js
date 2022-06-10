export const infinity_auto_scroll = () => {
    const planets = document.querySelectorAll('.block-planets');
    const navbar = document.querySelector('.infinty-body__nav-list');
    const sectionInfinite = document.querySelector('.infinty-section');

    console.log(sectionInfinite.style.width);
    sectionInfinite.style.width = `${sectionInfinite.innerWidht + 500}px`

    navbar.addEventListener('click', (e) => {
        planets.forEach(elem => {
            // console.log(e.target.classList, elem.dataset.planet);
            if(e.target.classList.contains(elem.dataset.planet)){
                sectionInfinite.scrollLeft = (elem.offsetLeft - 200);
                // console.log(sectionInfinite.scrollLeft, elem.offsetLeft);
            }
        })
        
    })

}