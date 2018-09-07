interface State {
  value?: number
};

interface ActionType {
  type: string,
  value?: any
};

interface Store {
  getState: any,
  dispatch: any
}

export {
  State,
  ActionType,
  Store
}