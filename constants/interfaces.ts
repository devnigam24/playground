import { Request, Response, NextFunction } from 'express';
export interface State {
  applicationState: string,
  value?: number,
};

export interface ActionType {
  type: string,
  value?: any
};

export type Action = (...args: Array<string>) => ActionType;

export interface Store {
  getState: any,
  dispatch: any
}

export type ExpressRequest = Request;

export namespace ExpressHttp {
  export type Req = Request;
  export type Res = Response;
  export type Next = NextFunction;
}