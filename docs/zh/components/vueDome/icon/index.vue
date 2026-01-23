<script lang="ts">
  import { defineComponent } from 'vue'
  import svgList from '../../../../../packages/components/_icon/index'
  export default defineComponent({
    name: 'VueDomeIcon',
    setup() {
      const oncopy = (e: string): void => {
        const input = document.createElement('input')
        input.setAttribute('readonly', 'readonly')
        input.setAttribute('value', e)
        document.body.appendChild(input)
        input.setSelectionRange(0, 9999)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
        alert('复制成功')
      }

      return {
        oncopy,
        svgList: svgList as unknown
      }
    }
  })
</script>

<template>
  <div class="box-icon">
    <div
      v-for="(item, i) of svgList"
      :key="i"
      class="box-icon_comp"
      @click="oncopy(item['name'])"
    >
      <div>
        <dk-icon :size="24">
          <component :is="item" />
        </dk-icon>
      </div>
      <div>
        <span class="icon-name">{{ item['name'] }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .box-icon {
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .box-icon_comp {
      cursor: pointer;
      display: flex;
      width: 110px;
      height: 110px;
      border: 1px solid var(--vp-c-border);
      margin: 8px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon-name {
        font-size: 10px;
        color: var(--vp-c-text-2);
      }
    }
  }
</style>
