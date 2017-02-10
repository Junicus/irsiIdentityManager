import { AngularElectronStarterPage } from './app.po';

describe('angular-electron-starter App', function() {
  let page: AngularElectronStarterPage;

  beforeEach(() => {
    page = new AngularElectronStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
