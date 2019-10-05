import './like-button.scss';

window.onLikeClick = id => {
    const el = $('#' + id);
    if (el.hasClass('liked')) {
        el.removeClass('liked');
    } else {
        el.addClass('liked');
    }
}