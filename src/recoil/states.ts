import { atom, atomFamily } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ModalStateType, Tag, User, phraseListType, recognizedWordsType, youtubeId } from './types';

const { persistAtom } = recoilPersist({
  key: 'localStorage',
  storage: localStorage,
});

// 유저 로그인
export const UUid = atom<User>({
  key: 'user',
  default: {
    id: 0,
    accessToken: '',
  },
  effects_UNSTABLE: [persistAtom],
});

// 로그인 상태 확인
export const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: false, // 초기값은 로그아웃 상태로 설정
});

export const modalActivationState = atom<boolean>({
  key: 'modalActivationState',
  default: false,
});

export const sideBarOpenState = atom<boolean>({
  key: 'sideBarOpenState',
  default: false,
});

// 유튜브 url 링크
export const youtubeLinkState = atom<string>({
  key: 'youtubeLinkState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const youtubeIDstate = atom<youtubeId[]>({
  key: 'youtubeIDState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const scriptIDstate = atom<number>({
  key: 'scriptIDstate',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const scriptSentencestate = atom<string>({
  key: 'scriptSentencestate',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const currentTimeState = atom({
  key: 'currentTimeState',
  default: '00:00:00',
});

export const youtubePlayerState = atom({
  key: 'youtubePlayerState',
  default: {
    startPoint: '00:00:00',
    sentence: '',
  },
});

// audio blob 객체에 넣을 url
export const audioUrlState = atom<string>({
  key: 'audioUrlState',
  default: null,
});

export const secondAudioUrl = atom<string>({
  key: 'secondAudioUrl',
  default: null,
});

// 사용자 음성 녹음 상태 'inactive' 'recording' 'loading' 'completed'
export const recordingState = atom<string>({
  key: 'recordingState',
  default: 'inactive',
});

// 사용자 음성 인식으로부터 추출된 단어 목록
export const recognizedWords = atom<recognizedWordsType[]>({
  key: 'recognizedWords',
  default: [],
});

// 모달 상태
export const modalStackState = atom<ModalStateType[]>({
  key: 'modalStackState',
  default: [],
});

export const menuState = atom<string>({
  key: 'menuState',
  default: 'Dashboard',
});

// 표현 저장에 선택된 문장
export const selectedPhrase = atom<string>({
  key: 'selectedPhrase',
  default: '',
});

export const selectedTags = atom<Tag[]>({
  key: 'selectedTags',
  default: [],
});

export const scrapedPhrase = atom<phraseListType[]>({
  key: 'scrapedPhrase',
  default: [
    {
      sentence: 'any significant changes',
      sentenceId: 17,
      startIndex: 3,
      endIndex: 18,
      meaning: '어떤 중요한 변화가',
      tags: ['일상표현', '대화'],
    },
    {
      sentence: 'to get more data.',
      sentenceId: 17,
      startIndex: 10,
      endIndex: 27,
      meaning: '더 많은 자료를 얻기 위해',
      tags: ['자료수집', '데이터'],
    },
    {
      sentence: 'any updates',
      sentenceId: 19,
      startIndex: 0,
      endIndex: 17,
      meaning: '업데이트 사항이',
      tags: ['뉴스', '업데이트'],
    },
  ],
});

export const toggleState = atomFamily<boolean, string>({
  key: 'toggleState',
  default: false,
});
