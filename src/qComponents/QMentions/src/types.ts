export interface QMentionOption { value: string; label: string; }
export interface QMentionsProps {
  modelValue: string;
  options: QMentionOption[];
  prefix: string;
  placeholder: string | null;
}
