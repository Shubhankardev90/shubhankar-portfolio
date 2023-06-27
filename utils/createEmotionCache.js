// utils/createEmotionCache.js

import createCache from '@emotion/cache';

export function createEmotionCache() {
  return createCache({ key: 'css' });
}
