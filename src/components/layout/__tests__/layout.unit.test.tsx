import { render, screen } from '@testing-library/react'

import Layout from '@/components/layout'
import { useDocuments } from '@/hooks/Document'

jest.mock('@/hooks/Document', () => ({
  useDocuments: jest.fn()
}))

describe('Layout', () => {
  beforeEach(() => {
    (useDocuments as jest.Mock).mockReturnValue({ documents: [] });
  })

  it('should render the component', () => {
    render(
      <Layout>
        test
      </Layout>
    )

    const layout = screen.getByRole('main')
    const aside = screen.getByRole('aside')

    expect(layout).toBeInTheDocument()
    expect(aside).toBeInTheDocument()
  })

  it('component should have content', () => {
    render(
      <Layout role="main">
        test
      </Layout>
    )

    const main = screen.getByText(new RegExp('test', 'i'))
    expect(main).toBeInTheDocument();
  })
})
