import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ModalStateType, Tag, User, recognizedWordsType, scrapedPhrase, youtubeId } from './types';

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

// 로그인한 아이디
export const account = atom<string>({
  key: 'account',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

// 로그인 상태 확인
export const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: false, // 초기값은 로그아웃 상태로 설정,
  effects_UNSTABLE: [persistAtom],
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

// 이번 영상 표현 보기 or 모든 표현 보기
export const showOverall = atom<boolean>({
  key: 'showOverall',
  default: false,
});

// 하이라이팅할 표현들
export const highLightPhrase = atom<scrapedPhrase[]>({
  key: 'highLightPhrase',
  default: [],
});

// 스크립트에서 클릭된 표현
export const selectedHighLight = atom<{ sentenceId: number; phrase: string }>({
  key: 'selectedHighLight',
  default: null,
});

export const videoDurationState = atom<string>({
  key: 'videoDuration',
  default: '',
});

export const forceRefresh = atom<number>({
  key: 'forceRefresh',
  default: 0,
});

export const selectedDateState = atom({
  key: 'selectedDateState',
  default: new Date(), // 현재 날짜로 초기화
});

export const wordColorPalette = atom<string[]>({
  key: 'wordColorPalette',
  default: ['#FFF6C6', '#FBF0FF', '#EFFFD5', '#DAFFF6', '#E0EAFF', '#FFE8BC', '#D4F7FF', '#FFD9DB'],
});
