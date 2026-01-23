import main from './src/main.vue'
import { withInstall } from '../_utils/index'
const DkMain = withInstall(main)
export type mainlasInstance = InstanceType<typeof main>
export { DkMain }
export default DkMain
