module.exports = {
  url: 'https://www.comeuntochrist.org',
  elements: {
    homepage_ChurchWordMark: {
      selector: '#English_x5F_OUTLINE_x5F_2020',
      locateStrategy: 'css selector'
    },
    homepage_SearchIcon: {
      selector: '.page-header-nav_openSearch',
      locateStrategy: 'css selector'
    },
    homepage_Searchbox: {
      selector: '.search-form_input',
      locateStrategy: 'css selector'
    },
    homepage_SearchboxButton: {
      selector: 'button.button_button:nth-child(4)',
      locateStrategy: 'css selector'
    }
  }
}