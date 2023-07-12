import { inject } from 'vue';

export const adId = Symbol.for('ads-plugin');

export default function (): any {
  return inject(adId);
}
