import { Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./components/Navbar"
import Coin from "./Pages/Coin"
import CoinList from "./Pages/CoinList"
import Blog from "./Pages/Blog"
import Exchange from "./Pages/Exchange"
function App() {
 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/coins/:coinId" element={<Coin/>}/>
        <Route path="/coinslist" element={<CoinList/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/exchange" element ={<Exchange/>}/>
      </Routes>
    </div>

  )
}

export default App
