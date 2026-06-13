export type QPageHeaderPropTitle = string | null;
export type QPageHeaderPropSubtitle = string | null;
export type QPageHeaderPropBack = boolean;

export interface QPageHeaderProps {
  title: QPageHeaderPropTitle;
  subtitle: QPageHeaderPropSubtitle;
  back: QPageHeaderPropBack;
}

export interface QPageHeaderBreadcrumbItem {
  label: string;
  to?: string;
}
