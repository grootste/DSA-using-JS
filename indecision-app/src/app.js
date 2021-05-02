console.log('App.js is running!!')

//JSX Javascript XML

var template =(
<div> 
    <h1> Indecision App  </h1> 
    <p> This some information</p>
    <ol>
        <li> Items one </li>
        <li> Items two</li>
    </ol> 
</div>
);
var user = {
    name: 'Baibhav',
    age : 24,
    location : 'Madhyapur Thimi'
}
var userName = 'Singh';
var userAge = 24;
var userLocation = 'Thimi'
var templateTwo = (
    <div>
        <h1> {user.name} </h1>
        <p> Age: {user.age} </p>
        <p> Location: {user.location}</p>
    </div>
);
//var appRoot = document.getElementById('app');
var appRootTwo = document.getElementById('appTwo');

//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);


