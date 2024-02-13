# Application Insights Module for React Native

This module provides integration with Microsoft's Application Insights for React Native applications. It enables you to easily track various events, user profiles, and campaign details within your React Native project.

## Installation

To install the module, use the following npm command:

```bash
npm install appinsights-module
```

## Usage

#### Initialization

Before using any tracking functions, initialize the Application Insights module by calling initAppInsights().

```bash
import { initAppInsights } from 'appinsights-module';

initAppInsights();
```

#### Tracking Page Views

You can track page views using the trackPageView function.

```bash
import { trackPageView } from 'appinsights-module';

trackPageView('HomePage');
```

#### Tracking Device Model

Track device model and related information with the trackDeviceModel function.

```bash
import { trackDeviceModel } from 'appinsights-module';

trackDeviceModel('iPhone X', 'Apple', 'iPhone', '12345', 'iOS', '14.2', 'com.example.app', '1.0');

```

#### Tracking User Profile

Track user profiles with the trackUserProfile function.

```bash
import { trackUserProfile } from 'appinsights-module';

trackUserProfile( 
    'John Doe', 'john@example.com', '123456789', 'Jakarta', 'Central Jakarta', 'Karet Tengsin',
    'Tanah Abang', 'Male', '123 Main St', 'Bachelor\'s Degree', 'Non-religious', 'Reading, Hiking',
    'iOS Developer', 'Jakarta', '5000', 'REF123', '100'
);

```

#### Tracking Campaign Details

Track campaign details with the trackSliderDetail, trackBannerDetail, and trackBannerClose functions.

```bash

import { 
    trackSliderDetail,
    trackBannerDetail,
    trackBannerClose
} from 'appinsights-module';

// Track slider detail event
trackSliderDetail('CampaignTitle', 'Slider', '123', 'image.jpg', 'https://example.com', 'REF456');

// Track banner detail event
trackBannerDetail('CampaignTitle', 'Banner', '456', 'banner.jpg', 'https://example.com/banner', 'REF789');

// Track banner close event
trackBannerClose('CampaignTitle', 'Banner', '789', 'banner.jpg', 'https://example.com/banner', 'REF012');

```

#### Tracking Voucher Redemption

Track voucher redemption events with the trackVoucherRedeem function.

``` bash

import { trackVoucherRedeem } from 'appinsights-module';

trackVoucherRedeem('VOUCHER123');

```