import { styled } from "..";

export const Container = styled('div', {
    minHeight: '100vh',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'space-between',
    maxWidth: 150,
    minWidth: 150,
    background: '$gray800',
    gap: '1rem',

    div: {
        flex: 1,
    }
})