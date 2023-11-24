import { StyleSheet} from 'react-native';
import TestComponent from "./features/Test/TestComponent";
import {Provider} from "react-redux";
import {store} from "./store";

export default function App() {
  return (
      <Provider store={store}>
        <TestComponent />
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
