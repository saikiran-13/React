import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Learnings } from './Learnings'
import { Taskscheduler } from './Taskscheduler'
import { Quotes } from './Axios';
import { Navbar } from './Navbar';
import { createContext } from 'react';
import { Avengers, Name } from './Avengers';
import { Reactquery } from './ReactQuery';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Forms } from './Form'; 

export const Appcontext = createContext()
export const client = new QueryClient({defaultOptions:{queries:{
  refetchOnWindowFocus:false//Bydefault true means everytime switch tab u get new quote 
}

}})

export default function App() {
  // const [islearn,setLearn] = useState(false)
  // const  [istask,setTask] = useState(false)
  // const [isquote,setQuote] = useState(false)
  const [name, setName] = useState("Simform")

  return (
    <div className='App'>
      <QueryClientProvider client = {client}>
        <Appcontext.Provider value={{ name, setName }}>
          <center>
            {/* <button className='btn btn-pro' onClick={()=>(setTask(!istask))}><b>Task scheduler</b></button>{istask && <Taskscheduler/>}
    <button className='btn btn-pro' onClick={()=>(setLearn(!islearn))}><b>Learnings</b></button>{islearn && <Learnings/>}
    <button className='btn btn-pro' onClick={()=>(setQuote(!isquote))}><b>Pet Zone</b></button>{isquote&& <Quotes/>} */}
            <Router>
              <Navbar />
              <Routes>
                <Route path="/learn" element={<Learnings />} />
                <Route path="/tasks" element={<Taskscheduler />} />
                <Route path="/pets" element={<Quotes />} />
                <Route path="/avengers" element={<Name />} />
                <Route path="/reactquery" element={<Reactquery/>} />
                <Route path="/forms" element={<Forms/>} />
                <Route path="*" element={<h1>Something Went Wrong</h1>} />
              </Routes>
            </Router>
          </center>
        </Appcontext.Provider>
      </QueryClientProvider>

    </div>

  );
}


