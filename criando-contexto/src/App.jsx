import {useContext} from 'react'
import{UsuarioContext} from './context/UsuarioContext'
import Item from './components/Item'
import './App.css'

function App(){
  const usuario = useContext (UsuarioContext)

  return (
    <UsuarioContext.Provider value={usuario}>
      <Item />
    </UsuarioContext.Provider>
  )
}

export default App
