import { SafsarimPage } from './app.po';

describe('safsarim App', function() {
  let page: SafsarimPage;

  beforeEach(() => {
    page = new SafsarimPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
