import {createContext} from 'react'

// crie uma variável chamada de 'UsuarioContext' que seja atuibuída a 'createContext()'
export const UsuarioContext = createContext ({

    nome:'Patrícia',
    idade: 30,
    email:"patricia_vasques@estudante.sesisenai.org.br"

})