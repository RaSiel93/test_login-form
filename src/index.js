import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import App from './component/App'
import './reset.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
