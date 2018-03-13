function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var suffix;
  
  if (vowels.includes(str.charAt(0))) {
    suffix = "way";
    return str + suffix;
  } else {
    for (var i = 0; i < str.length; i++) {
      if (vowels.includes(str.charAt(i))) {
        suffix = str.slice(0, i) + "ay";
        return str.slice(i) + suffix;
      }
    }
  }  
}