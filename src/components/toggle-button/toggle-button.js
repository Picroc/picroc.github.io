import './toggle-button.scss';

window.onToggleClick = id => {
    const el = $('#' + id);
    if (el.hasClass('toggled')) {
        el.removeClass('toggled');
    } else {
        el.addClass('toggled');
    }
}