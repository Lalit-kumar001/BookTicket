import List from './component/basics/parent';
// import Movie from './component/basics/movie';
import {BrowserRouter,Routes,Route} from  "react-router-dom"
import Single from './component/basics/single';
function App() {
  
console.log('running')
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<List/>}/>
      <Route path="shows/:id" element={<Single/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
