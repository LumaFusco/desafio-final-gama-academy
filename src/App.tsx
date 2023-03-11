import './App.css'
import Routes from './Routes'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  )
}

export default App
