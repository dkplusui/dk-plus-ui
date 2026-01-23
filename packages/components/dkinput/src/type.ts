import type {
  ComputedRef,
  CSSProperties,
  Ref,
  InputHTMLAttributes,
  ShallowRef,
  TextareaHTMLAttributes
} from 'vue'
import type { dkInputType, ClassListName } from '../../_interface'
export interface UseInputProps {
  value: string | number
  type: string
  size: string
  disabled: boolean
  clearable: boolean
  readonly: boolean
  placeholder: string
  maxlength: number | string
  minlength: number | string
  showWordLimit: boolean
  prefixIcon: string
  suffixIcon: string
  rows: number | string
  autosize: boolean
  autocomplete: string
}

export interface UseEmitType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit: (event: string, ...args: any[]) => void
}

export interface propDataModel {
  personalityProp: boolean
  labelTextProp: string
  prependText: string
  appendText: string
  placeholder: string
  /** Show clearable button or not */
  clearable: boolean
  /** Show password or not */
  showPassword: boolean
  prependIcon: string
  appendIcon: string
  /** Disabled or not */
  disabledProp: boolean
  prefixIcon: string
  typeProp: dkInputType
  suffixIcon: string
  maxlengthProp: number | string
  minlengthProp: number | string
  /** Is there textarea height adaptive */
  autosizeProp: boolean
  /** Textarea line limit */
  rowsProp: number | string
  readonlyProp: boolean
  /** Show character statistics or not - Only text textarea take effect */
  showLengthProp: boolean
}

export interface DataType {
  personality: boolean
  labelText: string
  /**
   * @description Is there prepend text
   * @type {boolean} [true | false]
   * @default false
   */
  isPrepend: boolean
  /** Is there append text */
  isAppendTextLen: boolean
  /** Is there prefix */
  isPrefix: boolean
  /** Show clear button or not */
  isClear: boolean
  inputmode: string
  /** Is there prefix icon */
  isPrefixIcon: boolean
  /** Is there suffix icon */
  isSuffix: boolean
  /** Show suffix icon or not */
  isSuffixIcon: boolean
  /** Show password or not */
  isShowPassword: boolean
  /** Is there prefix icon */
  isPrependIcon: boolean
  /** Is there suffix icon */
  isAppendIcon: boolean
  /** Is there append content */
  isAppend: boolean
  /** Display or not length */
  isLength: boolean
  rows: number | string
  /** Is display character statistics */
  showLength: boolean
}

export interface PendType {
  /** Is there prepend text */
  isPrependText: boolean
  /** Is there append text */
  isAppendText: boolean
}

/**
 * @name SetupReturns
 * @Time July 14, 2023
 * @description Setup return type
 */
export interface SetupReturns {
  clear: () => void
  togglePassword: () => void
  AppendIconEventClick: (event: MouseEvent) => void
  PrependIconEventClick: (event: MouseEvent) => void
  onKeydownEnter: (event: KeyboardEvent) => void
  prefixIconClass: string[]
  suffixIconClass: string[]
  showPasswordClass: string[]
  appendClassList: string[]
  classList: ComputedRef<ClassListName>
  wrapperClassList: ComputedRef<ClassListName>
  pendStyleList: ComputedRef<CSSProperties>
  isShowClear: ComputedRef<boolean>
  styleList: CSSProperties
  value: Ref<string | number>
  inputAttrs: InputHTMLAttributes
  input: ShallowRef<HTMLInputElement | undefined>
  textarea: ShallowRef<HTMLTextAreaElement | undefined>
  textareaAttrs: TextareaHTMLAttributes
  prependClassList: string[]
  lengthLimit: string
  valueLength: Ref<number>
  showPasswordIcon: Ref<string>
  inputType: Ref<dkInputType>
}
type ValuesType<T> = T[keyof T]

export type SetupReturnsType = ValuesType<SetupReturns> | boolean
