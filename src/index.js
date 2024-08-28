import React from 'react';
import { createRoot } from 'react-dom/client';

import Menu from './component/Menu';
import MenuItem from './component/MenuItem';
 
const root = createRoot(document.getElementById('root'));
 
let menuItemWording = ['Like的發問', 'Like的回答', 'Like的文章', 'Like的留言'];
let menuItemArr = menuItemWording.map(wording => <MenuItem text={wording} />);
 
root.render(
    <Menu title={'Andy Chang的Like'}>{menuItemArr}</Menu>
);