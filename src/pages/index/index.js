import createMenu from "../../components/menu/menu";

const menu = createMenu(['Main', 'Index'], 'menu');
document.body.appendChild(menu);

console.log('on index page');