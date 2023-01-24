import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import Input from '@/components/input'

const onChange = jest.fn();

describe('Input', () => {
  it('render the component', () => {
    render(<Input role="input" value={"test"} onChange={onChange} />)

    const input = screen.getByRole('input');

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("test")
  })

  it('Should type into the input', async () => {
    render(<Input role="input" onChange={onChange} />)

    const inputText = 'some';
    const input = screen.getByRole('input');

    await userEvent.type(input, inputText);

    expect(onChange).toHaveBeenCalledTimes(4);
  })
})
