var React=require('react');
var ReactDOM=require('react-dom');


class App extends React.Component
{
    render(){
        return (
            <div>
                React desde cero!
            </div>
    
        );
    }
}

ReactDOM.render( <App/>, document.getElementById('root') );