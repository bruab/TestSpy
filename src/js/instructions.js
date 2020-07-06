import { FEHelper } from "./app/services/helper";
import { instuctionsHTML, sliderCss } from "./app/services/constant";


// adding popup onPage loader with instructions if editor is disabled
(function() {
    if(!document.querySelector('.bm-pop-content p')){
        var slider = document.createElement("div");
        var attr = document.createAttribute("style");
    attr.value = "display:none;";
    slider.setAttributeNode(attr);
    slider.id = 'bm-testspy';
    slider.className = "bm-popup do_no_popunder";
    slider.innerHTML = instuctionsHTML;
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
})();


if( document.querySelector('.bm-popup.do_no_popunder') && document.querySelector('.bm-popup.do_no_popunder').style.display == 'block'){
    document.querySelector('.bm-popup.do_no_popunder').style.display = 'none';
}else if(document.querySelector('.bm-popup.do_no_popunder') && document.querySelector('.bm-popup.do_no_popunder').style.display == 'none'){
    document.querySelector('.bm-popup.do_no_popunder').style.display = 'block';

    if (!document.querySelector(".bm-popup").classList.contains("bm-slidein")){
        document.querySelector(".bm-popup").classList.add("bm-slidein");
      }
}