import {useContext} from 'react'
import {UsuarioContext} from '../context/UsuarioContext'

 function Item() {
const usuario = useContext(UsuarioContext)
    return(
        <div>
        <h1> O nome do usuário é {usuario.nome}</h1>
        <h2> A idade do usuário é {usuario.idade}</h2>
        <h3> O email do usuário é {usuario.email}</h3>
        </div>
    )
}

export default Item;