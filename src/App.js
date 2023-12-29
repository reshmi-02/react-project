import { Provider } from "react-redux";
import Routing from "./component/routing.js";
import store from "./component/store.js";
function App() {
  return (
    <Provider store={store}>
      <Routing/>
    </Provider>
  );
}

export default App;
