import radio from './src/radio.vue';

import { withInstall } from '../_utils/index';

export const DkRadio = withInstall(radio);

export type radioInstance = InstanceType<typeof radio>;
