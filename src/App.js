import Nav from './components/Nav';
import SearchResults from './components/SearchResults';
import { LoadingProvider } from './context/LoadingContext';
import { SearchProvider } from './context/SearchContext';

function App() {
  const query = []
  const results = []

  return (
    <div className="App">
      <div className=" bg-gray-800 min-h-screen">
        <SearchProvider>
          <LoadingProvider>
            <Nav />
            <SearchResults />
          </LoadingProvider>
        </SearchProvider>
      </div>
    </div>
  );
}

export default App;
