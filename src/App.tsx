import './App.css'
import Routes from './Routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes />
        <ToastContainer autoClose={3000}/>
      </AuthProvider>
    </div>
  )
}

export default App
