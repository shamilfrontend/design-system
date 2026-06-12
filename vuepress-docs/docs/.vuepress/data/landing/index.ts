import { announcements } from './announcements';
import { customization } from './customization';
import { examples } from './examples';
import { footer } from './footer';
import { hero } from './hero';
import { platforms } from './platforms';
import { reviews } from './reviews';
import { stats } from './stats';
import { styleGrid } from './style-grid';
import { team } from './team';
import { tools } from './tools';
import { values } from './values';
import type { LandingContent } from './types';

export const landingContent = {
  hero,
  values,
  platforms,
  stats,
  customization,
  styleGrid,
  tools,
  examples,
  reviews,
  team,
  announcements,
  footer
} satisfies LandingContent;

export type { LandingContent } from './types';
export * from './types';
