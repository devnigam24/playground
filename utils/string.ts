const utilsDir = (): string => __dirname.split('/').filter(path => path !== 'utils').join('/');

export const getView = (moduleNmae: string): string => `${utilsDir()}/modules/${moduleNmae}/view.js`;
export const getConfig = (moduleNmae: string): string => `${utilsDir()}/modules/${moduleNmae}/config.js`;