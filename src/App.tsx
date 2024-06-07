import { useState } from 'react'
import Modal from 'react-modal'
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { ListTarefas } from "./components/ListTarefas"
import { CustomModal } from './components/CustomModal'
import { TarefasProvider } from './contexts/tarefaContext'
import Login from './components/Login'


Modal.setAppElement('#root')

function App() {
//npm install styled-components

    const [ isVisibleModal, setIsVisibleModal ] = useState(false);
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);

    function abrirModal() {
        setIsVisibleModal(true)
    }

    function fecharModal() {
        setIsVisibleModal(false)
    }

  return (
    <>
    <GlobalStyle />
        {isAuthenticated ? (
            <TarefasProvider>
            <Header
                abrirModal={abrirModal}
            />

            <ListTarefas
                abrirModal={abrirModal}
            />

            <CustomModal
                modalVisible={isVisibleModal}
                fecharModal={fecharModal}
            />
            </TarefasProvider>
        ) : (
            <Login onLogin={setIsAuthenticated} />
        )}

    </>
  )
}

export default App
