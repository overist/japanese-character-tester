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
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const katakanaTestState = atom({
  key: "katakanaState",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const kanjiTestState = atom({
  key: "kanjiState",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
