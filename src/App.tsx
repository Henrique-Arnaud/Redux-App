import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Home } from './Pages/Home';
import { GlobalStyles } from './theme/globalStyle';
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <GlobalStyles />
          <Routes>
            <Route index element={
              <>
                <Header />
                <Home />
              </>
            } />
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
