import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
    var element=document.createElement('div');
    var btn=document.createElement('button');

    element.innerHTML=_.join(['Hello','webpack'],' ');

    btn.innerHTML='CLICK';
    btn.onclick=printMe;
    element.appendChild(btn);

    element.setAttribute('id','header');
    return element;
}
document.body.appendChild(component());