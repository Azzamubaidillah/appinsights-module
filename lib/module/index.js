import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactNativePlugin } from '@microsoft/applicationinsights-react-native';
import DeviceInfo from 'react-native-device-info';
var RNMPlugin = new ReactNativePlugin();
var appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: '',
    extensions: [RNMPlugin]
  }
});
export function initAppInsights() {
  appInsights.loadAppInsights();
}
export function trackPageView() {
  appInsights.trackPageView({
    name: "Appview from Module"
  });
}
export function trackEvent() {
  appInsights.trackEvent({
    name: "Button clicked from Module "
  });
}
export function trackDeviceModel() {
  appInsights.trackEvent({
    name: "Device Model",
    properties: {
      deviceModel: DeviceInfo.getModel()
    }
  });
  appInsights.trackEvent({
    name: "Device Manufacturer",
    properties: {
      deviceManufacturer: DeviceInfo.getManufacturer()
    }
  });
  appInsights.trackEvent({
    name: "Device Brand",
    properties: {
      deviceBrand: DeviceInfo.getBrand()
    }
  });
  appInsights.trackEvent({
    name: "Device ID",
    properties: {
      deviceID: DeviceInfo.getDeviceId()
    }
  });
  appInsights.trackEvent({
    name: "Device System Name",
    properties: {
      deviceSystemName: DeviceInfo.getSystemName()
    }
  });
  appInsights.trackEvent({
    name: "Device System Version",
    properties: {
      deviceSystemVersion: DeviceInfo.getSystemVersion()
    }
  });
  appInsights.trackEvent({
    name: "Device Bundle ID",
    properties: {
      deviceBundleID: DeviceInfo.getBundleId()
    }
  });
  appInsights.trackEvent({
    name: "Device Build Number",
    properties: {
      deviceBuildNumber: DeviceInfo.getBuildNumber()
    }
  });
}
export function trackUserProfile() {
  appInsights.setAuthenticatedUserContext("123456789");
  appInsights.trackEvent({
    name: "User Profile",
    properties: {
      userID: "123456789"
    }
  });
}
export function trackCampaignDetails(campaignId, campaignName) {
  appInsights.trackEvent({
    name: "Campaign Details",
    properties: {
      campaignID: campaignId,
      campaignName: campaignName
    }
  });
}
//# sourceMappingURL=index.js.map