import './drop-down.scss';

window.dropDownClickHandler = id => {
    const el = $(id)
    el.hasClass('opened') ? el.removeClass('opened') : el.addClass('opened')
}