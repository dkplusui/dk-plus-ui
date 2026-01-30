import type { VNode } from 'vue'

export type AutocompleteModelValue = string

export type AutocompleteOption =
  | string
  | Record<string, unknown>

export type AutocompleteFetchSuggestions = (
  queryString: string,
  cb: (suggestions: AutocompleteOption[]) => void
) => void | Promise<AutocompleteOption[]>

export interface AutocompleteChildren extends VNode {
  children: {
    default(): VNode[]
  }
}
