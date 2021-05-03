'use strict';

console.log('App.js is running!!');

//JSX Javascript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Put you hands in the life of you computer '
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        app.title,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' ',
        app.subtitle
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

var user = {
    name: 'Baibhav',
    age: 24,
    location: 'Madhyapur Thimi'
};
var userName = 'Singh';
var userAge = 24;
var userLocation = 'Thimi';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        user.name,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' Age: ',
        user.age,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' Location: ',
        user.location
    )
);
var appRoot = document.getElementById('app');
//var appRootTwo = document.getElementById('appTwo');

ReactDOM.render(template, appRoot);
//ReactDOM.render(templateTwo, appRootTwo);
