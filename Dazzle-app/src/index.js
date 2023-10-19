import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import userReducer  from './features/user';
import { BrowserRouter } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import signupReducer from './ReduxSlicers/SignUpSlicer';

import filtersliceReducer from './ReduxSlicers/FilterSlicer';

const store = configureStore({
  reducer:{
    user:userReducer,
    signup:signupReducer,
    filter:filtersliceReducer
  }

})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <BrowserRouter>
     <div className='maincontainer'>
     <App />
     </div>
     </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
