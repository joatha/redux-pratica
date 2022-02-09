import React from "react";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import store from "./store";
import Video from "./components/Video";

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Video />
          <Sidebar />
        </Provider>
      </div>
    );
  }
}

export default App;
