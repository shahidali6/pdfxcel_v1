function decodetURL() {
  let urlToDecode = document.getElementById("encode-url").value;
    
    document.getElementById("decode-url").value = decodeURIComponent(urlToDecode);
}

function clearTextBoxes() {
  document.getElementById("encode-url").value="";    
    document.getElementById("decode-url").value="";
}