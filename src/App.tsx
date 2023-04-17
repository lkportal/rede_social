import LoginUser from "./components/Users Create and login/LoginUser";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { CreateUsers } from "./components/Users Create and login/CreateUsers";
import { ConteinerLink,LinkStyle } from "./AppStyle";
function App() {
  return (
    <div>
      

     
      <BrowserRouter>
      <ConteinerLink>
      <Link to='/'>Inicio</Link>
      <Link to='create'>Cadastra</Link>
      <Link to='login'>Login</Link>
      </ConteinerLink>
      <Routes>
        <Route path="/login" element={<LoginUser></LoginUser>}/>
        <Route path="/create" element={<CreateUsers></CreateUsers>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
