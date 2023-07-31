import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

// is mobile state
export const isMobileState = atom({
  key: "isMobileState",
  default: false,
});

// k-Guide modal state
export const kGuideModalState = atom({
  key: "kGuideModalState",
  default: false,
});

// h-Guide modal state
export const hGuideModalState = atom({
  key: "hGuideModalState",
  default: false,
});

export const hiraganaTestState = atom({
  key: "hiraganaState",
  default: {
    stage: 0,
    mode: 0, // 0: from character, 1: from pronunciation
    quizs: [{ id: 0, character: "", pronunciation: "" }],
    wrongs: [{ id: 0, character: "", pronunciation: "" }],
  },
  // effects_UNSTABLE: [persistAtom], // stop for dev
});

export const katakanaTestState = atom({
  key: "katakanaState",
  default: {
    stage: 0,
    mode: 0, // 0: from character, 1: from pronunciation
    quizs: [{ id: 0, character: "", pronunciation: "" }],
    wrongs: [{ id: 0, character: "", pronunciation: "" }],
  },
  // effects_UNSTABLE: [persistAtom], // stop for dev
});

export const kanjiTestState = atom({
  key: "kanjiState",
  default: {},
  // effects_UNSTABLE: [persistAtom], // stop for dev
});
