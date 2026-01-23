import input from './src/input.vue'
import { withInstall } from '../_utils'
export const DkInput = withInstall(input)
export type inputInstance = InstanceType<typeof input>
export default DkInput
