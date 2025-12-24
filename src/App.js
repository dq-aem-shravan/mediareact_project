import React from 'react'
import Stack from './context/Stack'
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
