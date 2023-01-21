import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import ListItem from '@/components/listItem'

const listItem = {
  id: 1,
  title: 'test',
  description: 'description 1',
}

describe('ListItem', () => {
  it('renders the component', () => {
    render(<ListItem data-testid="listItem-container" {...listItem} />)

    const component = screen.getByTestId('listItem-container')

    expect(component).toBeInTheDocument()
  })

  it('renders the component with one more prop ', () => {
    render(<ListItem data-testid="listItem-container" {...listItem} custom-prop="1" />)

    const component = screen.getByTestId('listItem-container')

    expect(component.getAttribute('custom-prop')).toEqual("1")
  })

  it('renders the component with the title', () => {
    render(<ListItem data-testid="listItem-container" {...listItem} />)

    const component = screen.getByText(new RegExp(listItem.title, 'i'))

    expect(component).toBeInTheDocument()
  })
})
