import { Dimensions } from "react-native"

const { height, width } = Dimensions.get("window");

const dimens = {
    DEVICE_WIDTH: width,
    DEVICE_HEIGHT: height,
    DRAWER_WIDTH: width * 0.70,
    BUTTON_WIDTH: 160,
    BUTTON_HEIGHT: 40,
};

export default dimens;