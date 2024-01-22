import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./App/redux/storeStates";
import router from "./App/routes";


function App() {
  return (
    <> 
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
