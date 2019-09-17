export default function (arr, className) {
    const menu = document.createElement("ul");
    menu.className = className;
    let list_items = '';
    arr.forEach(element => {
        list_items += '<li>' + element + '</li>';
    });
    menu.innerHTML = list_items;
    return menu;
}