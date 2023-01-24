import { fireEvent, render, screen } from '@testing-library/react'

import Button from '@/components/button'

const onClick = jest.fn();

describe('Button', () => {
  it('render the component', () => {
    render(<Button data-testid="button-container">test</Button>)

    const component = screen.getByTestId('button-container')
    const text = screen.getByText(new RegExp('test', 'i'))

    expect(component).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })

  it('Should execute the OnClick event when the user clicks', async () => {
    render(<Button role="button" onClick={onClick}>test</Button>)

    const component = screen.getByRole('button');
    await fireEvent.click(component);

    expect(onClick).toHaveBeenCalledTimes(1);
  })
})
