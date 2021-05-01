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
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

