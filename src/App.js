import React from 'react';
import './App.css';
import axios from 'axios';
import Movie from './Movies';

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

  getMovies = async () => {
      // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json") 
      // console.log(movies.data.data.movies) // ES6스럽지않은 방식. 하단 방식으로 개선 
      const { 
        data: { 
          data: { movies }  
        } 
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
      //console.log(movies);
      this.setState({ movies , isLoading: false}); // movies: movies 
  };

  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 3000);
      this.getMovies();
  } 

  render(){
    const { isLoading, movies }  = this.state;
    return <div>{ isLoading ? "Loading.." : movies.map(movie => {
      return <Movie key={ movie.id } id={ movie.id } year={ movie.year } title={ movie.title } summary={ movie.summary } poster={ movie.poster }/>
    })}</div>
  }
}

export default App;
