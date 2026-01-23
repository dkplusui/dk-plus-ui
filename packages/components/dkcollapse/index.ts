import Collapse from './src/collapse.vue'
import { withInstall } from '../_utils/index'
export const DkCollapse = withInstall(Collapse)
export type CollapseInstance = InstanceType<typeof Collapse>
export default DkCollapse
