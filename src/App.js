import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

function App() {
  return (
    <Router basename="/portfolio">
    <div className="App">
      <div className="App-header">
        <Header/>
      </div>
      <div className="App-body">
        <Body />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
      
      </div>
      </Router>
  );
}

export default App;
