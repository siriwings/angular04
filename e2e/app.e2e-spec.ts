import { Angular04Page } from './app.po';

describe('angular04 App', function() {
  let page: Angular04Page;

  beforeEach(() => {
    page = new Angular04Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
