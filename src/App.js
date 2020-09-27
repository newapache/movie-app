import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//         <h1>ddd</h1>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }
  render(){
    const { isLoading }  = this.state;
    return <div>{ isLoading ? "isLoading is true" : "isLoading is false"}</div>
  }

}

export default App;
