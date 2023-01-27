import { fireEvent, render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'

import Document from '@/pages/document/[id]'
import { useDocuments } from '@/hooks/Document'
import { DocumentProvider } from '@/containers/DocumentsProvider'

// mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

jest.mock('@/hooks/Document', () => ({
  useDocuments: jest.fn(),
}))

const documents = [{ id: 1, title: "title", description: "description" }];
const document = documents[0];

const renderDocument = () => {
  (useRouter as jest.Mock).mockReturnValue({ query: { id: 1 } });
  (useDocuments as jest.Mock).mockReturnValue({ documents, getDocument: () => document, editDocument: () => { } });

  render(
    <DocumentProvider>
      <Document />
    </DocumentProvider>
  )
};

describe('Edit document', () => {
  it('render screen with one document and the input must be filled', () => {
    renderDocument()

    const title = screen.getByDisplayValue(new RegExp(document.title, 'i'))
    const description = screen.getByDisplayValue(new RegExp(document.description, 'i'))

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  })

  it('User should be able to edit the document', async () => {
    renderDocument()

    const handleClick = jest.fn();
    const component = screen.getByRole('button', { name: new RegExp('Edit', 'i') });
    component.onclick = handleClick;

    await fireEvent.click(component);

    expect(handleClick).toHaveBeenCalled();
  })

})
