import { Platform, PixelRatio } from 'react-native';

export function getPixelSize(pixel) {
    return Platform.select({
        ios: pixel,
        android: PixelRatio.getPixelSizeForLayoutSize(pixel)
    });
}
