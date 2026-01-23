import Transition from './src/transition.vue'
import { withInstall } from '../_utils/index'
export const DkTransition = withInstall(Transition)
export type TransitionInstance = InstanceType<typeof Transition>
export default DkTransition
