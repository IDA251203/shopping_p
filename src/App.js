import "bootstrap/dist/css/bootstrap.min.css";
import AuthUser from './components/AuthUser';
import Guest from './navbar/guest';
import Auth from './navbar/auth';
// import Dashboard from "./components/dashboard";

function App() {
  const {getToken} = AuthUser();
  if(!getToken()){
    return <Guest />
  }
  return (
      <Auth />
  );
}

export default App;
