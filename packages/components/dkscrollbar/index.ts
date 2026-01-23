import scrollbar from './src/scrollBar.vue'

import { DirectiveScroll } from '../_hooks/_directive/scroll'
import { withInstall, installDirective } from '../_utils/index'

export const DkScrollbar = withInstall(scrollbar)

export const DkScroll = withInstall({
  directive: installDirective(DirectiveScroll(), 'dk-scroll')
})

export type scrollbarInstance = InstanceType<typeof scrollbar>

export default DkScrollbar
