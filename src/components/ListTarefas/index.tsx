import { useContext } from 'react';
import { Container, Horizontal } from "./styles";
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
        <Horizontal>
        <Container>
        <ul>
                <h3>PRODUCT BACKLOG</h3>
                {
                    tarefas.filter((tarefa) => tarefa.quadro === "productB").map((tarefa, index) => {
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
                <h3>SPRINT BACKLOG</h3>
                {
                    tarefas.filter((tarefa) => tarefa.quadro === "sprintB").map((tarefa, index) => {
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
                <h3>CODE REVIEW</h3>
                    {
                    tarefas.filter((tarefa) => tarefa.quadro === "codeR").map((tarefa, index) => (
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
                <h3>TEST</h3>
                    {
                        tarefas.filter((tarefa) => tarefa.quadro === "test").map((tarefa, index) => (
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
                                            >Editar
                                        </button>
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
                                        >Editar
                                    </button>
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
            <ul>
                <h3>ACCEPT</h3>
                    {
                        tarefas.filter((tarefa) => tarefa.quadro === "accept").map((tarefa, index) => (
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
                                        >Editar
                                    </button>
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
        </Horizontal>
        </>
    )
}
