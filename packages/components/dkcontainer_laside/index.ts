import las from './src/laside.vue'
import { withInstall } from '../_utils/index'
const DkLaside = withInstall(las)
export type lasInstance = InstanceType<typeof las>
export { DkLaside }
export default DkLaside
