import styled from 'styled-components'

export const FormContainer = styled.form`

    h2 {
        color: var(--blue);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 96%;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
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
            color: var(--text-body);
        }
        margin-top:  1rem;
    }

    button[type='submit'] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: #03bb85;
        color: #fff;
        border-radius: 8px;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;

        &:hover {
            filter: brightness(0.9);
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
    }

    .select:hover {
        background-color: #d7d7d7;
    }

    .select:focus {
        border-color: var(--text-body);
    }

`
