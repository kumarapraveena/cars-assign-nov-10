import logo from './logo.svg';
import './App.css';
import Component1 from './Components/Component1';
import Dashboard from './Components/Dashboard';
import Post from './Components/Post';
import { BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    // <div>
    // <Component1/>
    // </div>
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Component1/>}></Route>
      <Route path='/postview' element={<Dashboard/>}></Route>
      <Route path='/post' element={<Post/>}/>
    </Routes>
  </BrowserRouter>
    </>
    
  );
}

export default App;
