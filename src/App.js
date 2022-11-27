import './App.css';
import { Home } from './componentPages/home';
import { Contacts } from './componentPages/contacts';
import { Todos } from './componentPages/todos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([

{
  path:'/home',
  element: <Home/>

},

{
  path:'/contacts',
  element:<Contacts/>

},

{
  path:'/todos',
  element:<Todos/>
    
  }



])

function App() {
  return (
    <>
    <h2>Main page</h2>
    <div className="App">
      <RouterProvider router={router}>gggg</RouterProvider>
    </div>
    </>
  );
}

export default App;
