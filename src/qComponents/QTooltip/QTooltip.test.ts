import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import { QTooltip } from './index';

describe('QTooltip', () => {
  it('renders trigger slot and keeps tooltip hidden by default', () => {
    const wrapper = shallowMount(QTooltip, {
      props: { content: 'Hint' },
      slots: { default: '<button>Trigger</button>' },
      global: {
        stubs: { teleport: true }
      }
    });

    expect(wrapper.find('.q-tooltip-trigger').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('.q-tooltip').attributes('style')).toContain(
      'display: none'
    );
  });
});
