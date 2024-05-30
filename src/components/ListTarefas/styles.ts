import styled from "styled-components";

export const Container = styled.div`

    margin-top: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    justify-content: center;

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
        }

        li {
            padding: 1rem 2rem;
            color: var(--dark);
            background-color: #fff;
            border: 0;
            border-radius: 8px;
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
            margin-top: 10px;
            margin-left: 65px;
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
            margin-top: 10px;
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
