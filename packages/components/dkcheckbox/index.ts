import checkbox from './src/checkbox.vue'
import { withInstall } from '../_utils/index'
export const DkCheckbox = withInstall(checkbox)
export type dkCheckboxInterface = InstanceType<typeof checkbox>
export default DkCheckbox
