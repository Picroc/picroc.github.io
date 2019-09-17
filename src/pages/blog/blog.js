import createMenu from "../../components/menu/menu";

const menu = createMenu(['Main', 'Blog'], 'menu');
document.body.appendChild(menu);

console.log('on blog page');