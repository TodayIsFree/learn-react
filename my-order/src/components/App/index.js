import React ,{ Component}from 'react';
import OrderList from '../OrderList';
import Header from '../Header';
import './style.css';

class App extends Component {
  render(){
    return (
      <div>
          <Header />
          <OrderList />
      </div>
    );
  }
  
}

export default App;
