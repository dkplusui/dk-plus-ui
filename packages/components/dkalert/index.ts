import alert from './src/alert.vue'
import { withInstall } from '../_utils/index'
export const DkAlert = withInstall(alert)
export type AlertInstance = InstanceType<typeof alert>
export default DkAlert
