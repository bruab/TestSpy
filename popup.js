// Watch for clicks to 'Click Me' and then 
// inject src/content-script.js, which logs stuff
document.addEventListener('DOMContentLoaded', () => {
  var button = document.getElementById('container');
  /* eslint-disable no-undef */
  var injectURL = chrome.extension.getURL('src/content-script.js');
  var injectCode = generateInjectScript(injectURL, 'body');
  button.addEventListener('click', () => {
    chrome.tabs.executeScript({
      code: injectCode
    });
  });
  /* eslint-enable no-undef */
});

function generateInjectScript (filePath, tag) {
  return `(function () {
    var node = document.getElementsByTagName('` + tag + `')[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', '` + filePath + `');
    node.appendChild(script);
  })()`;
}
