import { selector, selectorFamily } from 'recoil';
import { itemDetailsState } from './stores';

const itemDetailsQuery = selectorFamily({
  key: 'itemDetailsQuery',
  get: (itemId) => async () => {
    if (typeof itemId !== 'string') {
      return {};
    }
    const resp = await fetch(`/api/items/${itemId}`);
    if(resp.error) {
      throw resp.error;
    }
    return resp.json();
  }
});

export const currentItemQuery = selector({
  key: 'currentItemQuery',
  get: ({ get }) => {
    const items = get(itemDetailsQuery(get(itemDetailsState)));
    return items.item;
  }
});
