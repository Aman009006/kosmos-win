export const scrollHorizontally = () => {
    window.addEventListener('wheel', (e) => {
        // const infintySection = document.querySelector('.infinty-section');
        // infintySection.style.transform = 'translateX(0px)';

        // function getTranslateZ(obj){
        //     var style = obj.style,
        //         transform = style.transform || style.webkitTransform || style.mozTransform,
        //         zT = transform.match(/translateX\(([0-9]+(px|em|%|ex|ch|rem|vh|vw|vmin|vmax|mm|cm|in|pt|pc))\)/);
        //     return zT ? zT[1] : '0';
        // }

        // let infintySectionX = getTranslateZ(infintySection)

        // let evt = e.originalEvent ? e.originalEvent : e,
        // delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta

        // if(delta > 0){
        //     console.log('Скроллим вверх');
        //     infintySectionX += 10;
        //     infintySection.style.transform = `translateX(${infintySectionX}px)`
        // }
        // else{
        //     console.log('Скроллим dybp');
        //     infintySectionX -= 10;
        //     infintySection.style.transform = `translateX(${infintySectionX}px)`
        // }


        
    })
}