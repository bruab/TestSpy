import $ from 'jquery';

export default function () {
  function generateInjectScript(filePath, tag) {
    return (
      `(function () {
      var node = document.getElementsByTagName('` +
      tag +
      `')[0];
      var script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', '` +
      filePath +
      `');
      node.appendChild(script);
    })()`
    );
  }

  // Watch for clicks to 'Click Me' and then
  // inject src/content-script.js, which logs stuff
    var button = document.getElementById("container");
    /* eslint-disable no-undef */
    var injectURL = chrome.extension.getURL("contentScript.js");
    var injectCode = generateInjectScript(injectURL, "body");
    // button.addEventListener('click', () => {
    chrome.tabs.executeScript({
      code: injectCode,
      // });
    });
}

export function createExpiremtList(arr) {
  var exHtml = `<table class="blueTable">
  <thead> <tr>
      <th>Experiment ID</th>
      <th>Experiment Name</th>
    </tr></thead><tbody>`;

  arr.forEach((element) => {
    var list = "";
    list += `<td>${element.experimentID}</td>`;
    list += `<td>${element.experimentName}</td>`;
    exHtml += `<tr>${list}</tr>`;
  });
  return exHtml + "</tbody></table>";
}

export function createVariationList(arr) {
  var vrHtml = `<table class="blueTable">
  <thead> <tr>
    <th>Variation Id</th>
    <th>Variation Name</th>
    </tr></thead><tbody>`;
  arr.forEach((element) => {
    if (element.variation.hasOwnProperty("id")) {
      var list = "";
      list += "<td>" + element.variation.id + "</td>";
      list += "<td>" + element.variation.name + "</td>";
      vrHtml += "<tr>" + list + "</tr>";
    }
  });
  return vrHtml + "</tbody></table>";
}

export function activeAudiences(arr) {
  var actAudience = "";
  arr.forEach((element) => {
    actAudience += "<li>" + element + "</li>";
  });
  return actAudience;
}

export function activePages(arr) {
  var actPages = "";
  arr.forEach((element) => {
    actPages += "<li>" + element + "</li>";
  });
  return actPages;
}

export function evaluateAccordian() {
  $(".list-item").click(function () {
    if($(this).next().css('display') == 'none'){
      $(this).addClass('spy-active')
    }else{
      $(this).removeClass('spy-active')
    }
    $(this).next().slideToggle(300);
  });

  $(".list-inner-item:eq(0)").show();

  if($(".list-item").next().css('display') == 'block'){
    $(".list-item").addClass('spy-active');
  }
}

export function atLeastOneToolPresent(obj) {
  var result = false;

  for (var i in obj) {
    if (obj[i].present === true) {
      result = true;
      break;
    }
  }

  return result;
}

// updating dom
export function updateDom(obj) {
  console.log('called')
  if (atLeastOneToolPresent(obj)) {
    for (const key in obj) {
      if (obj[key].present) {
        var data = `<div class="row">
              <div class="box-item clearfix">
                  <div class="logo-box">
                      <div class="logo">
                          <img src="${obj[key].src.imgLink}" />
                      </div>
                  </div>
                  <div class="header-left-contant">
                      <h2>${key}</h2>
                  </div>
                  <div class="list clearfix">
                      <div class="list-item">
                          <a href="#">
                              <h3>Experiment Info</h3>
                          </a>
                      </div>
                      <diV class="list-inner-item">
                          <div class="inner-text">
                                  ${
                                    obj[key].activeExperiments &&
                                    obj[key].activeExperiments.length
                                      ? createExpiremtList(
                                          obj[key].activeExperiments
                                        )
                                      : "<ul><li>No Active Experiment Found</li></ul>"
                                  }
                          </div>
                      </diV>
                      <div class="list-item">
                          <a href="#">
                              <h3>Variation Info</h3>
                          </a>
                      </div>
                      <diV class="list-inner-item">
                          <div class="inner-text">
                                  ${
                                    obj[key].activeExperiments &&
                                    obj[key].activeExperiments.length
                                      ? createVariationList(
                                          obj[key].activeExperiments
                                        )
                                      : "<ul><li>No Active Experiment Found</li></ul>"
                                  }
                          </div>
                      </diV>
                      <div class="list-item">
                          <a href="#">
                              <h3>Active Audience</h3>
                          </a>
                      </div>
                      <diV class="list-inner-item">
                          <div class="inner-text">
                                  <ul>
                                  ${
                                    obj[key].activeAudiences &&
                                    obj[key].activeAudiences.length > 0
                                      ? activeAudiences(
                                          obj[key].activeAudiences
                                        )
                                      : "<li>No Active Audience Found</li>"
                                  }
                                  </ul>
                          </div>
                      </diV>
                      <div class="list-item">
                          <a href="#">
                              <h3>Active Pages</h3>
                          </a>
                      </div>
                      <diV class="list-inner-item">
                          <div class="inner-text">
                                  <ul>
                                  ${
                                    obj[key].activePages &&
                                    obj[key].activePages.length > 0
                                      ? activePages(obj[key].activePages)
                                      : "<li>No Active Page Found</li>"
                                  }
                                  </ul>
                          </div>
                      </diV>
                  </div>
              </div>
          </div>`;

        if (document.querySelector(".err")) {
          document.querySelector(".err").remove();
        }
        var section = document.createElement("div");
        section.innerHTML = data;
        document.querySelector(".bm-pop-content").appendChild(section);
      }
    }
    evaluateAccordian();
  } else {
    evaluateAccordian();
    if (document.querySelector(".err")) {
      document.querySelector(".err h1").classList.add("bmNoPlatform");
      document.querySelector(".err h1").textContent =
        "No testing platform identified";
    }
  }
}

//-------------------------------------ADOBE TEST AND TARGER ---------------------------//

function GenerateAdobeSections(arr, e) {
  var td = "";
  arr.forEach(function (obj) {
    td += `<tr><td>${obj[e.toLowerCase() + ".id"]}</td>`;
    td += `<td>${obj[e.toLowerCase() + ".name"]}</td></tr>`;
  });
  return td;
}

function createAdobeSection(arr) {
  var sectionhtml = "";

  var sections = ["Activity", "Experience", "Offer", "Option"];

  sections.forEach(function (e) {
    sectionhtml += `<div class="list-item">
                    <a href="#">
                        <h3>${e} Info</h3>
                    </a>
                </div>
                <diV class="list-inner-item">
                    <div class="inner-text">
                    <table class="blueTable">
                        <thead> 
                        <tr>
                        <th>${e} Id</th>
                        <th>${e} Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        ${GenerateAdobeSections(arr, e)}
                        </tbody>
                    </table>
                    </div>
                </diV>`;
  });

  return sectionhtml;
}

export function updateDomForAdobe(arr) {
  var data = `<div class="row">
              <div class="box-item clearfix">
                  <div class="logo-box">
                      <div class="logo">
                          <img src='https://bm-test-dev.s3.us-east-2.amazonaws.com/cws/extension/adobeTest.jpg' />
                      </div>
                  </div>
                  <div class="header-left-contant">
                      <h2>Adobe Test & Target</h2>
                  </div>
                  <div class="list clearfix">
                    ${createAdobeSection(arr)}
                  </div>
              </div>
          </div>`;

  if (document.querySelector(".err")) {
    document.querySelector(".err").remove();
  }
  var section = document.createElement("div");
  section.innerHTML = data;
  document.querySelector(".bm-pop-content").appendChild(section);
}
