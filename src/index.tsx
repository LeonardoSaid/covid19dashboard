//src/index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer, { initialState } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './pages/App/App';

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

const ConnectedApp = () => (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));