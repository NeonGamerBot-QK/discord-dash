import { Options } from './index';
import { Modules, Routes } from './structures';
import Express from 'express';
import Events from 'events';
import Debbuger from 'debug';
import { createServer } from 'http';
const debug = Debbuger('discord-dash:main');
export const Dashboard: any = class Dash extends Events.EventEmitter {
  public readonly ops: Options;
  public readonly server: any;
  public readonly app: Express.Application;
  public listner: any;
  constructor(ops: Options) {
    debug('Calling `super()` ');
    super();
    debug('Called!, creating app');
    const app = Express();
    debug('App created');
    this.app = app;
    this.ops = this._ops(ops);
    this._expressModules();
    this._expressRoutes();
    this.server = createServer(app);
    debug('Loaded constructor!');
  }
  start() {
    this.listner = this.server.listen(this.ops.port, () => {
      debug('READY on port ::' + this.listner.port);
      this.emit('ready');
    });
  }
  _ops(ops: Options) {
    let NewOps: any = ops;
    return NewOps;
  }
  _expressModules() {
    (Modules as any)(this);
  }
  _expressRoutes() {
    (Routes as any)(this);
  }
};
