const utilsDir = (): string => __dirname.split('/').filter(path => path !== 'utils').join('/');

export const getIndexHtmlFile = (moduleNmae: string): string => `${utilsDir()}/modules/${moduleNmae}/index.html`;
