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
        border: 2px solid #d7d7d7;
        background-color: #ebecf0;


        h3 {
            text-align: center;
            color: #172b4d;
        }

        li {
            padding: 1rem 2rem;
            color: var(--text-body);
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
            color: #fff;
            background-color: var(--blue-light);
            border: 0;
            padding: 0 2rem;
            margin-top: 10px;
            margin-left: 50px;

            border-radius: 8px;
            height: 3rem;

            transition: 1s;

            &:hover {
                /* filter: brightness(0.9); */
                background-color: #00FF00;
                color: #000000;
            }
        }

        .botaoExcluir {
            font-size: 1rem;
            color: #fff;
            background-color: var(--blue-light);
            border: 0;
            padding: 0 2rem;
            margin-top: 10px;
            margin-left: 40px;

            border-radius: 8px;
            height: 3rem;

            transition: 1s;

            &:hover {
                /* filter: brightness(0.9); */
                background-color: #f00;
                color: #000000;
            }
        }
    }
`
