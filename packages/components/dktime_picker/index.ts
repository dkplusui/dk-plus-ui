import timePicker from './src/timePicker.vue'

import { withInstall } from '../_utils/index'

export const DkTimePicker = withInstall(timePicker)

export type TimePickerInstance = InstanceType<typeof timePicker>

export default DkTimePicker
