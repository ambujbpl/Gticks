function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

$.fn.capitaliseAll = function() {
    return this.each(function() {
        var $this = $(this),
            text = $this.text(),
            tokens = text.split(" ").filter(function(t) {return t != ""; }),
            res = [],
            i,
            len,
            component;
        for (i = 0, len = tokens.length; i < len; i++) {
            component = tokens[i];
            res.push(component.substring(0, 1).toUpperCase());
            res.push(component.substring(1));
            res.push(" "); // put space back in
        }
        $this.text(res.join(""));
    });
};
function capitalizeFirstLetterEachWordSplitBySpace(string){
var words = string.split(" ");
var output = "";
for (i = 0 ; i < words.length; i ++){
lowerWord = words[i].toLowerCase();
lowerWord = lowerWord.trim();
capitalizedWord = lowerWord.slice(0,1).toUpperCase() + lowerWord.slice(1);
output += capitalizedWord;
if (i != words.length-1){
output+=" ";
}
}//for
output[output.length-1] = '';
return output;
}
