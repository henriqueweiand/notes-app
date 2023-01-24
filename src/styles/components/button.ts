import { styled } from "..";

export const Container = styled('button', {
    display: 'inline-block',
    background: '$green500',
    border: '1px solid $green300',
    borderRadius: 5,
    padding: '0.5rem 1rem',
    color: '$gray900',
    textDecoration: 'none',
    
    '&:hover': {
      background: '$green300',
      cursor: 'pointer'
    }
})