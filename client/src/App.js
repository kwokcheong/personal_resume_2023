import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar.js';

function App() {
  return (
    <div>
      <div className="App">
        <NavigationBar />
        <div className="container" style={{ marginTop: '100px' }}>
          <div className="container" style={{ minHeight: '100vh' }}>
            <h1> Something </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
