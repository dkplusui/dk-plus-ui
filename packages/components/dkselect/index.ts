import select from './src/select.vue'

import { DirectiveScroll } from '../_hooks/_directive/scroll'
import { withInstall, installDirective } from '../_utils/index'

export const DkSelect = withInstall(select)

export const DkScroll = withInstall({
  directive: installDirective(DirectiveScroll(), 'dk-select')
})

export default DkSelect
