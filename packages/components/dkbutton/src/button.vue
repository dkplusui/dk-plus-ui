<script lang="ts">
  /**
   * @name dk-collapse
   * @author fanKai16
   * @Time 2023/05/08
   * @description 折叠面板
   **/
  import { defineComponent, toRefs, reactive, ref } from 'vue'
  import { getButton, getReturn, getGlobal, getRipples } from '../../_hooks'
  import type { RipplesType } from '../../_hooks'
  import { dkButtonProps } from './props'
export default defineComponent({
    name: 'DkButton',
    props: dkButtonProps,
    setup(Props) {
      const dkBoxButton = ref<HTMLButtonElement>()
      const { personalityType, icon, afterIcon, circle } = toRefs(Props)
      const { classList, styleList, personaClassList, personalityStylist } =
        getButton(Props)
      const { getRun } = getReturn()
      const { getType } = getGlobal(Props)
      const EventClick = (evt: MouseEvent): void => {
        const { disabled, ripples, loading } = toRefs(Props)
        if (disabled.value || loading.value) {
          evt.preventDefault()
          return
        }
        if (ripples.value) {
          const { ripplesBgColor } = toRefs(Props)
          const elementObj: RipplesType = reactive({
            AnimationDuration: 1100,
            component: 'dk-button',
            className: 'dk-button_ripples',
            ripplesBgColor: ripplesBgColor.value,
            type: getType()
          })
          const { useRipples } = getRipples(
            evt,
            dkBoxButton.value as HTMLElement,
            elementObj
          )
          useRipples()
        }
        getRun(Props.onClick, evt)
      }
      return {
        EventClick,
        dkBoxButton,
        classList,
        styleList,
        personaClassList,
        personalityStylist,
        personalityType,
        icon,
        afterIcon,
        circle
      }
    }
  })
</script>
<template>
  <div
    class="dk-button"
    :style="disabled ? 'cursor:not-allowed' : ''"
    @click="EventClick"
  >
    <template v-if="link || text">
      <div
        v-if="text"
        :class="[
          classList,
          text ? 'dk-button-text' : '',
          icon || afterIcon ? 'dk-button_flex' : ''
        ]"
        :style="[styleList]"
      >
        <slot v-if="icon === '' || icon === null" name="icon"></slot>
        <div v-else :class="[icon ? 'dk-button_slot_left' : '']">
          <dk-icon
            v-if="loading"
            :icon="icon ? icon : 'IconRefresh'"
            :class="loading ? 'dk-button_rotate' : ''"
          ></dk-icon>
          <dk-icon v-else :icon="icon"></dk-icon>
        </div>
        <div>
          <dk-icon
            v-if="loading && !icon"
            :class="loading ? 'dk-button_rotate' : ''"
            :icon="icon ? icon : 'IconRefresh'"
          ></dk-icon>
          <slot></slot>
        </div>
        <slot v-if="afterIcon === '' || afterIcon === null" name="afterIcon"></slot>
        <div v-else :class="[afterIcon ? 'dk-button_slot_right' : '']">
          <dk-icon :icon="afterIcon"></dk-icon>
        </div>
      </div>
      <div
        v-if="link"
        :class="[classList, link ? 'dk-button-link' : '']"
        :style="styleList"
      >
        <a :href="href" tabindex="0" :target="target">
          <div :class="icon || afterIcon ? 'dk-button_flex' : ''">
            <slot v-if="icon === '' || icon === null" name="icon"></slot>
            <div v-else :class="[icon ? 'dk-button_slot_left' : '']">
              <dk-icon
                v-if="loading"
                :icon="icon ? icon : 'IconRefresh'"
                :class="loading ? 'dk-button_rotate' : ''"
              ></dk-icon>
              <dk-icon v-else :icon="icon"></dk-icon>
            </div>
            <div>
              <dk-icon
                v-if="loading && !icon"
                :class="loading ? 'dk-button_rotate' : ''"
                :icon="icon ? icon : 'IconRefresh'"
              ></dk-icon>
              <slot></slot>
            </div>
            <slot v-if="afterIcon === '' || afterIcon === null" name="afterIcon"></slot>
            <div v-else :class="[afterIcon ? 'dk-button_slot_right' : '']">
              <dk-icon :icon="afterIcon"></dk-icon>
            </div>
          </div>
        </a>
      </div>
    </template>
    <template v-else>
      <button
        v-if="!personality"
        ref="dkBoxButton"
        :class="['dk-button-box', classList]"
        :style="styleList"
        role="button"
        :disabled="disabled"
      >
        <div :class="icon || afterIcon ? 'dk-button_flex' : ''">
          <slot v-if="icon === '' || icon === null" name="icon"></slot>
          <div v-else :class="icon && !circle ? 'dk-button_slot_left' : ''">
            <dk-icon
              v-if="loading"
              :icon="icon ? icon : 'IconRefresh'"
              :class="loading ? 'dk-button_rotate' : ''"
            ></dk-icon>
            <dk-icon v-else :icon="icon"></dk-icon>
          </div>
          <div>
            <dk-icon
              v-if="loading && !icon"
              :class="loading ? 'dk-button_rotate' : ''"
              :icon="icon ? icon : 'IconRefresh'"
            ></dk-icon>
            <slot></slot>
          </div>
          <slot v-if="afterIcon === '' || afterIcon === null" name="afterIcon"></slot>
          <div v-else :class="afterIcon && !circle ? 'dk-button_slot_right' : ''">
            <dk-icon :icon="afterIcon"></dk-icon>
          </div>
        </div>
      </button>
      <button
        v-else
        ref="dkBoxButton"
        :class="['dk-button-personality', personaClassList]"
        :style="personalityStylist"
        role="button"
      >
        <span v-if="personalityType === 'shine' || personalityType === 'flatBtn'">
          <slot name="icon" />
          <slot></slot>
          <slot name="afterIcon" />
        </span>
        <template v-else>
          <slot name="icon" />
          <slot></slot>
          <slot name="afterIcon" />
        </template>
      </button>
    </template>
  </div>
</template>
