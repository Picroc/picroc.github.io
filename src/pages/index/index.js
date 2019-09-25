import createMenu from "../../components/menu/menu";
import './index.scss';

import '../../components/text-field/text-field';
import '../../components/drop-down/drop-down';

const menu = createMenu(['Main', 'Index'], 'menu');
document.body.appendChild(menu);

console.log('on index page');