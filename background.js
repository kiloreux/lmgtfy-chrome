chrome.contextMenus.create({title: "lmgtfy", contexts:["selection"], onclick: lmgtfy});

var urlQuery = "http://lmgtfy.com/?q=";


function sanitize(input) {
    input = input.trim();
    input = input.replace(/\s+/g, ' ');
    return input;
}

function lmgtfy(info)
{
    var data = encodeURIComponent(info.selectionText);
    var link = urlQuery.concat(data);
    copyToClipboard(link);
}



function copyToClipboard(text) {
  const input = document.createElement('input');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
};
