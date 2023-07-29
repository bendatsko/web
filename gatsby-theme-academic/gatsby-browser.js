import {
  wrapPageElement as _wrapPageElement,
} from './src/utils/providers';

export const wrapPageElement = _wrapPageElement;

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === "undefined") {
    await import("intersection-observer")
  }
}