// adobe Target
export function adobeTestAndTargetIsPresent() {
    return (window.adobe && window.adobe.target) || window.TNT;
}

export function getAdobeTestAndTargetInfo() {
    // TODO
}

// optimizely Classic

export function optimizelyClassicIsPresent() {
    return window.optimizely && !window.optimizely.hasOwnProperty('get');
}

export function googleOptimizeIsPresent(){
    return window.google_optimize && window.google_optimize.hasOwnProperty('get');
}

export function getOptimizelyClassicInfo() {
    // TODO
}

// optimizely X 

export function optimizelyXIsPresent() {
    return window.optimizely && window.optimizely.hasOwnProperty('get');
}

export function log(msg,option='') {
    console.info('TestSpy:', msg, option);
}
export function logBold(msg) {
    console.info(
        '%cTestSpy:' + `%c ${msg}`,
        'font-weight: normal',
        'font-weight: 900',
    );
  }

// function related to optimizelyX

export function getActiveExperiments() {
    let activeExperiments = optimizely.get('state').getActiveExperimentIds();
    if (activeExperiments.length) {

        window.TestSpy.optimizelyX['activeExperiments'] = [];
        log('  Active Experiments:');
        // getting Experiment States of only Active experiments
        let states = optimizely
            .get('state')
            .getExperimentStates({
                isActive: true
            });
        activeExperiments.forEach(function(experimentID) {
            getExperimentInfo(experimentID, states)
        });

    } else {
        log('--No active experiments');
        window.TestSpy.optimizelyX['activeExperiments'] = null;
    }
}


export function getExperimentInfo(experimentID, states) {
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


export function getActiveCampaignName(campaignId, activeCampaigns) {
    return activeCampaigns[campaignId]['campaignName'];
}

export function getActiveCampaigns() {
    let activeCampaignsName = [];
    let activeCampaigns = optimizely.get('state').getCampaignStates({
        isActive: true,
    });
    // converting obj keys into an array of activeCampaignIds to getActiveCampaignName
    let activeCampaignId = Object.keys(activeCampaigns);

    activeCampaignId.forEach(function(activeCampaign) {
        activeCampaignsName.push(getActiveCampaignName(activeCampaign, activeCampaigns))
    });


    log('  Active Campaigns:');
    log(activeCampaignsName);
}


export function getActiveAudiences() {
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

export function getActivePagesName(pageId, activePages) {
    return activePages[pageId]['name'];
}

export function getActivePages() {
    let activePagesArr = [];
    let activePages = window.optimizely.get('state').getPageStates({
        isActive: true,
    });
    let activePagesId = Object.keys(activePages);
    activePagesId.forEach(function(pageId) {
        activePagesArr.push(getActivePagesName(pageId,activePages))
    });

    window.TestSpy.optimizelyX['activePages'] = activePagesArr;

    log('  Active Pages:');
    log(activePagesArr);
}

    export function getCookieValue(cookieName) {
        var result = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
        return result ? result.pop() : '';
    }

export function getGoogleOptimizeExperimentId() {
    var cookie = getCookieValue('_gaexp');
    if (cookie == undefined) {
        return "No Experiment is Running";
    } else {
        var fields = cookie.split('.');
        window.TestSpy.googleOptmize['activeExperiments'] = [];
        window.TestSpy.googleOptmize.activeExperiments.push({experimentName:'Not Found',experimentID:fields[2] || 'Not Found'})
        return fields[2];
    }
}

export function getGoogleOptimizeVariationInfo(experimentID) {
    window.TestSpy.googleOptmize['activeExperiments'][0].variation = {id : JSON.stringify(window.google_optimize && window.google_optimize.get(experimentID)) || 'No variation is running', name:'Not Found'};
    return window.google_optimize && window.google_optimize.get(experimentID) || 'No variation is running';
}