import { 
  BrowserRouter , 
  Route, 
  Routes
} from "react-router-dom"
import { RecoilRoot } from 'recoil' ; 

import { Dashboard } from "./pages/Dashboard"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Transfer } from "./pages/Transfer"

function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup /> } />
          <Route path="/signin" element={<Signin /> } />
          <Route path="/dashboard" element={<Dashboard /> } />
          <Route path="/transfer" element={<Transfer /> } />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
} 

export default App

