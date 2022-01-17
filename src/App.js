import React from 'react';
import Header from './layout/Header';
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import Home from './Home';
import NewSupplier from './suppliers/NewSupplier';
import InfoSupplier from './suppliers/InfoSupplier';
import Missing from './Missing';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from './api/suppliers';
import LoginPage from './auth0/LoginPage';
import PrivateRoute from './auth0/private-route';
import Loading from './auth0/components/loading';
import { useAuth0} from '@auth0/auth0-react';
import Profile from './auth0/profile';

function App() {

  const { isLoading } = useAuth0();
  const [suppliers, setSuppliers] = useState([]);
  const [supplierName, setSupplierName] = useState('');
  const [supplierEmail, setSupplierEmail] = useState('');
  const [supplierPhoneNumber, setSupplierPhoneNumber] = useState('');
  const [supplierCountry, setSupplierCountry] = useState('');
  const [supplierPlace, setSupplierPlace] = useState('');
  const [supplierPostalCode, setSupplierPostalCode] = useState('');
  const [supplierHouseNumber, setSupplierHouseNumber] = useState('');
  const [supplierKVKnumber, setSupplierKVKnumber] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const repsonse = await api.get('/suppliers');
        setSuppliers(repsonse.data);
      }catch(err){
        if(err.repsonse){
          console.log(err.repsonse.data);
          console.log(err.repsonse.status);
          console.log(err.repsonse.headers);
        }else{
          console.log(`Error: ${err.message}`)
        }
      }
    }

    fetchSuppliers();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSupplier = { 
      name: supplierName,
      email: supplierEmail, 
      phoneNumber: supplierPhoneNumber,
      country: supplierCountry,
      place: supplierPlace,
      postalCode: supplierPostalCode,
      houseNumber: supplierHouseNumber,
      KVKnumber: supplierKVKnumber
    }
    try{
      const response = await api.post('/suppliers', newSupplier);
      const allSuppliers = [...suppliers, newSupplier];
      setSuppliers(allSuppliers)
      setSupplierName('');
      setSupplierEmail('');
      setSupplierPhoneNumber('');
      setSupplierCountry('');
      setSupplierPlace('');
      setSupplierPostalCode('');
      setSupplierHouseNumber('');
      setSupplierKVKnumber('');
      history.pushState('/'); 
    }catch(err){
      console.log(`Error: ${err.message}`)
    }
  }
  if(isLoading) {
    return <Loading />
  }else{
    return (
      <div className="App d-flex flex-column">
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/suppliers/create">
            <NewSupplier
              handleSubmit={handleSubmit}
              supplierName = {supplierName}
              setSupplierName = {setSupplierName}
              supplierEmail = {supplierEmail} 
              setSupplierEmail = {setSupplierEmail}
              supplierPhoneNumber = {supplierPhoneNumber}
              setSupplierPhoneNumber = {setSupplierPhoneNumber}
              supplierCountry = {supplierCountry}
              setSupplierCountry = {setSupplierCountry}
              supplierPlace = {supplierPlace}
              setSupplierPlace = {setSupplierPlace}
              supplierPostalCode = {supplierPostalCode}
              setSupplierPostalCode = {setSupplierPostalCode}
              supplierHouseNumber = {supplierHouseNumber}
              setSupplierHouseNumber = {setSupplierHouseNumber}
              supplierKVKnumber = {supplierKVKnumber}
              setSupplierKVKnumber = {setSupplierKVKnumber}
            />
          </Route>
          <PrivateRoute path="/suppliers/:id" component={InfoSupplier} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="*" component={Missing} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
