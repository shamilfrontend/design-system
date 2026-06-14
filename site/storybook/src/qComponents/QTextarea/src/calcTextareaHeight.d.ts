import { Nullable } from '../../../../types/helpers';
interface TextareaHeight {
  height: string;
  minHeight: string;
}
export default function calcTextareaHeight(
  targetElement: Nullable<HTMLTextAreaElement>,
  minRows?: number,
  maxRows?: Nullable<number>
): TextareaHeight;
export {};
