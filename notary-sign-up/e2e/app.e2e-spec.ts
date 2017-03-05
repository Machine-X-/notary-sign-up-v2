import { NotarySignUpPage } from './app.po';

describe('notary-sign-up App', () => {
  let page: NotarySignUpPage;

  beforeEach(() => {
    page = new NotarySignUpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
