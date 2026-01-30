import colorPickerPanel from './src/colorPickerPanel.vue'

import { withInstall } from '../_utils/index'

export const DkColorPickerPanel = withInstall(colorPickerPanel)

export type ColorPickerPanelInstance = InstanceType<typeof colorPickerPanel>

export default DkColorPickerPanel
