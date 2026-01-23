import mySwitch from './src/switch.vue'

import { withInstall } from '../_utils/index'

export const DkSwitch = withInstall(mySwitch)

export type switchInstance = InstanceType<typeof mySwitch>
