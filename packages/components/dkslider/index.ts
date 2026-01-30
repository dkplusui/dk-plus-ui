import slider from './src/slider.vue'

import { withInstall } from '../_utils/index'

export const DkSlider = withInstall(slider)

export type SliderInstance = InstanceType<typeof slider>

export default DkSlider
