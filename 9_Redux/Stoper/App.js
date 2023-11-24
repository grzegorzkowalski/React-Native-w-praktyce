import {Provider} from "react-redux";
import TestComponent from "./components/TestComponent";
import store from "./redux/store";

export default function App() {
  return (
      <Provider store={store} >
        <TestComponent />
      </Provider>
  );
}
