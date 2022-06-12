export const infinity_auto_scroll = () => {
    const planets = document.querySelectorAll('.block-planets');
    const navbar = document.querySelector('.infinty-body__nav-list');
    const sectionInfinite = document.querySelector('.infinty-section__body');

    const planetsOffsetLeft = Array.from(planets).map(elem => elem.offsetLeft)

    navbar.addEventListener('click', (e) => {

        planets.forEach(elem => {
            if(e.target.classList.contains(elem.dataset.planet)){
                sectionInfinite.scrollLeft = elem.offsetLeft - 200;
            }
        })
        if(e.target.classList.contains('next')){
            const nextPlanet = planetsOffsetLeft.filter(v => v - 200 > sectionInfinite.scrollLeft);
            if(nextPlanet.length) sectionInfinite.scrollLeft = nextPlanet[0] - 200;
        }
        if(e.target.classList.contains('prev')){
            const prevPlanet = planetsOffsetLeft.filter(v => v - 200 < sectionInfinite.scrollLeft);
            if(prevPlanet.length) 
                sectionInfinite.scrollLeft = prevPlanet[prevPlanet.length - 1] - 200;
        }
        
    })

}