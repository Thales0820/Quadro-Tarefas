import { FormEvent, useState, useContext, useEffect } from 'react';
import Modal from 'react-modal'
import { FormContainer } from './style'
import { TarefaContext } from '../../contexts/tarefaContext';

interface PropsModal {
    modalVisible: boolean;
    fecharModal: () => void;
}

export function CustomModal(props: PropsModal) {

    const { createTarefa, editarTarefa, funSetTarefaDefault, updateTarefa } = useContext(TarefaContext);

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [quadro, setQuadro] = useState("Selecionar")

    useEffect(() => {
        if(editarTarefa.editar) {
            setTitulo(editarTarefa.tarefa?.titulo ? editarTarefa.tarefa?.titulo : '')
            setDescricao(editarTarefa.tarefa?.descricao ? editarTarefa.tarefa?.descricao : '')
        }
    }, [editarTarefa.editar])

    function limparModal() {
        setTitulo('')
        setDescricao('')
        funSetTarefaDefault();
        props.fecharModal();
    }

    function criarTarefa(event: FormEvent) {
        event.preventDefault();
            if (editarTarefa.editar && editarTarefa.tarefa) {

            let objTarefa = {
                ...editarTarefa.tarefa,
                titulo,
                descricao
            }
                updateTarefa(objTarefa)
            }
            else {
                createTarefa({
                    titulo: titulo,
                    descricao: descricao,
                    quadro: quadro,
                })
            }

        setTitulo('')
        setDescricao('')
        setQuadro("Selecionar")
        props.fecharModal()

    }

    return (
        <Modal
            isOpen={props.modalVisible}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            onRequestClose={limparModal}
        >
            <button

                type='button'
                className='react-modal-close'
                onClick={limparModal}
            >
                X
            </button>

            <FormContainer
                onSubmit={criarTarefa}
            >
                <h2>Cadastrar Tarefa</h2>
                <input
                    type="text"
                    placeholder='Título'
                    required
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                />
                <textarea
                    placeholder='Descriçao'
                    required
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                />
                <select
                    placeholder='Quadro'
                    className="select"
                    required
                    value={quadro}
                    onChange={(event) => setQuadro(event.target.value)}
                >
                    <option value="">Selecionar</option>
                    <option value="Quadro1">Quadro 1</option>
                    <option value="Quadro2">Quadro 2</option>
                    <option value="Quadro3">Quadro 3</option>
                    required
                </select>
                <button type='submit'>
                    Cadastrar
                </button>
            </FormContainer>

        </Modal>
    )
}
