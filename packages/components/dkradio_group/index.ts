import radioGroup from './src/radioGroup.vue';

import { withInstall } from '../_utils/index';

export const DkRadioGroup = withInstall(radioGroup);

export type radioGroupInstance = InstanceType<typeof radioGroup>;
