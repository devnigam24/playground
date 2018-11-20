const utilsDir = (): string => __dirname.split('/').filter(path => path !== 'utils').join('/');

export const getViewJSFilePath = (moduleNmae: string): string => `${utilsDir()}/modules/${moduleNmae}/view.js`;
export const getConfigJSFilePath = (moduleNmae: string): string => `${utilsDir()}/modules/${moduleNmae}/config.js`;