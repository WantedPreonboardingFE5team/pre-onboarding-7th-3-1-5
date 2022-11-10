import { atom } from 'recoil';
import { IllnessList } from '../types/illness';

export const keywordState = atom({
  key: 'keywordState',
  default: '',
});

export const keydownState = atom({
  key: 'keydwonState',
  default: -1,
});

const initialState: IllnessList = [];

export const recommendState = atom({
  key: 'recommendState',
  default: initialState,
});
