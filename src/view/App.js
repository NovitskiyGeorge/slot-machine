import { DisplaySlots } from "./components/DisplaySlots";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import mainReducer from "./components/redux/reducers/mainReducer";
import { ControlPanel } from "./components/ControlPanel";

import "./App.css";

const store = createStore(
  mainReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DisplaySlots></DisplaySlots>
        <ControlPanel></ControlPanel>
      </div>
    </Provider>
  );
}

export default App;
