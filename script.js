
function getRNA(){
  let DNA = document.getElementById('DNA').value;
  let RNA = '';
  for(let i = 0; i < DNA.length; ++i){
    if (DNA[i] == 'G') RNA += 'C';
    else if(DNA[i] == 'C') RNA += 'G';
    else if(DNA[i] == 'T') RNA += 'A';
    else if(DNA[i] == 'A') RNA += 'U';
    else RNA += DNA[i];
  }
  document.getElementById('RNA').innerHTML = RNA;
}

function HandlerDNA_oninput() {
  let DNA = document.getElementById('DNA').value;
  document.getElementById('converter-warnings').innerHTML = '';
  let length = DNA.length;
  var trulyDNA;
  if (DNA == '') return '';
  else if (DNA[length - 1] == 'A') return '';
  else if (DNA[length - 1] == 'C') return '';
  else if (DNA[length - 1] == 'G') return '';
  else if (DNA[length - 1] == 'T') return '';
  else if (DNA[length - 1] == 'U') return '';
  else {
    if (length == 1) trulyDNA = '';
    else trulyDNA = DNA.substring(0, length - 1);
    document.getElementById('converter-warnings').innerHTML = "*Valid symbols: A-C-G-T-U";
  }
  document.getElementById('DNA').value = trulyDNA;
}

function HandlerDNA_onpaste() {
  setTimeout(function(){
    let DNA = document.getElementById('DNA').value;
		document.getElementById('converter-warnings').innerHTML = '';
    let length = DNA.length;
    var cleanerDNA = [];
    var trulyDNA = '';
    for (let i = 0; i < length; ++i){
      if (DNA[i] == 'A' || DNA[i] == 'C') cleanerDNA.push(DNA[i]);
      else if (DNA[i] == 'G' || DNA[i] == 'T') cleanerDNA.push(DNA[i]);
      else if (DNA[i] == 'U') cleanerDNA.push(DNA[i]);
			else document.getElementById('converter-warnings').innerHTML = "*Valid symbols: A-C-G-T-U<br>*Warning: Invalid symbols have been removed";
    }
    for (let i = 0; i < cleanerDNA.length; ++i){
      trulyDNA += cleanerDNA[i];
    }
    document.getElementById('DNA').value = trulyDNA;
}, 4);
}

function substr(word = '', start = 0, n = word.length){
  var substrResult = document.getElementById('substr-result');
  var substrWarnings = document.getElementById('substr-warnings');
  substrResult.innerHTML = word.substr(start, n);
  return word.substr(start, n);
    /*if (start == "") start = 0;
  if (n == "") n = word.length;
  if (word == '' || Math.abs(start) >= word.length) {
    substrWarnings.innerHTML = '*The word is missing or the "start" is greater than or equal to the length of the word. Enter "start" which is less than the word length.'
    substrWarnings.innerHTML += ' Standard value applied.';
    substrResult.innerHTML = "' '";
    return;
  }
  if (n > word.length) n = word.length;
  if (n <= 0) {
    substrWarnings.innerHTML = 'Length cannot be less than or equal to zero.';
    substrWarnings.innerHTML += ' Standard value applied.';
    substrResult.innerHTML = "' '";
  }
  let cuttedWord = '';

  if (start < 0) {
    start = word.length - 1; //not full
  }

  if (start + n > word.length) {
    for (let i = start; i != word.length; ++i){
      cuttedWord += word[i];
    }
  }
  else {
    for (let i = start; i != start + n; ++i){
      cuttedWord += word[i];
    }
  }
  substrResult.innerHTML = cuttedWord;*/
}

function HandlerPalidrom_oninput(input) {
	if (input.length == 0) document.getElementById('palindrom-result').innerHTML = '';
}

function isPalindrom(currentWord){
	document.getElementById('palindrom-result').innerHTML = '';
	let length = currentWord.length;
  if (length <= 1) document.getElementById('palindrom-result').innerHTML = 'true';
  else if (currentWord[length - length] == currentWord[length - 1]) 
	return isPalindrom(substr(currentWord, length - length + 1, length - 2));
  else document.getElementById('palindrom-result').innerHTML = 'false';
}