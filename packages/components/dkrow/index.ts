import row from './src/row.vue';
import { withInstall } from '../_utils'
export const DkRow = withInstall(row)
export type layoutInstance = InstanceType<typeof row>
export default DkRow
