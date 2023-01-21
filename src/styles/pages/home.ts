

import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  minHeight: '100vh',
})

export const Sidebar = styled('aside', {
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

export const Main = styled('div', {
  display: 'flex',
  minHeight: '100vh',
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