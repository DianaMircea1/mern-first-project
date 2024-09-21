import { Box , useColorModeValue} from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.200", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage/>} />
      </Routes>
    
    </Box>
  )
}

export default App
