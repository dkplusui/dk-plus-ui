import type { ExtractPropTypes, PropType } from 'vue'
import {
  setBooleanProps,
  setStringProp,
  setNumberProps
} from '../../_utils'
import { DK_SIZE } from '../../_tokens'
import type { dkPlusSize } from '../../_interface'
import type {
  AutocompleteFetchSuggestions,
  AutocompleteOption,
  AutocompleteModelValue
} from './type'

export const dkAutocompleteProps = {
  /**
   * @name modelValue
   * @description input value
   */
  modelValue: setStringProp<AutocompleteModelValue>(''),
  /**
   * @name options
   * @description local suggestions list
   */
  options: {
    type: Array as PropType<AutocompleteOption[]>,
    default: (): AutocompleteOption[] => []
  },
  /**
   * @name fetchSuggestions
   * @description fetch suggestions function (ElementPlus style)
   */
  fetchSuggestions: Function as PropType<AutocompleteFetchSuggestions>,
  /** placeholder */
  placeholder: setStringProp(''),
  /** disabled */
  disabled: setBooleanProps(false),
  /** clearable */
  clearable: setBooleanProps(false),
  /** trigger on focus */
  triggerOnFocus: setBooleanProps(true),
  /** debounce(ms) */
  debounce: setNumberProps(300),
  /** value key for object option */
  valueKey: setStringProp('value'),
  /** highlight first item */
  highlightFirstItem: setBooleanProps(false),
  /** hide loading */
  hideLoading: setBooleanProps(false),
  /** size */
  size: setStringProp<dkPlusSize>(null, (val: dkPlusSize): boolean => {
    return DK_SIZE.includes(val)
  })
} as const

export type AutocompleteProps = ExtractPropTypes<typeof dkAutocompleteProps>
