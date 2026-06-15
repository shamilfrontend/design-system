import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import { QBadge } from './index';

describe('QBadge', () => {
  it('renders badge value', () => {
    const wrapper = shallowMount(QBadge, {
      props: { value: 12 },
      slots: { default: '<span>Item</span>' }
    });

    expect(wrapper.find('.q-badge__content').text()).toBe('12');
  });

  it('caps value with max', () => {
    const wrapper = shallowMount(QBadge, {
      props: { value: 120, max: 99 }
    });

    expect(wrapper.find('.q-badge__content').text()).toBe('99+');
  });

  it('renders dot badge without value', () => {
    const wrapper = shallowMount(QBadge, {
      props: { isDot: true }
    });

    expect(wrapper.find('.q-badge__content_dot').exists()).toBe(true);
    expect(wrapper.find('.q-badge__content').text()).toBe('');
  });
});
