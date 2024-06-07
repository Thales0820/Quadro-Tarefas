import styled from "styled-components";

export const Horizontal = styled.div`
    flex: 1;
    overflow-x: auto; /* Permite a rolagem horizontal */
    padding: 1rem;

    &::-webkit-scrollbar {
        width: 0px;
    }
`

export const Container = styled.div`
    display: flex;

    ul {
        width: 30rem;
        border-radius: 8px;
        margin: 5px;
        border: 2px solid var(--dark);
        background-color: var(--white);


        h3 {
            margin-top: 5px;
            margin-bottom: 5px;
            text-align: center;
            color: var(--orange);
            width: 300px;
            height: 30px;
        }

        li {
            padding: 1rem 2rem;
            color: var(--dark);
            background-color: #fff;
            border: 0;
            border-radius: 10px;
            margin: 10px;
            list-style: none;
            display: flex;
            justify-content: space-between;
        }

        .botaoEditar {
            font-size: 1rem;
            color: var(--white);
            background-color: var(--grey);
            border: 0;
            padding: 0 1rem;
            margin-top: 15px;
            margin-left: 25px;
            border-radius: 50px;
            height: 2.5rem;
            transition: 1s;

            &:hover {
                background-color: #C3FF93;
                color: var(--dark);
            }
        }

        .botaoExcluir {
            font-size: 1rem;
            color: var(--white);
            background-color: var(--grey);
            border: 0;
            padding: 0 1rem;
            margin-top: 15px;
            margin-left: 20px;
            border-radius: 50px;
            height: 2.5rem;
            transition: 1s;

            &:hover {
                background-color: #E72929;
                color: var(--dark);
            }
        }
    }
`
