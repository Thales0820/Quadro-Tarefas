import { Container } from "./styles"

interface PropsHeader {
    abrirModal: () => void;
}

export const Header = (props: PropsHeader) => {
    return(
        <Container>
            <h1>Atrellados</h1>
            <div>
                <button
                    type="button"
                    onClick={props.abrirModal}
                >
                    Nova Tarefa
                </button>
            </div>
        </Container>
    )
}
