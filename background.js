const defaultFilters = [
  "*://*.doubleclick.net/*",
  "*://partner.googleadservices.com/*",
  "*://*.googlesyndication.com/*",
  "*://*.google-analytics.com/*",
  "*://creative.ak.fbcdn.net/*",
  "*://*.adbrite.com/*",
  "*://*.exponential.com/*",
  "*://*.quantserve.com/*",
  "*://*.scorecardresearch.com/*",
  "*://*.zedo.com/*",
];
//** means regex ie pattern , anything that looks like this */
chrome.webRequest.onBeforeRequest.addListener(
  //Fires when a request is about to occur. This event is sent before any TCP connection is made and can be used to cancel or redirect requests.
  //takes three arguments
  function (details) {
    //callback function
    return { cancel: true }; //blocks all our requests
  },
  { urls: defaultFilters }, //specifies filter ie which site to block
  ["blocking"]
);
