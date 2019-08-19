/**
 * puppeteer wrapper to check if the site is responsive
 * @author Talha Habib
 * @version 1.0.0
 * @module site-responsiveness
 * @see {@link https://github.com/Multi-Thinker/site-responsiveness|Github}
 * @description a simple tool to check if the site is responsive using puppeteer.
 * @param {string} url
 * @returns {promise}
 */
let isSiteResponsive = async (url) =>
{
    let startTime = Date.now();
    let puppeteer = require('puppeteer');
    /**
     *
     * @param {string} url
     * @description add protocol if is missing
     */
    let checkURL = (url) => (url == '' || url == null || url == undefined) ? false : (!url.match(/^[a-zA-Z]+:\/\//)) ? 'http://' + url.replace(/.+\/\//igm, '') : url;
    if (url != '' && url != null && url != NaN && url != undefined && typeof url == 'string')
    {
        url = checkURL(url);
        let configuration = {
            headless: true,
            timeout: 1000 * 60 * 1,
            ignoreHTTPSErrors: true,
            args: [
                '--args',
                '--disable-extensions',
                '--ignore-certificate-errors',
                '--disable-dev-profile',
                '--disable-setuid-sandbox',
                '--no-sandbox',
                '--disable-translate',
                '--safebrowsing-disable-auto-update',
                '--disable-sync',
                '--metrics-recording-only',
                '--disable-default-apps',
                '--headless',
                '--hide-scrollbars',
                '--allow-http-background-page',
                '--allow-http-screen-capture',
                '--allow-insecure-localhost',
                '--allow-no-sandbox-job',
                '--allow-running-insecure-content',
                '--ash-disable-smooth-screen-rotation',
                '--ash-disable-touch-exploration-mode',
                '--audio-output-channels=0',
                '--cc-layer-tree-test-long-timeout',
                '--disable-3d-apis',
                '--disable-accelerated-video-decode',
                '--disable-avfoundation-overlays[11]',
                '--disable-bookmark-reordering',
                '--disable-boot-animation',
                '--disable-browser-task-scheduler',
                '--disable-bundled-ppapi-flash',
                '--disable-captive-portal-bypass-proxy',
                '--disable-cast-streaming-hw-encoding',
                '--disable-clear-browsing-data-counters',
                '--disable-client-side-phishing-detection',
                '--disable-cloud-import',
                '--disable-component-cloud-policy',
                '--disable-component-extensions-with-background-pages',
                '--disable-component-update',
                '--disable-demo-mode',
                '--disable-device-discovery-notifications',
                '--disable-dinosaur-easter-egg',
                '--disable-drive-search-in-app-launcher',
                '--disable-file-system',
                '--disable-flash-3d',
                '--disable-flash-stage3d',
                '--disable-gesture-editing',
                '--disable-gesture-requirement-for-presentation',
                '--disable-gesture-typing',
                '--disable-glsl-translator',
                '--disable-kill-after-bad-ipc',
                '--disable-legacy-window[1]',
                '--disable-local-storage',
                '--disable-logging',
                '--disable-logging-redirect[8]',
                '--disable-login-animations',
                '--disable-login-screen-apps[8]',
                '--disable-low-latency-dxva',
                '--disable-media-session-api[6]',
                '--disable-namespace-sandbox',
                '--disable-native-gpu-memory-buffers',
                '--disable-new-channel-switcher-ui',
                '--disable-new-korean-ime',
                '--disable-new-virtual-keyboard-behavior',
                '--disable-new-zip-unpacker',
                '--disable-notifications',
                '--disable-ntp-most-likely-favicons-from-server',
                '--disable-nv12-dxgi-video',
                '--disable-offer-upload-credit-cards',
                '--disable-office-editing-component-extension',
                '--disable-offline-auto-reload',
                '--disable-offline-auto-reload-visible-only',
                '--disable-password-generation',
                '--disable-per-user-timezone',
                '--disable-permissions-api',
                '--disable-physical-keyboard-autocorrect',
                '--disable-pinch',
                '--disable-plugins',
                '--disable-plugins-discovery',
                '--disable-pnacl-crash-throttling',
                '--disable-rgba-4444-textures',
                '--disable-signin-promo',
                '--disable-signin-scoped-device-id',
                '--disable-software-rasterizer',
                '--disable-speech-api',
                '--disable-suggestions-ui',
                '--disable-sync-app-list',
                '--disable-sync-types',
                '--disable-system-timezone-automatic-detection',
                '--disable-tab-for-desktop-share',
                '--disable-third-party-keyboard-workaround',
                '--disable-threaded-animation',
                '--disable-timeouts-for-profiling[6]',
                '--disable-touch-adjustment',
                '--disable-touch-drag-drop',
                '--disable-v8-idle-tasks',
                '--disable-vaapi-accelerated-video-encode[8]',
                '--disable-web-notification-custom-layouts',
                '--disable-web-security',
                '--disable-webgl',
                '--disable-xss-auditor',
                '--no-default-browser-check',
                '--no-experiments',
                '--no-first-run',
                '--no-proxy-server',
                '--ui-disable-partial-swap',
                '--automatic-tab-discarding',
                '--aggressive-cache-discard',
                '--aggressive-tab-discard',
                '--disable-2d-canvas-clip-aa',
                '--disable-2d-canvas-image-chromium',
                '--disable-accelerated-2d-canvas',
                '--disable-backing-store-limit',
                '--disable-blink-features',
                '--disable-canvas-aa',
                '--disable-d3d11',
                '--disable-databases',
                '--disable-display-list-2d-canvas',
                '--disable-es3-apis',
                '--disable-extensions-file-access-check',
                '--disable-file-manager-touch-mode',
                '--disable-fullscreen-tab-detaching',
                '--disable-gaia-services',
                '--disable-gl-extensions',
                '--disable-gpu-sandbox',
                '--disable-gpu-vsync',
                '--disable-gpu-watchdog',
                '--disable-in-process-stack-traces',
                '--disable-login-screen-apps',
                '--disable-pepper-3d',
                "--disable-remote-fonts",
                '--disable-remote-core-animation',
                '--disable-reading-from-canvas',
                '--disable-single-click-autofill',
                '--disable-smooth-scrolling',
                '--disable-voice-input',
                '--disable-translate-new-ux',
                '--disable-usb-keyboard-detect',
                '--disable-webgl-image-chromium',
                '--disable-zero-copy',
                '--hide-icons',
                '--no-service-autorun',
                '--no-session-id',
                '--no-startup-window',
                '--process-per-site',
                '--single-process',
                '--skip-gpu-data-loading',
                '--no-zygote',
                '--wm-window-animations-disabled',
                '--noerrdialogs',
                '--memory-pressure-off',
                '--renderer'
            ]
        };
        let browser = await puppeteer.launch(configuration);
        let page = await browser.newPage();
        await page.setRequestInterception(true);
        await page.on('request', r => r.continue());
        await page.setJavaScriptEnabled(true);
        try
        {
            await page.goto(url, { waitUntil: 'networkidle0', followRedirect: true })
                .catch(e => console.error(e));
        } catch (e)
        {
            console.error(e);
            return 'error, see logs';
        }
        await page.waitFor(1000);
        let isResponsive;
        try
        {
            isResponsive = await page.evaluate(c =>
            {
                return (() =>
                {
                    var mediaRules = Array.from(document.styleSheets).map((sheet, i) =>
                    {
                        try
                        {
                            return Array.from(sheet.rules).map(rules =>
                            {
                                if (rules instanceof CSSMediaRule && rules.media != null && rules.media != undefined)
                                {
                                    return rules.media
                                }
                            })
                        } catch (e) { }
                    }).join('');
                    if (!mediaRules && mediaRules != '' && mediaRules != null && mediaRules != undefined) return;
                    return Array.from(new Set(mediaRules.split(','))).filter(e => e != '' && e != null && e != undefined && e != 'print').length > 1;
                })()
            });
        } catch (e)
        {
            isResponsive = 'error, see console';
            console.error(e);
        }
        await page.close();
        await browser.close();
        let timeTaken = ((Date.now() - startTime) / 1000) + ' seconds';
        return { isResponsive, timeTaken };
    } else
    {
        return 'error, provide url';
    }
}
module.exports = isSiteResponsive;