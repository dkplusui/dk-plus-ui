<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    name: 'DkInputComponent',
    setup() {
      const oncopy = (code: string): void => {
        const input = document.createElement('input')
        input.setAttribute('readonly', 'readonly')
        input.setAttribute('value', code)
        document.body.appendChild(input)
        input.select()
        if (document.execCommand('copy')) {
          document.execCommand('copy')
          alert('复制成功')
        }
        document.body.removeChild(input)
      }
      const handleFixClick = (): void => {
        console.log('handleFixClick')
      }
      const msg = ref<string | number>('asdf')
      const input = ref(null)

      const handlePendClick = (): void => {
        console.log('handlePendClick')
      }

      const handleKeydown = (event: Event): void => {
        console.log('handleKeydown', event)
      }

      const onFocus = (e: Event): void => {
        console.log('onFocus', e)
      }

      const isDisabled = ref(true)
      const handleChange = (val: string): void => {
        msg.value = val
        console.log('msg=', msg.value)
      }
      return {
        oncopy,
        handleFixClick,
        msg,
        focus,
        blur,
        input,
        isDisabled,
        handlePendClick,
        handleKeydown,
        onFocus,
        handleChange
      }
    }
  })
</script>

<template>
  <!-- msg: {{ msg }} -->
  <dk-input v-if="false" v-model="msg" @change="handleChange" @enter="handleChange" @focus="handleChange" @blur="handleChange"></dk-input>
  <div v-if="!false" class="input">
    <h4>前后置内容</h4>
    <dk-input v-model="msg" prepend-text="http://" append-text=".com"></dk-input>

    <h4>change</h4>
    <dk-input v-model="msg" placeholder="change" :disabled="isDisabled"> </dk-input>

    <dk-input show-length></dk-input>

    <dk-input clearable placeholder="prefix插槽形式">
      <template #prefix>
        <dk-icon icon="IconShanchu1" />
      </template>
    </dk-input>

    <h4>长度</h4>
    <dk-input placeholder="长度" maxlength="10" />
    <dk-input placeholder="长度" minlength="10" />
    <dk-input type="textarea" placeholder="长度" autosize minlength="4" maxlength="10" />

    <h4>尺寸</h4>
    <dk-input size="large" placeholder="large" />
    <dk-input size="medium" placeholder="medium" />
    <dk-input size="small" placeholder="small" />
    <dk-input size="mini" placeholder="mini" />

    <h4>前后缀内容</h4>
    <dk-input
      v-model="msg"
      clearable
      placeholder="前后缀内容"
      prepend-icon="IconShanchu1"
      prepend-text="http://"
      append-icon="IconShanchu1"
      append-text=".com"
      icon-size="16px"
      @append-click="handlePendClick"
      @prepend-click="handlePendClick"
      @enter="handleKeydown"
    >
      <template #prepend>
        <dk-icon icon="icon-file" />
      </template>
      <template #append>
        <dk-icon icon="icon-file" />
      </template>
    </dk-input>
    {{ msg }}

    <h4>文本域</h4>
    <dk-input type="textarea" rows="10" readonly placeholder="文本域" autosize />

    <h4>数字框</h4>
    <dk-input type="number" placeholder="数字框" />

    <h4>密码框</h4>
    <dk-input v-model="msg" type="password" placeholder="密码框" show-password />

    <h4>前后缀</h4>
    <dk-input></dk-input>
    <dk-input clearable placeholder="prefix属性绑定形式" prefix-icon="IconShanchu1" />
    <dk-input clearable placeholder="prefix属性绑定形式" suffix-icon="IconShanchu1" />
    <dk-input
      placeholder="插槽形式"
      prefix-icon="IconShanchu1"
      suffix-icon="IconShanchu1"
    >
      <template #prefix>
        <dk-icon icon="IconShanchu1"></dk-icon>
      </template>
      <template #suffix>
        <dk-icon icon="IconShanchu1" />
      </template>
    </dk-input>

    <h4>禁用</h4>
    <dk-input disabled placeholder="禁用" />

    <h4>清空</h4>
    <dk-input v-model="msg" clearable placeholder="清空" />
    {{ msg }}

    <dk-input focus-border-color="#f0f" text-color="#f0f"></dk-input>
    <div class="box">
      {{ msg }}
    </div>
    <h4>个性化</h4>
    <p>设置label-text</p>
    <dk-input label-text="用户名" placeholder="请输入用户名"></dk-input>
    <p>设置 personality personality-type="underline" </p>
    <dk-input 
      personality 
      personality-type="underline" 
      label-text="个性-标签文字"
      placeholder="个性-下划线输入框"
      prefix-icon="IconFile"
      suffix-icon="IconFile"
    ></dk-input>
    <p>设置personality personality-type="borderRadius" </p>
    <dk-input 
      personality 
      personality-type="borderRadius" 
      placeholder="个性-下划线+圆角转换"
      prefix-icon="IconFile"
    ></dk-input>
    <dk-input 
      placeholder="warning"
      prefix-icon="IconSysInformation"
      status="warning"
    ></dk-input>
    <dk-input 
      placeholder="error"
      prefix-icon="IconSysInformation"
      status="error"
    ></dk-input>
  </div>
  <div class="input">
  </div>
</template>

<style lang="scss" scoped>
  .input {
    width: 99%;

    .dk-input {
      margin-bottom: 20px;
    }

    .box {
      margin-bottom: 20px;
      margin-top: 10px;
      margin-right: 10px;
      border: #ccc 1px solid;
      padding: 20px;
      border-radius: 4px;

      .index_Dk_code {
        position: relative;
        margin-bottom: 20px;

        .copy {
          position: absolute;
          right: 10px;
          top: 10px;
          cursor: pointer;
          color: #ccc;
        }
      }
    }
  }
</style>
