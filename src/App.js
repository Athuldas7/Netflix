
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar/>
        
      </header>

      <Banner fetchUrl={requests.fetchActionMovies}/> 
      <Row isLargeRow={true} title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Netflix Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="Netflix Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Netflix Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Netflix Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Netflix Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Netflix Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Netflix Documantries" fetchUrl={requests.fetchDocumentaries}/>
      



    </div>
  );
}

export default App;
