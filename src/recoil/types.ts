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

export interface User {
  id: number;
  accessToken: string;
}

export interface youtubeId {
  id: number;
  url: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface scrapedPhrase {
  id: number;
  phrase: string;
}
