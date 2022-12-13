function generate(){
  var quotes={
    "-deepak chopra": '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolore."',
    "-cs lewis":
    '"Lorem ipsuasmncanklcnalkcnam dolor sit amet consectetur adipisicing elit. Suscipit, dolore."',
    "-Nabeel Khan":
    '"Lorem ipsum dolor sit amet conseclkeneklnklen kjwflkwtetur adipisicing elit. Suscipit, dolore."'
  }

  var authors =Object.keys(quotes);

  var author =authors[Math.floor(Math.random() * authors.length)]

  var quote=quotes[author]

  document.getElementById("quote").innerHTML=quote;
  document.getElementById("author").innerHTML=author;
}