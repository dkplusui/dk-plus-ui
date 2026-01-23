import rate from './src/rate.vue'

import { withInstall } from '../_utils'

export const DkRate = withInstall(rate)

export type DkRateInstance = InstanceType<typeof rate>
