import { useState } from 'react'
import Modal from 'react-modal'
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { ListTarefas } from "./components/ListTarefas"
import { CustomModal } from './components/CustomModal'
import { TarefasProvider } from './contexts/tarefaContext'

Modal.setAppElement('#root')

function App() {
//npm install styled-components

    const [ isVisibleModal, setIsVisibleModal ] = useState(false);

    function abrirModal() {
        setIsVisibleModal(true)
    }

    function fecharModal() {
        setIsVisibleModal(false)
    }

  return (
    <>
        <TarefasProvider>
        <GlobalStyle />
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
    </>
  )
}

export default App
