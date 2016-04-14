exports.check = function(text)
{
  var assci_array = [];
  for (var i = text.length - 1; i >= 0; i--) {
    if( assci_array[ text[i] ] == true )
      return false;

    assci_array[ text[i] ] =  true;
  }
  return true;
}
