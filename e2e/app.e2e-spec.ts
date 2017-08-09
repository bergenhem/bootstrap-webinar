import { BootstrapWebinarPage } from './app.po';

describe('bootstrap-webinar App', () => {
  let page: BootstrapWebinarPage;

  beforeEach(() => {
    page = new BootstrapWebinarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
