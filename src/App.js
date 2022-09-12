import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Box } from '@material-ui/core'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  console.log(Box)
  return (
    <>
      <Box width='400px'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
