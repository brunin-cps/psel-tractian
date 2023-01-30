
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.scss"
import { HashRouter as Router } from "react-router-dom"
import AnimatedPage from './components/AnimatePage';


function App() {
  return (
    <Router basename='/'>
      <AnimatedPage />
    </Router>
  )
}


export default App;
