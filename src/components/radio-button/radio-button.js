import './radio-button.scss';

window.onRadioClick = (id, group) => {
    $('.' + group).removeClass('selected');
    $(id).addClass('selected');
}