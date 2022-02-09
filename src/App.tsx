import React from "react";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Sidebar />
        </Provider>
      </div>
    );
  }
}

export default App;
