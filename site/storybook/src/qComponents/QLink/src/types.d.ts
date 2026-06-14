export type QLinkPropType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';
export type QLinkPropUnderline = boolean;
export type QLinkPropDisabled = boolean;
export type QLinkPropHref = string | null;
export type QLinkPropTarget = '_blank' | '_self' | '_parent' | '_top';
export interface QLinkProps {
  type: QLinkPropType;
  underline: QLinkPropUnderline;
  disabled: QLinkPropDisabled;
  href: QLinkPropHref;
  target: QLinkPropTarget;
}
