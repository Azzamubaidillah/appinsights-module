"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAppInsights = initAppInsights;
exports.trackCampaignDetails = trackCampaignDetails;
exports.trackDeviceModel = trackDeviceModel;
exports.trackEvent = trackEvent;
exports.trackPageView = trackPageView;
exports.trackUserProfile = trackUserProfile;
var _applicationinsightsWeb = require("@microsoft/applicationinsights-web");
var _applicationinsightsReactNative = require("@microsoft/applicationinsights-react-native");
var _reactNativeDeviceInfo = _interopRequireDefault(require("react-native-device-info"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var RNMPlugin = new _applicationinsightsReactNative.ReactNativePlugin();
var appInsights = new _applicationinsightsWeb.ApplicationInsights({
  config: {
    instrumentationKey: '',
    extensions: [RNMPlugin]
  }
});
function initAppInsights() {
  appInsights.loadAppInsights();
}
function trackPageView() {
  appInsights.trackPageView({
    name: "Appview from Module"
  });
}
function trackEvent() {
  appInsights.trackEvent({
    name: "Button clicked from Module "
  });
}
function trackDeviceModel() {
  appInsights.trackEvent({
    name: "Device Model",
    properties: {
      deviceModel: _reactNativeDeviceInfo.default.getModel()
    }
  });
  appInsights.trackEvent({
    name: "Device Manufacturer",
    properties: {
      deviceManufacturer: _reactNativeDeviceInfo.default.getManufacturer()
    }
  });
  appInsights.trackEvent({
    name: "Device Brand",
    properties: {
      deviceBrand: _reactNativeDeviceInfo.default.getBrand()
    }
  });
  appInsights.trackEvent({
    name: "Device ID",
    properties: {
      deviceID: _reactNativeDeviceInfo.default.getDeviceId()
    }
  });
  appInsights.trackEvent({
    name: "Device System Name",
    properties: {
      deviceSystemName: _reactNativeDeviceInfo.default.getSystemName()
    }
  });
  appInsights.trackEvent({
    name: "Device System Version",
    properties: {
      deviceSystemVersion: _reactNativeDeviceInfo.default.getSystemVersion()
    }
  });
  appInsights.trackEvent({
    name: "Device Bundle ID",
    properties: {
      deviceBundleID: _reactNativeDeviceInfo.default.getBundleId()
    }
  });
  appInsights.trackEvent({
    name: "Device Build Number",
    properties: {
      deviceBuildNumber: _reactNativeDeviceInfo.default.getBuildNumber()
    }
  });
}
function trackUserProfile() {
  appInsights.setAuthenticatedUserContext("123456789");
  appInsights.trackEvent({
    name: "User Profile",
    properties: {
      userID: "123456789"
    }
  });
}
function trackCampaignDetails(campaignId, campaignName) {
  appInsights.trackEvent({
    name: "Campaign Details",
    properties: {
      campaignID: campaignId,
      campaignName: campaignName
    }
  });
}
//# sourceMappingURL=index.js.map