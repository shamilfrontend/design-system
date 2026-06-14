interface Options {
  start?: (e: MouseEvent) => void;
  drag?: (e: MouseEvent) => void;
  end?: (e: MouseEvent) => void;
}
export default function (element: HTMLElement, options: Options): void;
export {};
