export interface LandingAction {
  text: string;
  link: string;
  type: 'primary' | 'secondary';
}

export interface LandingValue {
  icon: string;
  title: string;
  description: string;
}

export interface LandingPlatform {
  label: string;
  angle: number;
}

export interface LandingStat {
  value: string;
  label: string;
  percent: number;
}

export interface LandingStyleItem {
  title: string;
  description: string;
  icon: string;
  link: string;
  external?: boolean;
}

export interface LandingTool {
  name: string;
  description: string;
  link?: string;
  comingSoon?: boolean;
}

export interface LandingExample {
  title: string;
  image: string;
  width?: number;
  height?: number;
}

export interface LandingReviewLayout {
  top: string;
  left: string;
  rotate: number;
}

export interface LandingReview {
  name: string;
  role: string;
  quote: string;
  layout?: LandingReviewLayout;
}

export interface LandingTeamMember {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export const LANDING_ANNOUNCEMENT_COLORS = {
  orange: 'orange',
  teal: 'teal',
  purple: 'purple'
} as const;

export type LandingAnnouncementColor =
  (typeof LANDING_ANNOUNCEMENT_COLORS)[keyof typeof LANDING_ANNOUNCEMENT_COLORS];

export interface LandingAnnouncement {
  title: string;
  description: string;
  color: LandingAnnouncementColor;
}

export interface LandingHeroSection {
  title: string;
  subtitle: string;
  actions: LandingAction[];
}

export interface LandingValuesSection {
  title: string;
  subtitle: string;
  items: LandingValue[];
}

export interface LandingPlatformsSection {
  title: string;
  subtitle: string;
  labels: LandingPlatform[];
}

export interface LandingStatsSection {
  title: string;
  subtitle: string;
  items: LandingStat[];
}

export interface LandingCustomizationSection {
  title: string;
  subtitle: string;
  image: string;
  points: string[];
}

export interface LandingStyleGridSection {
  title: string;
  subtitle: string;
  items: LandingStyleItem[];
}

export interface LandingToolsSection {
  title: string;
  subtitle: string;
  items: LandingTool[];
}

export interface LandingExamplesSection {
  title: string;
  subtitle: string;
  items: LandingExample[];
}

export interface LandingReviewsSection {
  title: string;
  subtitle: string;
  items: LandingReview[];
}

export interface LandingTeamSection {
  title: string;
  subtitle: string;
  items: LandingTeamMember[];
}

export interface LandingAnnouncementsSection {
  title: string;
  subtitle: string;
  items: LandingAnnouncement[];
}

export interface LandingFooterSection {
  text: string;
  netlifyBadge: string;
}

export interface LandingContent {
  hero: LandingHeroSection;
  values: LandingValuesSection;
  platforms: LandingPlatformsSection;
  stats: LandingStatsSection;
  customization: LandingCustomizationSection;
  styleGrid: LandingStyleGridSection;
  tools: LandingToolsSection;
  examples: LandingExamplesSection;
  reviews: LandingReviewsSection;
  team: LandingTeamSection;
  announcements: LandingAnnouncementsSection;
  footer: LandingFooterSection;
}
