import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import { QCard } from './index';

describe('QCard', () => {
  it('renders title and body', () => {
    const wrapper = shallowMount(QCard, {
      props: { title: 'Profile', shadow: 'always' },
      slots: { default: 'Card content' }
    });

    expect(wrapper.classes()).toContain('q-card_shadow_always');
    expect(wrapper.find('.q-card__header').text()).toBe('Profile');
    expect(wrapper.find('.q-card__body').text()).toBe('Card content');
  });

  it('renders footer slot', () => {
    const wrapper = shallowMount(QCard, {
      slots: {
        default: 'Body',
        footer: 'Footer actions'
      }
    });

    expect(wrapper.find('.q-card__footer').text()).toBe('Footer actions');
  });
});
