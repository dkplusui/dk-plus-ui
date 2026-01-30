import datePicker from './src/datePicker.vue'
import { withInstall } from '../_utils'

export const DkDatePicker = withInstall(datePicker)

export type DatePickerInstance = InstanceType<typeof datePicker>

export default DkDatePicker
