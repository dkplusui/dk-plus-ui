import timeSelect from './src/timeSelect.vue'

import { withInstall } from '../_utils/index'

export const DkTimeSelect = withInstall(timeSelect)

export type TimeSelectInstance = InstanceType<typeof timeSelect>

export default DkTimeSelect
