import SearchBar from './components/Search bar';
import Button from './components/Button';
import Gifs from './components/gifs/gifs';
import gif from './Data/GIFdata';
import './App.css';



function App() {
  return (
    <div className="App">
        <form>
        <label>Search GIFs</label>
        <div>
        <SearchBar></SearchBar>
        <Button onClick={() => alert("You searching")}/>
        <div className="gifss">         
          {gif.map(({id, title, webp, rating}) =>(
            rating === 'g' && <Gifs url={webp}  alt={title} key={id} rating={rating}/>
          ))}

        </div>
        </div>
        </form>
    </div>
  );
}

export default App;
