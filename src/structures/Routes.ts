export function Routes(dash: any) {
  const app = dash.app;
  app.get('/', (_req: any, res: any) => {
    res.render('index');
  });
  app.use('*', (_req: any, res: any) => {
    res.render('404');
  });
  app.use('*', (err: Error, _req: any, res: any, _next: any) => {
    res.render('404', {
      error: err,
      e: err,
      err,
      message: err.message,
    });
  });
}
