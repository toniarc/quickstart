import { ESaudeFrontendPage } from './app.po';

describe('e-saude-frontend App', function() {
  let page: ESaudeFrontendPage;

  beforeEach(() => {
    page = new ESaudeFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
