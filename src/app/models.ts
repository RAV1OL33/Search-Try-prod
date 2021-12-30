export interface AppState{
  searchString: string;
  searchCategories: SearchCategory[];
}
export interface SearchCategory{
  searchCategoryTitle: string;
  searchTemplates: SearchTemplate[]
}
export interface  SearchTemplate{
  id: number;
  siteCaption: string;
  requestLink: string
}
