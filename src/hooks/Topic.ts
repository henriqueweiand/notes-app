import { useContext } from "react";
import { TopicsContext, TopicsContextData } from "../contexts/Topics";

export const useTopics = (): TopicsContextData => {
  return useContext(TopicsContext);
};
