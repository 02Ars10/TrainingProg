
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import { observer } from 'mobx-react-lite';
import {Context} from './index'
import { useState, useEffect, useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import {check} from './http/userApi'
const App = observer(() => {
  const {user} = useContext(Context)
  const [loading,setloading] = useState(true)
  useEffect( () => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
      }).finally( () => setloading(false))
    }, [])
  }, 1000)
  if (loading) {
    return <Spinner animation={'grow'}/>
  }
 




  return (
    <>
    <BrowserRouter>
        <Header/>
	
				
				<AppRouter />
				
    
				<Footer/>
    </BrowserRouter>
   
    
    </>

  );
});
export default App;
