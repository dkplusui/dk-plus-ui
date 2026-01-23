import Header from './src/dkheader.vue'
import { withInstall } from '../_utils/index'
const DkHeader = withInstall(Header)
export type HeaderInstance = InstanceType<typeof Header>
export { DkHeader }
export default DkHeader
