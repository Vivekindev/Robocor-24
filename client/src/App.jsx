import Home from './pages/home'
import Register1 from './pages/registerPages/register1'
import Register2 from './pages/registerPages/register2'
import Register3 from './pages/registerPages/register3'
import Register4 from './pages/registerPages/register4'
import Register5 from './pages/registerPages/register5'
import Register6 from './pages/registerPages/register6'
import Register7 from './pages/registerPages/register7'
import Register8 from './pages/registerPages/register8'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = ()=>{

    return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register/1' exact element={<Register1 />} />
        <Route path='/register/2' element={<Register2 />} />
        <Route path='/register/3' element={<Register3 />} />
        <Route path='/register/4' element={<Register4 />} />
        <Route path='/register/5' element={<Register5 />} />
        <Route path='/register/6' element={<Register6 />} />
        <Route path='/register/7' element={<Register7 />} />
        <Route path='/register/8' element={<Register8 />} />
      </Routes>
    </Router> 
    );
}

export default App;