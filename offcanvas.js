function menuToggle( element, className ) {
  var currentClasses = element.className.split(" ");
  var hasClass = false;

  for ( var i = 0; i < currentClasses.length; i++ ) {
    if ( currentClasses[i] == className ) {
      currentClasses.splice( i, 1 );
      hasClass = true;
      break;
    }
  }

  if ( hasClass ) {
    element.className = currentClasses.join(" ");
    document.getElementById('offcanvas-site-overlay').className = '';
  } else {
    element.className = element.className + ' ' + className;
    document.getElementById('offcanvas-site-overlay').className = 'show';
  }
}
