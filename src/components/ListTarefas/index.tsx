import { useContext } from 'react';
import { Container } from "./styles";
import { TarefaContext } from '../../contexts/tarefaContext';

interface PropsListTarefas {
    abrirModal: () => void;
}

export function ListTarefas(props: PropsListTarefas) {

    const { tarefas, funEditarTarefa, deleteTarefa } = useContext(TarefaContext)

    const handleDeleteTarefa = (id: string) => {
        deleteTarefa(id)
    }

    return(
        <>
        <Container>
            <ul>
                <h3>TO DO</h3>
                {
                    tarefas.filter((tarefa) => tarefa.quadro === "toDo").map((tarefa, index) => {
                        return (
                            <li key={index}>
                                <div>
                                    <h4>{tarefa.titulo}</h4>
                                    <p>{tarefa.descricao}</p>
                                    <button
                                        className='botaoEditar'
                                        type='button'
                                        onClick={() => {
                                            funEditarTarefa({editar: true, tarefa: tarefa})
                                            props.abrirModal();
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className='botaoExcluir'
                                        type='button'
                                        onClick={() => {handleDeleteTarefa(tarefa.id)}}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <ul>
                <h3>DOING</h3>
                    {
                    tarefas.filter((tarefa) => tarefa.quadro === "doing").map((tarefa, index) => (
                                <li key={index}>
                                    <div>
                                        <h4>{tarefa.titulo}</h4>
                                        <p>{tarefa.descricao}</p>
                                        <button
                                            className='botaoEditar'
                                            type='button'
                                            onClick={() => {
                                                funEditarTarefa({editar: true, tarefa: tarefa})
                                                props.abrirModal();
                                            }}
                                        >Editar</button>
                                        <button
                                            className='botaoExcluir'
                                            type='button'
                                            onClick={() => {
                                                handleDeleteTarefa(tarefa.id)
                                            }}
                                        >Excluir
                                        </button>
                                    </div>
                                </li>
                            ))}
            </ul>
            <ul>
                <h3>DONE</h3>
                        {
                            tarefas.filter((tarefa) => tarefa.quadro === "done").map((tarefa, index) => (
                                        <li key={index}>
                                            <div>
                                                <h4>{tarefa.titulo}</h4>
                                                <p>{tarefa.descricao}</p>
                                                <button
                                                    className='botaoEditar'
                                                    type='button'
                                                    onClick={() => {
                                                        funEditarTarefa({editar: true, tarefa: tarefa})
                                                        props.abrirModal();
                                                    }}
                                                >Editar</button>
                                                <button
                                                    className='botaoExcluir'
                                                    type='button'
                                                    onClick={() => {
                                                        handleDeleteTarefa(tarefa.id)
                                                    }}
                                                >Excluir
                                                </button>
                                            </div>
                                        </li>
                            ))
                        }
            </ul>
        </Container>
        </>
    )
}
