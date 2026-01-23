import trigger from './src/trigger.vue'

import { DirectiveScroll } from '../_hooks/_directive/scroll'
import { withInstall, installDirective } from '../_utils/index'

export const DkTrigger = withInstall(trigger)

export const DkScroll = withInstall({
  directive: installDirective(DirectiveScroll(), 'dk-trigger')
})

export default DkTrigger
