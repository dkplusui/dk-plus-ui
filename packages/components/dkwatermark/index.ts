import myWatermark from './src/watermark.vue'

import { withInstall } from '../_utils/index'

export const DkWatermark = withInstall(myWatermark)

export type watermarkInstance = InstanceType<typeof myWatermark>
