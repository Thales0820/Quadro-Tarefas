import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

interface Tarefas {
    titulo: string;
    descricao: string;
    quadro: string;
}

interface TarefasWithId {
    id: string;
    titulo: string;
    descricao: string;
}

interface DataEditarTarefa {
    editar: boolean;
    tarefa: TarefasWithId | null;
}

interface PropsTarefaContext {
    tarefas: Array<TarefasWithId>;
    createTarefa: (tarefas: Tarefas) => Promise<void>;
    updateTarefa: (tarefas: TarefasWithId) => Promise<void>;
    deleteTarefa: (id: string) => Promise<void>;
    funEditarTarefa: (tarefas: DataEditarTarefa) => void;
    funSetTarefaDefault: () => void;
    editarTarefa: DataEditarTarefa;
}

export const TarefaContext = createContext(
    {} as PropsTarefaContext
)

interface PropsTarefaProvider {
    children: ReactNode
}

// export function TarefasProvider(props)
export function TarefasProvider({ children }: PropsTarefaProvider) {

    const [tarefas, setTarefas] = useState([])

    const [editarTarefa, setEditarTarefas] = useState<DataEditarTarefa>({editar: false, tarefa: null})

    useEffect(() => {
        axios.get('/api/tarefas').then((res) => {
            setTarefas(res.data.tarefas)
        })
    }, [])

    async function createTarefa(data: Tarefas) {

        const reposta = await axios.post('/api/tarefas', data)

        axios.get('/api/tarefas').then((res) => {
            setTarefas(res.data.tarefas)
        })
    }

    async function updateTarefa(data: TarefasWithId) {

        const reposta = await axios.put('/api/tarefas', data)

        axios.get('/api/tarefas').then((res) => {
            setTarefas(res.data.tarefas)
        })
    }
    async function deleteTarefa(id: string) {

        await axios.delete(`/api/tarefas/${id}`)

        axios.get('/api/tarefas').then((res) => {
            setTarefas(res.data.tarefas)
        })
    }

    function funSetTarefaDefault() {
        setEditarTarefas({editar: false, tarefa: null})
    }

    function funEditarTarefa(data: DataEditarTarefa) {
        setEditarTarefas(data);
    }

    return (
        <TarefaContext.Provider value={{ tarefas, createTarefa, editarTarefa, funEditarTarefa, funSetTarefaDefault, updateTarefa, deleteTarefa}}>
            {children}
        </TarefaContext.Provider>
    )
}
