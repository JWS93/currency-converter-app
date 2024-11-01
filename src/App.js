import {Routes, Route, Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import Home from './Home'


export default function App () {
  return (
    <div>
      <nav className="navbar navbar-primary bg-light navbar-expand-md">
        <div className="container-fluid">
          <h1 className="navbar-brand" >
            <FontAwesomeIcon icon={faMoneyBillTransfer} className="mx-3" />
            Currency Calculator
          </h1>
        </div>
      </nav>
      <Home />
    </div>
  );
}


