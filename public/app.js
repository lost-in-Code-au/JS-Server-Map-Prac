const initialize = function() {
  const beachLocation = {lat:-38.4362389, lng:144.8445914 }
  const mainMap = new MapWrapper(beachLocation)
}

window.addEventListener("load", initialize)
