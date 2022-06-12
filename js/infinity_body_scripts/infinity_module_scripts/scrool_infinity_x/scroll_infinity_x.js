import { stopBodyScroll } from "../infitity_utils/defFunc.js";

export const scrollHorizontally = () => {

    const infintySectionBody = document.querySelector('.infinty-section__body');
    const infintySection = document.querySelector('.infinty-section');
    const navWrapper = document.querySelector('.infinty-body__nav-wrapper');

    infintySectionBody.addEventListener('wheel', (e) => {
        stopBodyScroll(infintySectionBody, e)
        let evt   = e.originalEvent ? e.originalEvent : e;
        let delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta;

        if(delta > 0){
            if(infintySectionBody.scrollLeft > 0) {
                infintySectionBody.scrollLeft = infintySectionBody.scrollLeft -= 100;
            };
        }
        else{
            infintySectionBody.scrollLeft = infintySectionBody.scrollLeft += 100;
        }
    })

    infintySection.addEventListener('mousemove', (e) => {
        let scroll = document.documentElement.scrollTop;
        console.log(scroll + 50, infintySection.offsetTop);
        if(scroll + 15 >= infintySection.offsetTop){
            navWrapper.style.transform = 'translateX(-50%) translateY(0)';
        }
    })

    infintySection.addEventListener('mouseleave', () => {
        setTimeout(() => {
            navWrapper.style.transform = 'translateX(-50%) translateY(-120%)';
        }, 1000)
    })
}