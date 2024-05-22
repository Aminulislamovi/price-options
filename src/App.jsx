
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/NavBar/priceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {

  return (
    <>
     <NavBar></NavBar>
     {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-400' >Vite + React</h1>
  <PriceOptions></PriceOptions>


      
    </>
  )
}

export default App
