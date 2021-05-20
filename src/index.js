import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ModalProvider} from 'react-simple-hook-modal';

const render = document.querySelector('#root');

ReactDOM.render(
<ModalProvider>
<App/>
</ModalProvider>
, render)