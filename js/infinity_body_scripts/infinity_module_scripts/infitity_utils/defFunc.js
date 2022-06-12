export const stopBodyScroll = (tag, e) => {
    tag.scrollTop -= (e.wheelDeltaY || (e.originalEvent && (e.originalEvent.wheelDeltaY || e.originalEvent.wheelDelta)) || e.wheelDelta || 0);
    e.stopPropagation();
    e.preventDefault();
}