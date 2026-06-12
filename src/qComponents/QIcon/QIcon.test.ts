import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import { QIcon } from './index';
import { resolveIconClass } from './src/utils';

describe('QIcon', () => {
  it('renders icon with full class name', () => {
    const wrapper = shallowMount(QIcon, {
      props: { name: 'q-icon-search' }
    });

    expect(wrapper.classes()).toContain('q-icon');
    expect(wrapper.classes()).toContain('q-icon-search');
  });

  it('resolves short icon name', () => {
    const wrapper = shallowMount(QIcon, {
      props: { name: 'close' }
    });

    expect(wrapper.classes()).toContain('q-icon-close');
  });

  it('applies size and spin modifiers', () => {
    const wrapper = shallowMount(QIcon, {
      props: {
        name: 'reverse',
        size: 'large',
        spin: true
      }
    });

    expect(wrapper.classes()).toContain('q-icon_size_large');
    expect(wrapper.classes()).toContain('q-icon_spin');
  });

  it('applies custom pixel size via style', () => {
    const wrapper = shallowMount(QIcon, {
      props: {
        name: 'search',
        size: 32
      }
    });

    expect(wrapper.attributes('style')).toContain('font-size: 32px');
  });

  it('sets aria attributes when label is provided', () => {
    const wrapper = shallowMount(QIcon, {
      props: {
        name: 'search',
        ariaLabel: 'Search'
      }
    });

    expect(wrapper.attributes('aria-label')).toBe('Search');
    expect(wrapper.attributes('aria-hidden')).toBeUndefined();
  });
});

describe('resolveIconClass', () => {
  it('keeps full icon class unchanged', () => {
    expect(resolveIconClass('q-icon-search')).toBe('q-icon-search');
  });

  it('adds prefix to short name', () => {
    expect(resolveIconClass('search')).toBe('q-icon-search');
  });
});
