import React from 'react'
import Counter from './components/Counter'
import ListView from './components/ListView'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
    <Counter/>
        <Toaster />
    </div>
  )
}

export default App