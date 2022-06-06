import MainComponent from "./components/MainComponent";
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import { store } from './store';


function App() {
  // console.log(store.getState())
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <MainComponent/>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
