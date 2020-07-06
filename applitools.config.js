module.exports = {
    concurrency: 10,
    apiKey: 'xyz',
    //
    browser: [
        // Add browsers with different viewports
        {width: 1200, height: 700, name: 'chrome'},
        {width: 1200, height: 700, name: 'firefox'},
        {width: 1200, height: 700, name: 'edgechromium'},
        {width: 768, height: 700, name: 'chrome'},
        {width: 768, height: 700, name: 'firefox'},
        {width: 768, height: 700, name: 'edgechromium'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait',name: 'chrome',width: 500, height: 700}
    ],
    // set batch name to the configuration
    batchName: 'UFG Hackathon'
}