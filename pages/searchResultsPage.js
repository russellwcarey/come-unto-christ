module.exports = {
  url: 'https://www.comeuntochrist.org/search-results?query=Jesus&filter=relevant',
  elements: {
    searchresults_collection: {
      selector: '.search-results_searchResultsContainer',
      locateStrategy: 'css selector'
    },
    searchresults_navigationbar_leftarrow:
    {
      selector: 'span.search-results_arrow:nth-child(1)',
      locateStrategy: 'css selector'
    },
    searchresults_navigationbar_rightarrow:
    {
      selector: 'span.search-results_arrow:nth-child(7)',
      locateStrategy: 'css selector'
    },
  }
}