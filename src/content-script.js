/**
 * ***************
 * Begin execution
 * ***************
 */
// Store messages and utility functions in a global object
window.TestSpy = {
  optimizelyClassic: {},
  optimizelyX: {},
  adobeTestAndTarget: {},
};

logGreeting();
checkOptimizelyClassic();
checkOptimizelyX();
checkAdobeTestAndTarget();
/**
 * *************
 * End execution
 * *************
 */

/**
 * ********************
 * Function definitions
 * ********************
 */
function logGreeting() {
  log('TestSpy');
  log('--------------------');
}

/**
 * Optimizely Classic
 */
function checkOptimizelyClassic() {
  if (optimizelyClassicIsPresent()) {
    window.TestSpy.optimizelyClassic['present'] = true;
    log('Optimizely Classic present:');
    getOptimizelyClassicInfo();
  } else {
    window.TestSpy.optimizelyClassic['present'] = false;
    log('Optimizely Classic not present');
  }

  function optimizelyClassicIsPresent() {
    return window.optimizely && !window.optimizely.hasOwnProperty('get');
  }

  function getOptimizelyClassicInfo() {
    // TODO
  }
}

/**
 * Optimizely X
 */
function checkOptimizelyX() {
  if (optimizelyXIsPresent()) {
    window.TestSpy.optimizelyX['present'] = true;
    log('Optimizely X present:');
    getOptimizelyXInfo();
  } else {
    window.TestSpy.optimizelyX['present'] = false;
    log('Optimizely X not present');
  }

  function optimizelyXIsPresent() {
    return window.optimizely && window.optimizely.hasOwnProperty('get');
  }

  function getOptimizelyXInfo() {
    getActiveExperiments();
    getActiveCampaigns();
    getActiveAudiences();
    getActivePages();

    function getActiveExperiments() {
      let activeExperiments = optimizely.get('state').getActiveExperimentIds();
      if (activeExperiments.length) {
        window.TestSpy.optimizelyX['activeExperiments'] = [];
        log('  Active Experiments:');
        // getting Experiment States of only Active experiments
        let states = optimizely
          .get('state')
          .getExperimentStates({isActive: true});
        activeExperiments.forEach(getExperimentInfo);

        function getExperimentInfo(experimentID) {
          let experimentObj = {};
          if (states[experimentID] !== undefined) {
            experimentObj['experimentName'] =
              states[experimentID].experimentName;
            experimentObj['experimentID'] = experimentID;
            experimentObj['variation'] = states[experimentID].variation;
            window.TestSpy.optimizelyX['activeExperiments'].push(experimentObj);
            logBold(`    ${experimentObj['experimentName']}`);
            log(`      ${JSON.stringify(experimentObj['variation']['name'])}`);
          }
        }
      } else {
        log('--No active experiments');
        window.TestSpy.optimizelyX['activeExperiments'] = null;
      }
    }

    function getActiveCampaigns() {
      let activeCampaignsName = [];
      let activeCampaigns = optimizely.get('state').getCampaignStates({
        isActive: true,
      });
      // converting obj keys into an array of activeCampaignIds to getActiveCampaignName
      let activeCampaignId = Object.keys(activeCampaigns);

      activeCampaignId.forEach(getActiveCampaignName);
      function getActiveCampaignName(campaignId) {
        activeCampaignsName.push(activeCampaigns[campaignId]['campaignName']);
      }
      log('  Active Campaigns:');
      log(activeCampaignsName);
    }

    function getActiveAudiences() {
      let audiences = [];
      let d = window.optimizely.get('data');
      optimizely
        .get('state')
        .getActiveExperimentIds()
        .map(function(exp_id) {
          audiences.push(d.experiments[exp_id].audienceName);
        });
      window.TestSpy.optimizelyX['activeAudiences'] = audiences;
      log('  Active Audiences:');
      log(audiences);
    }

    function getActivePages() {
      let activePagesArr = [];
      let activePages = window.optimizely.get('state').getPageStates({
        isActive: true,
      });
      let activePagesId = Object.keys(activePages);
      activePagesId.forEach(getActivePagesName);

      function getActivePagesName(pageId) {
        activePagesArr.push(activePages[pageId]['name']);
      }
      log('  Active Pages:');
      log(activePagesArr);
    }
  }
}

/**
 * Adobe Test & Target
 */
function checkAdobeTestAndTarget() {
  if (adobeTestAndTargetIsPresent()) {
    window.TestSpy.adobeTestAndTarget['present'] = true;
    log('Adobe Test & Target present:');
    log(getAdobeTestAndTargetInfo());
  } else {
    window.TestSpy.adobeTestAndTarget['present'] = false;
    log('Adobe Test & Target not present');
  }

  // TODO returning false on marketplace.hpe.com - why?
  function adobeTestAndTargetIsPresent() {
    return (window.adobe && window.adobe.target) || window.TNT;
  }

  function getAdobeTestAndTargetInfo() {
    // TODO
  }
}

/**
 *  Utility functions
 */
function log(msg) {
  console.info('TestSpy:', msg);
}

function logBold(msg) {
  console.info(
    '%cTestSpy:' + `%c ${msg}`,
    'font-weight: normal',
    'font-weight: 900',
  );
}
