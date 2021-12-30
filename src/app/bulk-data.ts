import {AppState} from "./models";

const BulkData: AppState = {
  searchString: '',
  searchCategories: [
    {
      searchCategoryTitle: 'ETF',
      searchTemplates: [
        {
          id: 1,
          siteCaption: 'finviz.com',
          requestLink: 'https://finviz.com/quote.ashx?t={TARGET}',
        },{
          id: 2,
          siteCaption: 'seekingalpha.com',
          requestLink: 'https://seekingalpha.com/symbol/{TARGET}',
        },{
          id: 3,
          siteCaption: 'gurufocus.com',
          requestLink: 'https://www.gurufocus.com/etf/{TARGET}',
        },{
          id: 4,
          siteCaption: 'tipranks.com',
          requestLink: 'https://www.tipranks.com/etf/{TARGET}',
        },{
          id: 5,
          siteCaption: 'etf.com',
          requestLink: 'https://www.etf.com/{TARGET}',
        },
        {
          id: 0,
          siteCaption: '',
          requestLink: '',
        },
      ]
    },
    {
      searchCategoryTitle: 'Stocks',
      searchTemplates: [
        {
          id: 1,
          siteCaption: 'finviz.com',
          requestLink: 'https://finviz.com/quote.ashx?t={TARGET}',
        },
        {
          id: 0,
          siteCaption: '',
          requestLink: '',
        },
      ]
    },
  ]
}
export {BulkData}
