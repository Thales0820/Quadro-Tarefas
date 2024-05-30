import styled from 'styled-components'

export const FormContainer = styled.form`

    h2 {
        color: var(--dark);
        font-size: 1.5rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    input {
        width: 96%;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;
        font-size: 1rem;

        &::placeholder {
            color: var(--dark);
        }
    }

    textarea {
        width: 96%;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;
        font-size: 1rem;

        &::placeholder {
            color: var(--dark);
        }
        margin-top:  1rem;
    }

    button[type='submit'] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: var(--grey);
        color: var(--white);
        border-radius: 8px;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: 1s;

        &:hover {
            background-color: var(--dark);
            color: var(--orange);
        }

    }

    .select {
        appearance: none;
        background-color: #ebecf0;
        border: 1px solid #d7d7d7;
        border-radius: 8px;
        margin-top: 10px;
        padding: 5px 10px;
        font-size: 16px;
        color: #172b4d;
        cursor: pointer;
        width: 100%;
        outline: none;

        &::placeholder {
            color: var(--dark);
        }
    }

`
