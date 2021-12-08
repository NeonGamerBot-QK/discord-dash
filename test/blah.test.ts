import { Dashboard } from '../src';
import { expect } from 'chai';
describe('ejs', () => {
  it('load', () => {
    require('ejs');
  });
});
describe('index.ts exports', () => {
  it('does not equal null', () => {
    expect(Dashboard).not.equal(null);
  });
});
describe('Dashboard', (): void => {
  let D: typeof Dashboard;
  it('should not throw any errors when innitalized', () => {
    D = new Dashboard({ port: 80, discord: {} });
  });
  it('Should be fine starting!', () => {
    if (D) D.start();
    else throw new Error('D, not initialized');
  });
});
