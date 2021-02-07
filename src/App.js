import 'bootstrap/dist/css/bootstrap.min.css';

import StockRow from './components/StockRow'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-md-5 mt-5">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
