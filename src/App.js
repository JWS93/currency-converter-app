import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import ConversionTable from './ConversionTable'
import CurrencyCalculator from './CurrencyCalculator'

function App () {
  return (
    <Router>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand" >
          <FontAwesomeIcon icon="fa-solid fa-money-bill-transfer" alt="" width="30" height="24" className="d-inline-block align-text-top" />
          Currency Converter
          </NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
