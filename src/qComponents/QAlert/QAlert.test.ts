import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import { QAlert } from './index';

describe('QAlert', () => {
  it('renders alert with type modifier', () => {
    const wrapper = shallowMount(QAlert, {
      props: { type: 'success', title: 'Done' },
      slots: { default: 'Saved successfully' }
    });

    expect(wrapper.classes()).toContain('q-alert_type_success');
    expect(wrapper.text()).toContain('Done');
    expect(wrapper.text()).toContain('Saved successfully');
  });

  it('emits close and hides alert', async () => {
    const wrapper = shallowMount(QAlert, {
      props: { closable: true, title: 'Warning' },
      slots: { default: 'Check fields' }
    });

    await wrapper.find('.q-alert__close').trigger('click');

    expect(wrapper.emitted('close')).toHaveLength(1);
    expect(wrapper.isVisible()).toBe(false);
  });
});
