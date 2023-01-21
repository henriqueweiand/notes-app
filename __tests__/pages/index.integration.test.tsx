import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'

import Home from '@/pages/index'
import { useTopics } from '@/hooks/Topic'
import { TopicProvider } from '@/containers/TopicsProvider'

// mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

jest.mock('@/hooks/Topic', () => ({
  useTopics: jest.fn()
}))

describe('Home', () => {
  it('renders the app base structure', () => {
    (useRouter as jest.Mock).mockReturnValue({ query: {} });
    (useTopics as jest.Mock).mockReturnValue({ topics: [], getTopic: () => { } });

    render(
      <TopicProvider>
        <Home />
      </TopicProvider>
    )
    const container = screen.getByRole('container');
    const aside = screen.getByRole('aside');
    const main = screen.getByRole('main');

    expect(container).toBeInTheDocument();
    expect(aside).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  })

  it('render screen with one topic', () => {
    const topics = [{ id: 1, title: "title", description: "description" }];
    const topic = topics[0];
    (useRouter as jest.Mock).mockReturnValue({ query: { id: 1 } });
    (useTopics as jest.Mock).mockReturnValue({ topics, getTopic: () => topic });

    render(
      <TopicProvider>
        <Home />
      </TopicProvider>
    )

    const title = screen.getByRole('heading', { name: new RegExp(topic.title, 'i') })
    const description = screen.getByText(new RegExp(topic.description, 'i'))

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  })
})
