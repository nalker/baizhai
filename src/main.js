import Slider from './components/Slider.js'
import Summary from './components/Summary.js'
import Archive from './components/Archive.js'
import ContentMenu from './components/ContentMenu.js'

import './css/main.scss'

if ( document.getElementById("bookSummary") ) {
  new Summary()
}

if ( document.getElementById("sectionContainer") ) {
  new Slider()
}

if ( document.getElementById("postArchive") ) {
  new Archive()
}

if ( document.querySelector(".section-nav") ) {
  new ContentMenu()
}
