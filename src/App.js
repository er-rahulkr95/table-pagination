import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import Home2 from './pages/Home2';


function App() {
  return (
    <div>
      <Home/>
      <hr/>
      <h2>Alternate way in Home2 component under pages folder please review the code</h2>
      <Home2/>
    </div>
  );
}

export default App;
