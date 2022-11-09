import { atom, selector } from 'recoil';

export const keywordState = atom({
  key: 'keywordState',
  default: '',
});

export const charCountState = selector({
  key: 'getKeyword',
  get: ({ get }) => {
    const keyword = get(keywordState);

    return keyword;
  },
});
