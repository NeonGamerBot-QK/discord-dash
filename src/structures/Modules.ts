import express from 'express';
import path from 'path';
import EJS from 'ejs';
export function Modules(dash: any): void {
  const app = dash.app;
  app.use(express.json());
  app.use(express.static('public'));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.engine('ejs', EJS.renderFile);
}
