// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';


// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import BadgeNew from './pages/BadgeNew'
import Badge from './pages/Badge'

const container = document.getElementById('app');

ReactDOM.render(<Badge/>, container);

