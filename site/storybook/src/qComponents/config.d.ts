export interface InstallOptions {
  nextZIndex: number;
  locale: string;
}
declare const setConfig: ({
  zIndex,
  ...options
}: Partial<
  Pick<InstallOptions, 'locale'> & {
    zIndex: number;
  }
>) => void;
declare const getConfig: <T extends keyof InstallOptions>(
  key: T
) => InstallOptions[T];
export { getConfig, setConfig };
