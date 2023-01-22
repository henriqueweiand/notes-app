import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'

import Home from '@/pages/index'
import { useDocuments } from '@/hooks/Document'
import { DocumentProvider } from '@/containers/DocumentsProvider'

// mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

jest.mock('@/hooks/Document', () => ({
  useDocuments: jest.fn()
}))

describe('Home', () => {
  it('renders the app base structure', () => {
    (useRouter as jest.Mock).mockReturnValue({ query: {} });
    (useDocuments as jest.Mock).mockReturnValue({ documents: [], getDocument: () => { } });

    render(
      <DocumentProvider>
        <Home data-testid="layout-container" />
      </DocumentProvider>
    )
    const container = screen.getByTestId('layout-container');

    expect(container).toBeInTheDocument();
  })

  it('render screen with one document', () => {
    const documents = [{ id: 1, title: "title", description: "description" }];
    const document = documents[0];
    (useRouter as jest.Mock).mockReturnValue({ query: { id: 1 } });
    (useDocuments as jest.Mock).mockReturnValue({ documents, getDocument: () => document });

    render(
      <DocumentProvider>
        <Home />
      </DocumentProvider>
    )

    const title = screen.getByRole('heading', { name: new RegExp(document.title, 'i') })
    const description = screen.getByText(new RegExp(document.description, 'i'))

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  })
})
