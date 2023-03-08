// import logo from './logo.svg';
import './App.css';
// import Form from './Form';
import Create from './Create';
import Table from './Table';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './Update';

function App() {
  return (
    // <div className="App">
    //   {/* <Form/> */}
    //   {/* Hi */}
    //   <Create />
    //   <Table />
    // </div>

    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Create/>}></Route>
            <Route path="/Table" element={<Table/>}></Route>
            <Route path="/Update/:id" element={<Update/>}></Route>
          </Routes>
            </div>
      </BrowserRouter>
  );
}

export default App;
