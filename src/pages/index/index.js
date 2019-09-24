import createMenu from "../../components/menu/menu";
import './index.scss';

const menu = createMenu(['Main', 'Index'], 'menu');
document.body.appendChild(menu);

console.log('on index page');