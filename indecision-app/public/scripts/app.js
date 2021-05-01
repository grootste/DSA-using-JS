'use strict';

console.log('App.js is running!!');

//JSX Javascript XML

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Indecision App  '
    ),
    React.createElement(
        'p',
        null,
        ' This some information'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            ' Items one '
        ),
        React.createElement(
            'li',
            null,
            ' Items two'
        )
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
