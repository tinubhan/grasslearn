import { Provider } from "react-redux";
import { store } from "./store/store";
import { CounterComponent } from "./components/CounterComponent";
import { UserComponent } from "./components/UserComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="appclass">
        <CounterComponent/>
        <UserComponent/>
      </div>
    </Provider>
  );
}

export default App;
