import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'state text'
    }
  }
  update( e ){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
      </div>
    )
  }
}

const Widget = (props) =>
  <input type="text" onChange={props.update}/>

export default App

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
//
// App.defaultProps = {
//   txt: "default text"
// }

// class App extends React.Component {
//   render(){
//     return (
//       <div>
//         <h1>{this.props.txt}</h1>
//         <b>Earth</b>
//       </div>
//     )
//   }
// }
