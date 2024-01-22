import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Home} from './pages/Home';
import { Three_b } from './pages/Three_b';
import { Four_a } from './pages/Four_a';
import { Four_b } from './pages/Four_b';
import { Five_a } from './pages/Five_a';
import { Five_b } from './pages/Five_b';
import { Six_a } from './pages/Six_a';
import { Six_b } from './pages/Six_b';

const App =() =>{
  return(
    <BrowserRouter>
      <ul>

        <li><Link to= "/">Three_a</Link></li>
        <li><Link to= "/three_b">Three_b</Link></li>
        <li><Link to= "/four_a">Four_a</Link></li>
        <li><Link to= "/four_b">Four_b</Link></li>
        <li><Link to= "/five_a">Five_a</Link></li>
        <li><Link to= "/five_b">Five_b</Link></li>
        <li><Link to= "/six_a">Six_a</Link></li>
        <li><Link to= "/six_b">Six_b</Link></li>
        {/* <li><Link to= "/stored_procedure">Stored Procedure</Link></li> */}

      </ul>
      <Routes>

        <Route exact path='/' element = {<Home />}/>
        <Route path='/three_b' element={<Three_b />}/>
        <Route path='/four_a' element={<Four_a />}/>
        <Route path='/four_b' element={<Four_b />}/>
        <Route path='/five_a' element={<Five_a />}/>
        <Route path='/five_b' element={<Five_b />}/>
        <Route path='/six_a' element={<Six_a />}/>
        <Route path='/six_b' element={<Six_b />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;














// import './App.css';
// import "primeicons/primeicons.css"; 
// import "primereact/resources/primereact.min.css";
// import 'primeflex/primeflex.css';
// import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
// import InputTextDemo from './components/SearchBar';
// import DropdownDemo from './components/GenresDropdown';
// import SelectButtonDemo from './components/TypeSelectButton';
// import MovieCard from './components/MovieCard';
// import MenuDemo from './components/menu';
// import Persons from './pages/persons';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">

//       <header className="App-header">
//         <MenuDemo/>
//         <InputTextDemo/>
//       </header>

//       <div className = "App-filters">
//         <SelectButtonDemo/>
//         <DropdownDemo/>
//       </div>

//       <hr/>

//       <div className='App-cards'>
//         <MovieCard/>
//       </div>

//       <Router>
//         <Routes>
//           <Route path="/persons" element={<Persons />} />
//         </Routes>
//     </Router>


      

//     </div>

//   );
// }

// export default App;


// import React from 'react';
// import 'primeicons/primeicons.css'; 
// import 'primereact/resources/primereact.min.css';
// import 'primeflex/primeflex.css';
// import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
// import InputTextDemo from './components/SearchBar';
// import DropdownDemo from './components/GenresDropdown';
// import SelectButtonDemo from './components/TypeSelectButton';
// import MovieCard from './components/MovieCard';
// import MenuDemo from './components/menu';
// import Persons from './pages/persons';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <Routes>
//             <Route path="/" element={<MenuDemo />} />
//             <Route path="/" element={<InputTextDemo />} />
//           </Routes>
//         </header>

//         <div className="App-filters">
//           <Routes>
//             <Route path="/" element={<SelectButtonDemo />} />
//             <Route path="/" element={<DropdownDemo />} />
//           </Routes>
//         </div>

//         <hr/>

//         <div className='App-cards'>
//           <Routes>
//             <Route path="/" element={<MovieCard />} />
//           </Routes>
//         </div>

//         <Routes>
//           <Route path="/persons" element={<Persons />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

