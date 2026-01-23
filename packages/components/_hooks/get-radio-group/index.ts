import { type ComponentOptions, toRaw, type Slots } from 'vue'
import type { DkRadioGroupPropsType } from '../../dkradio_group/src/props';
import { getSlotList } from '../public/get-slot-list';

interface GetRadioGroupType {
  getSlot: Function
}

export const getRadioGroup = (props: DkRadioGroupPropsType): GetRadioGroupType => {
  const data = toRaw(props);
  data
  
  const getSlot = (slots: Slots): ComponentOptions[] => {
    const list = getSlotList(slots, 'DkRadio');
    return list;
  }

  return {
    getSlot
  }
}
