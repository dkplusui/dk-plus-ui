import datePickerPanel from './src/datePickerPanel.vue'

import { withInstall } from '../_utils/index'

export const DkDatePickerPanel = withInstall(datePickerPanel)

export type DatePickerPanelInstance = InstanceType<typeof datePickerPanel>

export default DkDatePickerPanel
