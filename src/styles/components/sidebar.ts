import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyItems: 'space-between',
    maxWidth: 150,
    minWidth: 150,
    background: '$gray800',
    gap: '1rem',

    div: {
        flex: 1,
    },

    variants: {
        size: {
          none: {
            maxWidth: 0,
            minWidth: 0,
          },
          small: {
            maxWidth: '10rem',
            minWidth: '10rem',
          },
          large: {
            maxWidth: '20rem',
            minWidth: '20rem',
          },
        },
    },
})