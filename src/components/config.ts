export interface InstallOptions {
  nextZIndex: number;
  locale: string;
}

interface ConfigUpdate {
  locale?: InstallOptions['locale'];
  nextZIndex?: InstallOptions['nextZIndex'];
  zIndex?: InstallOptions['nextZIndex'];
}

const DEFAULT_NEXT_Z_INDEX = 2000;

let $DSOptions: InstallOptions = {
  nextZIndex: 0,
  locale: 'ru'
};

const normalizeConfigUpdate = (configUpdate: ConfigUpdate): InstallOptions => {
  const nextZIndex =
    configUpdate.zIndex ?? configUpdate.nextZIndex ?? DEFAULT_NEXT_Z_INDEX;

  return {
    ...$DSOptions,
    locale: configUpdate.locale ?? $DSOptions.locale,
    nextZIndex
  };
};

const setConfig = (configUpdate: ConfigUpdate = {}): void => {
  $DSOptions = normalizeConfigUpdate(configUpdate);
};

const getNextZIndex = (): number => {
  $DSOptions.nextZIndex += 1;

  return $DSOptions.nextZIndex;
};

const getConfig = <T extends keyof InstallOptions>(key: T): InstallOptions[T] => {
  if (key === 'nextZIndex') {
    return getNextZIndex() as InstallOptions[T];
  }

  return $DSOptions[key];
};

export { getConfig, setConfig };
