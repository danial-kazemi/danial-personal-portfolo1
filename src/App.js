import './App.scss';
import Layout from './components/Layout/index';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>

    </>
  );
}

export default App;
