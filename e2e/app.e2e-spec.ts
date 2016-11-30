import { Ng2TestappPage } from './app.po';

describe('ng2-testapp App', function() {
  let page: Ng2TestappPage;

  beforeEach(() => {
    page = new Ng2TestappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
