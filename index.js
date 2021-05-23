class Formatter {
  
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize (string) {
    let words = string.split(' ');

    for(let i = 0; i < words.length; i++){
      let unwantedRegex = /^.*\b(the|a|an|but|of|and|for|at|by|from)\b.*$/gm;

      if (i === 0) {
        words[i] = this.capitalize(words[i]);
      }
      if (unwantedRegex.test(words[i])){
        words[i] = words[i].toLowerCase();
      }
      else {
        words[i] = this.capitalize(words[i]);
      }
    }
    return words.join(' ');
  }
}