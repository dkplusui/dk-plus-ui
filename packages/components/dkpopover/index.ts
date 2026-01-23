import popover from './src/popover.vue'
import { withInstall } from '../_utils'

export const DkPopover = withInstall(popover)

export type DkPopoverType = InstanceType<typeof popover>
