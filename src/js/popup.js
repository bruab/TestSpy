import "../css/popup.css";
import popup, {getCookies, updateDom} from "./popup/popup";

popup();

// I have use cookie here because of chrome runtime needs extension id to be passed if you wann send message from webpage to extension
// https://developer.chrome.com/extensions/messaging

// its kind of tricky because you cannot use externally_connectable to be wildcard in manefesto

// trick that I used

chrome.tabs.getSelected(null, function(tabs) {
    var tabUrl = tabs.url;
    setTimeout(function(){
        getCookies(tabUrl, "Test_Spy", function(tooInfo) {
            updateDom(JSON.parse(tooInfo))
        });
    },500)
});
   