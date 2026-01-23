import col from './src/col.vue';
import { withInstall } from '../_utils';

export const DkCol = withInstall(col);

export type DkColInstanceType = InstanceType<typeof col>;

export default DkCol;
