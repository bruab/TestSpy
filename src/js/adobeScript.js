import { updateDomForAdobe, evaluateAccordian } from "./popup/popup";
import { FEHelper } from "./app/services/helper";
import { sliderHTML, sliderCss } from "./app/services/constant";

// adding popup onPage loader if editor is enabled
function addpopup() {
  function init() {
    var slider = document.createElement("div");
    var attr = document.createAttribute("style");
    attr.value = "display:none;";
    slider.setAttributeNode(attr);
    slider.id = 'bm-testspy';
    slider.className = "bm-popup do_no_popunder";
    slider.innerHTML = sliderHTML;
    document.querySelector("body").prepend(slider);

    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = sliderCss;
    document.getElementsByTagName("head")[0].appendChild(style);

    FEHelper.live(".bm-close-pop", "click", () => {
      if (
        document.querySelector(".bm-popup").classList.contains("bm-slidein")
      ) {
        document.querySelector(".bm-popup").classList.remove("bm-slidein");
      } else {
        document.querySelector(".bm-popup").classList.add("bm-slidein");
      }
    });
  }

  FEHelper.onLoadAdobeEvent(init, 50, 10000);
}

chrome.storage.local.get("enabled", (data) => {
  if (data.enabled) {
    addpopup();
    (function () {
      document.addEventListener("at-request-succeeded", function (e) {
        var tokens = e.detail.responseTokens;
        if (isEmpty(tokens)) {
          return;
        }
        var uniqueTokens = distinct(tokens);
        FEHelper.onPopupLoaded(() => {
          updateDomForAdobe(uniqueTokens); evaluateAccordian()},50, 10000);
      });

      function isEmpty(val) {
        return val === undefined || val == null || val.length <= 0
          ? true
          : false;
      }

      function key(obj) {
        return Object.keys(obj)
          .map(function (k) {
            return k + "" + obj[k];
          })
          .join("");
      }

      function distinct(arr) {
        var result = arr.reduce(function (acc, e) {
          acc[key(e)] = e;
          return acc;
        }, {});
        return Object.keys(result).map(function (k) {
          return result[k];
        });
      }
    })();
  }
});
