import autocomplete from './src/autocomplete.vue'

import { withInstall } from '../_utils/index'

export const DkAutocomplete = withInstall(autocomplete)

export type autocompleteInstance = InstanceType<typeof autocomplete>

export default DkAutocomplete
