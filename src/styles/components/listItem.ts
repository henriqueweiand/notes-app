

import { styled } from "..";

export const LinkStylized = styled('p', {
    width: '100%',
    display: 'flex',
    
    a: {
        flex: '1',
        textDecoration: 'none',
        color: '$white',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontWeight: 'bold',
        padding: '0.5rem 0',
        textAlign: 'center',

        '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: '$green300',
        }
    },
})
