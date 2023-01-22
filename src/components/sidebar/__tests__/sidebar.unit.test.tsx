import { render, screen } from '@testing-library/react'

import { useDocuments } from '@/hooks/Document'
import Sidebar from '@/components/sidebar'

jest.mock('@/hooks/Document', () => ({
  useDocuments: jest.fn()
}))

describe('Sidebar', () => {
  it('render the component', () => {
    (useDocuments as jest.Mock).mockReturnValue({ documents: [] });

    render(<Sidebar data-testid="sidebar-container" />)

    const sidebar = screen.getByTestId('sidebar-container')

    expect(sidebar).toBeInTheDocument()
  })

  it('Should have document on the sidebar', () => {
    const documents = [{ id: 1, title: "title", description: "description" }];
    (useDocuments as jest.Mock).mockReturnValue({ documents });

    render(
      <Sidebar data-testid="sidebar-container" />
    )

    const title = screen.getByText(new RegExp(documents[0].title, 'i'))
    const button = screen.getByRole('button', { name: new RegExp('create', 'i') })

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  })
})
