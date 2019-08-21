import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { RemindersCalendar } from './pages';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';

//router added in case to add other pages
const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Route exact path="/" component={RemindersCalendar} />
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.any.isRequired
};

export default App;
