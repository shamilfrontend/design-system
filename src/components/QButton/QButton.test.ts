import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';

import { QButton } from './index';

describe('QButton', () => {
  it('renders solid primary classes', () => {
    const wrapper = shallowMount(QButton, {
      props: { type: 'primary' },
      slots: { default: 'Save' }
    });

    expect(wrapper.classes()).toContain('q-button_type_primary');
    expect(wrapper.classes()).toContain('q-button_size_default');
  });

  it('renders plain danger classes', () => {
    const wrapper = shallowMount(QButton, {
      props: { type: 'danger', plain: true },
      slots: { default: 'Delete' }
    });

    expect(wrapper.classes()).toContain('q-button_type_danger');
    expect(wrapper.classes()).toContain('q-button_plain');
  });

  it('renders icon-only as icon-variant class', () => {
    const wrapper = shallowMount(QButton, {
      props: {
        type: 'success',
        icon: 'q-icon-check'
      }
    });

    expect(wrapper.classes()).toContain('q-button_variant_icon');
    expect(wrapper.classes()).toContain('q-button_type_success');
  });

  it('renders icon-only class when slot content is empty', () => {
    const wrapper = shallowMount(QButton, {
      props: {
        type: 'primary',
        icon: 'q-icon-bell'
      },
      slots: { default: '' }
    });

    expect(wrapper.classes()).toContain('q-button_variant_icon');
  });

  it('renders large size class', () => {
    const wrapper = shallowMount(QButton, {
      props: { size: 'large' },
      slots: { default: 'Large' }
    });

    expect(wrapper.classes()).toContain('q-button_size_large');
  });

  it('renders text modifier class', () => {
    const wrapper = shallowMount(QButton, {
      props: { type: 'primary', text: true },
      slots: { default: 'Text' }
    });

    expect(wrapper.classes()).toContain('q-button_text');
    expect(wrapper.classes()).not.toContain('q-button_plain');
  });

  it('renders link modifier class', () => {
    const wrapper = shallowMount(QButton, {
      props: { type: 'primary', link: true },
      slots: { default: 'Link' }
    });

    expect(wrapper.classes()).toContain('q-button_link');
  });

  it('renders circle class only for icon variant', () => {
    const iconWrapper = shallowMount(QButton, {
      props: {
        type: 'primary',
        circle: true,
        icon: 'q-icon-bell'
      }
    });

    const defaultWrapper = shallowMount(QButton, {
      props: {
        type: 'primary',
        circle: true
      },
      slots: { default: 'Circle' }
    });

    expect(iconWrapper.classes()).toContain('q-button_circle');
    expect(defaultWrapper.classes()).toContain('q-button_circle');
  });

  it('renders full width class when not circle', () => {
    const wrapper = shallowMount(QButton, {
      props: {
        type: 'primary',
        fullWidth: true
      },
      slots: { default: 'Full width' }
    });

    expect(wrapper.classes()).toContain('q-button_full-width');
  });

  it('disables button in loading state', () => {
    const wrapper = shallowMount(QButton, {
      props: {
        type: 'primary',
        loading: true
      },
      slots: { default: 'Loading' }
    });

    expect(wrapper.attributes('disabled')).toBeDefined();
    expect(wrapper.classes()).toContain('q-button_loading');
  });

  it('renders round class', () => {
    const wrapper = shallowMount(QButton, {
      props: {
        type: 'primary',
        round: true
      },
      slots: { default: 'Round' }
    });

    expect(wrapper.classes()).toContain('q-button_round');
  });

  it('renders custom tag and omits button native type', () => {
    const wrapper = shallowMount(QButton, {
      props: {
        tag: 'a',
        nativeType: 'submit'
      },
      slots: { default: 'Link' }
    });

    expect(wrapper.element.tagName).toBe('A');
    expect(wrapper.attributes('type')).toBeUndefined();
  });

  it('sets type attribute only for button tag', () => {
    const wrapper = shallowMount(QButton, {
      props: {
        nativeType: 'submit'
      },
      slots: { default: 'Submit' }
    });

    expect(wrapper.attributes('type')).toBe('submit');
  });

  it('sets aria-disabled and tabindex for non-button disabled state', () => {
    const wrapper = shallowMount(QButton, {
      props: {
        tag: 'a',
        disabled: true
      },
      slots: { default: 'Disabled link' }
    });

    expect(wrapper.attributes('aria-disabled')).toBe('true');
    expect(wrapper.attributes('tabindex')).toBe('-1');
    expect(wrapper.attributes('disabled')).toBeUndefined();
  });

  it('blocks click when non-button is disabled', async () => {
    const wrapper = shallowMount(QButton, {
      props: {
        tag: 'a',
        disabled: true
      },
      slots: { default: 'Disabled link' }
    });

    const event = new MouseEvent('click', { bubbles: true, cancelable: true });
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');
    const stopImmediatePropagationSpy = vi.spyOn(
      event,
      'stopImmediatePropagation'
    );

    wrapper.element.dispatchEvent(event);
    await wrapper.vm.$nextTick();

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(stopImmediatePropagationSpy).toHaveBeenCalled();
  });
});
