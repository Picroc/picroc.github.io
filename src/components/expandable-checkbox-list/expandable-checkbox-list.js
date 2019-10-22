import './expandable-checkbox-list.scss';

window.expandCheckboxList = id => {
    const element = $(`#${id} .expandable-checkbox-list`);
    if (element.hasClass('expandable-checkbox-list_expanded')) {
        element.removeClass('expandable-checkbox-list_expanded');
        $(`#${id} .expandable-checkbox-list__title i`).text('expand_more')
    } else {
        element.addClass('expandable-checkbox-list_expanded');
        $(`#${id} .expandable-checkbox-list__title i`).text('expand_less')
    }
}