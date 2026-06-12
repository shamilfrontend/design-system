import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import { QSkeleton } from './index';

describe('QSkeleton', () => {
  it('renders single skeleton item', () => {
    const wrapper = shallowMount(QSkeleton, {
      props: { variant: 'rect', width: 200, height: 100 }
    });

    expect(wrapper.classes()).toContain('q-skeleton_variant_rect');
    expect(wrapper.attributes('style')).toContain('width: 200px');
    expect(wrapper.attributes('style')).toContain('height: 100px');
  });

  it('renders multiple text rows', () => {
    const wrapper = shallowMount(QSkeleton, {
      props: { variant: 'text', rows: 3 }
    });

    expect(wrapper.findAll('.q-skeleton__row')).toHaveLength(3);
  });
});
