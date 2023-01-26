import { fireEvent, render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'
import userEvent from '@testing-library/user-event';

import Document from '@/pages/document/[id]'
import { useDocuments } from '@/hooks/Document'
import { DocumentProvider } from '@/containers/DocumentsProvider'

// mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

jest.mock('@/hooks/Document', () => ({
  useDocuments: jest.fn(),
  editDocument: jest.fn()
}))

describe('Edit document', () => {

  it('render screen with one document and the input must be filled', () => {
    const documents = [{ id: 1, title: "title", description: "description" }];
    const document = documents[0];
    (useRouter as jest.Mock).mockReturnValue({ query: { id: 1 } });
    (useDocuments as jest.Mock).mockImplementation
      (useDocuments as jest.Mock).mockReturnValue({ documents, getDocument: () => document });

    render(
      <DocumentProvider>
        <Document />
      </DocumentProvider>
    )

    const title = screen.getByDisplayValue(new RegExp(document.title, 'i'))
    const description = screen.getByDisplayValue(new RegExp(document.description, 'i'))

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  })

  it('User should be able to edit the document', async () => {
    const documents = [{ id: 1, title: "title", description: "description" }];
    const document = documents[0];
    (useRouter as jest.Mock).mockReturnValue({ query: { id: 1 } });
    (useDocuments as jest.Mock).mockReturnValue({ documents, getDocument: () => document, editDocument: () => { } });

    render(
      <DocumentProvider>
        <Document />
      </DocumentProvider>
    )
    const inputText = ' edited';
    const input = screen.getByDisplayValue(new RegExp(document.title, 'i'))
    await userEvent.type(input, inputText);

    const component = screen.getByRole('button', { name: new RegExp('Edit', 'i') });
    await fireEvent.click(component);
  })

})
