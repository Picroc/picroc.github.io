import './checkbox-button.scss';
import { strict } from 'assert';

window.onCheckboxClick = id => {
    if( $(id).hasClass('checked') ) {
        $(id).removeClass('checked');
        $(id).children().removeClass('checked');
    } else {
        $(id).addClass('checked');
        $(id).children().addClass('checked');
    }
}