import LoginUser from "./components/user_create/LoginUser";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { CreateUsers } from "./components/user_create/CreateUsers";
import { ConteinerLink } from "./AppStyle";
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
