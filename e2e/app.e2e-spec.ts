import { TasklistClientPage } from './app.po';

describe('tasklist-client App', () => {
  let page: TasklistClientPage;

  beforeEach(() => {
    page = new TasklistClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
