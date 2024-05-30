import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--black);
    padding: 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: var(--white);
    }

    button {
        font-size: 1rem;
        color: var(--white);
        background-color: var(--grey);
        border: 0;
        padding: 0 2rem;

        border-radius: 8px;
        height: 3rem;

        transition: 1s;

        &:hover {
            /* filter: brightness(0.9); */
            background-color: var(--dark);
            color: var(--orange);
        }
    }
`
