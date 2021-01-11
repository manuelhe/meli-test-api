import { atom } from 'recoil';

export const itemsState = atom({
  key: 'itemsStateKey',
  default: {},
});

export const itemDetailsState = atom({
  key: 'itemDetailsKey',
  default: {},
});
