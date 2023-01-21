import { createContext } from "react";

export interface Topic {
  id: number,
  title: string;
  description: string;
}

export interface AddTopic extends Omit<Topic, 'id'> {
}

export interface TopicsContextData {
  topics: Topic[]
  addTopic: (topic: AddTopic) => void
  getTopic: (id: number | string) => Topic | null
}

export const TopicsContext = createContext<TopicsContextData>(
  {} as TopicsContextData
);
