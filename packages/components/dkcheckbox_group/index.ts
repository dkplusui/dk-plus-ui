import checkboxGroup from './src/checkboxGroup.vue'
import { withInstall } from '../_utils'
export const DkCheckboxGroup = withInstall(checkboxGroup)
export default DkCheckboxGroup
export type checkboxGroupType = InstanceType<typeof checkboxGroup>
