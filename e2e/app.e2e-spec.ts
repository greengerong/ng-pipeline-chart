import { NgPipelineChartPage } from './app.po';

describe('ng-pipeline-chart App', () => {
  let page: NgPipelineChartPage;

  beforeEach(() => {
    page = new NgPipelineChartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
