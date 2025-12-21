import React from 'react'
import Stack from './Components/Routing/Stack'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Stack/>
      </AuthProvider>
    </div>
  )
}

export default App
