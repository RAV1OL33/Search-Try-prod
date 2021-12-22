import {AppState} from "./models";

const BulkData: AppState = {
  searchString: '',
  searchCategories: [
    {
      searchCategoryTitle: 'ETF',
      searchTemplates: [
        {
          siteCaption: 'finviz.com',
          requestLink: 'https://finviz.com/quote.ashx?t={TARGET}',
        },{
          siteCaption: 'seekingalpha.com',
          requestLink: 'https://seekingalpha.com/symbol/{TARGET}',
        },{
          siteCaption: 'gurufocus.com',
          requestLink: 'https://www.gurufocus.com/etf/{TARGET}',
        },{
          siteCaption: 'tipranks.com',
          requestLink: 'https://www.tipranks.com/etf/{TARGET}',
        },{
          siteCaption: 'etf.com',
          requestLink: 'https://www.etf.com/{TARGET}',
        },
        {
          siteCaption: '',
          requestLink: '',
        },
      ]
    },
    {
      searchCategoryTitle: 'Stocks',
      searchTemplates: [
        {
          siteCaption: 'finviz.com',
          requestLink: 'https://finviz.com/quote.ashx?t={TARGET}',
        },
        {
          siteCaption: '',
          requestLink: '',
        },
      ]
    },
  ]
}
export {BulkData}
