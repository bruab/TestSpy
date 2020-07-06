import "../css/popup.css";
import popup, { injectInstruction} from "./popup/popup";

chrome.storage.local.get('enabled', data => {
    if (data.enabled) {
        popup();
    }else{
        injectInstruction();
    }
});

var enabled = false; //disabled by default
var myButton = document.getElementById('toggle');

chrome.storage.local.get('enabled', data => {
    enabled = !!data.enabled;
    myButton.textContent = enabled ? 'Disable' : 'Enable';
});

myButton.onclick = () => {
    enabled = !enabled;
    myButton.textContent = enabled ? 'Disable' : 'Enable';
    chrome.storage.local.set({enabled:enabled});
};