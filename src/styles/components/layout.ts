import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  minHeight: '100vh',

  '> div:first-of-type': {
    padding: '1rem'
  }
})

export const Main = styled('div', {
  display: 'flex',
  padding: '1rem',
  flex: 1,
  flexDirection: 'column',
  gap: '1rem',
  
  div: {
    display: 'flex',
    justifyItems: 'space-between',
  
    h1: {
      flex: 1,
      display: 'inline',
    },
  },

  p: {
    display: 'inline',
  }
})