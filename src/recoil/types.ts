// type
export type ModalStateType = {
  key: string;
  Component: React.ComponentType;
  Props?: object;
  popOnce?: boolean;
  popTwice?: boolean;
};

export type recognizedWordsType = {
  id: number;
  word: string;
  isMatchedWithTranscription: boolean;
};

export type phraseListType = {
  sentence: string;
  meaning: string;
  tags: string[];
};

export interface User {
  id: number;
  accessToken: string;
}
