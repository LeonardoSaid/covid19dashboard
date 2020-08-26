//src/index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from './pages/App/App';

ReactDOM.render(
  <App />
  ,
  document.getElementById("root")
);

serviceWorker.unregister();