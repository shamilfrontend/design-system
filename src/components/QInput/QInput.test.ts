import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import { QInput } from './index';

describe('QInput', () => {
  it('renders root class and supports size modifier', () => {
    const wrapper = shallowMount(QInput, {
      props: {
        modelValue: 'value',
        size: 'small'
      }
    });

    expect(wrapper.classes()).toContain('q-input');
    expect(wrapper.classes()).toContain('q-input_size_small');
  });

  it('shows clear button when clearable and focused with value', async () => {
    const wrapper = shallowMount(QInput, {
      props: {
        modelValue: 'abc',
        clearable: true
      }
    });

    await wrapper.find('input').trigger('focus');
    expect(wrapper.find('.q-icon-close').exists()).toBe(true);
  });

  it('emits update:modelValue and clear on clear click', async () => {
    const wrapper = shallowMount(QInput, {
      props: {
        modelValue: 'abc',
        clearable: true
      }
    });

    await wrapper.find('input').trigger('focus');
    await wrapper.find('.q-icon-close').trigger('click');

    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['']);
    expect(wrapper.emitted('clear')?.length).toBe(1);
  });

  it('toggles password visibility when showPassword', async () => {
    const wrapper = shallowMount(QInput, {
      props: {
        modelValue: 'secret',
        showPassword: true
      }
    });

    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('password');

    await input.trigger('focus');
    await wrapper.find('.q-input__action-icon').trigger('click');
    expect(wrapper.find('input').attributes('type')).toBe('text');
  });

  it('shows word limit when showWordLimit and maxlength', () => {
    const wrapper = shallowMount(QInput, {
      props: {
        modelValue: 'abcd',
        showWordLimit: true
      },
      attrs: {
        maxlength: 10
      }
    });

    expect(wrapper.find('.q-input__count').text()).toContain('4/10');
  });

  it('renders prefix and append slots', () => {
    const wrapper = shallowMount(QInput, {
      slots: {
        prefix: '<span class="prefix-slot">P</span>',
        append: '<span class="append-slot">A</span>'
      }
    });

    expect(wrapper.find('.prefix-slot').exists()).toBe(true);
    expect(wrapper.find('.append-slot').exists()).toBe(true);
  });

  it('exposes focus blur select clear methods', () => {
    const wrapper = shallowMount(QInput, {
      props: {
        modelValue: 'value'
      }
    });

    const vm = wrapper.vm as unknown as {
      focus: () => void;
      blur: () => void;
      select: () => void;
      clear: () => void;
    };

    expect(typeof vm.focus).toBe('function');
    expect(typeof vm.blur).toBe('function');
    expect(typeof vm.select).toBe('function');
    expect(typeof vm.clear).toBe('function');
  });
});
