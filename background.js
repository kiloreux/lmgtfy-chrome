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

}
