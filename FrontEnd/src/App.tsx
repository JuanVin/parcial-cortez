
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InstrumentList from './components/InstrumentList'
import InstrumentDetail from './components/InstrumentDetail';
import UpdateForm from './components/UpdateForm';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className='container' style={{ display: "flex", justifyContent: "center" }}>
        <Router>
          <Routes>
            <Route path="/" element={<InstrumentList />} />
            <Route path="/lista/:id" element={<InstrumentDetail />} />
            <Route path="/nuevo" element={<UpdateForm />} />
            <Route path="/actualizar/:id" element={<UpdateForm />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}


export default App;
