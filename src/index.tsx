//src/index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

import App from './pages/App';

ReactDOM.render(
          <Router>
              <App />
          </Router>
  ,
  document.getElementById("root")
);

serviceWorker.unregister();