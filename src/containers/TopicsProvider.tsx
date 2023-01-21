import React, { ReactNode, useEffect, useState } from "react";
import { AddTopic, Topic, TopicsContext } from "../contexts/Topics";

interface TopicProviderProps {
  children: ReactNode;
}

export const TopicProvider = ({ children }: TopicProviderProps): JSX.Element => {
  const [topics, setTopic] = useState<Topic[]>([
    {
      id: 1,
      title: 'test test test test test test test',
      description: 'description 1',
    },
    {
      id: 2,
      title: 'test2',
      description: 'description 2',
    }
  ]);

  function getTopics() {
    return topics
  }

  function getTopic(id: number | string) {
    const topic = topics.find(topic => topic.id == id);

    return topic || null
  }

  function addTopic(newTopic: AddTopic) {
    setTopic((state) => [
      {
        id: state.length + 1,
        ...newTopic
      },
      ...state,
    ])
  }

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <TopicsContext.Provider value={{ addTopic, topics, getTopic }}>{children}</TopicsContext.Provider>
  );
};
