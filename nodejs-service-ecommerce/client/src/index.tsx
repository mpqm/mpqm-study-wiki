import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Stroe from './redux/store';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Stroe}>
    <App />
  </Provider>,
);

reportWebVitals();
