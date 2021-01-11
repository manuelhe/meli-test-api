import { selector, selectorFamily } from 'recoil';
import { itemsState } from './stores';

const itemsQuery = selectorFamily({
  key: 'itemsQuery',
  get: (searchString) => async () => {
    if (typeof searchString !== 'string') {
      return {};
    }
    const resp = await fetch(`/api/items?q=${searchString}`);
    if(resp.error) {
      throw resp.error;
    }
    return resp.json();
  }
});

const searchItemsQuery = selector({
  key: 'searchItemsQuery',
  get: ({ get }) => get(itemsQuery(get(itemsState)))
});

export const currentCategoriesQuery = selector({
  key: 'currentCategoriesQuery',
  get: ({ get }) => {
    const items = get(searchItemsQuery);
    return items.categories;
  }
});

export const currentItemsQuery = selector({
  key: 'currentItemsQuery',
  get: ({ get }) => {
    const items = get(searchItemsQuery);
    return items.resp;
  }
});
