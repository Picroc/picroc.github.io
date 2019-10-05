import './rate-button.scss';

window.onRateClick = (id, idx) => {
    const el = $('#' + id);

    for (let i = 0; i < 5; i++) {
        el.children()[i].firstChild.textContent = i <= idx - 1 ? 'star' : 'star_border';
    }
    
}