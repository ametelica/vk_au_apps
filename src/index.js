import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import App from './App';

connect.send('VKWebAppInit', {});
connect.subscribe((e) => console.log(e));


ReactDOM.render(<App />, document.getElementById('root'));