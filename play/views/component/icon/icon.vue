<script lang="ts">
  import { defineComponent } from 'vue'
  // import { svgList } from 'dk-plus'
  export default defineComponent({
    name: 'DkIconsm',
    // components: {
    //   IconShanchu1: svgList.IconShanchu1
    // },
    setup() {
      const htmlJson = {
        foundation: '<dkIcon :icon="IconShanchu1"></dkIcon>',
        zidingyis: '<dkIcon :size="50" :color="\'red\'" :icon="IconShanchu1"></dkIcon>'
      }
      const iconList = [
        ['IconStar', '星星'],
        ['IconStared', '星星'],
        ['IconLoading', '加载中'],
        ['IconClose', '叉'],
        ['IconCheck', '勾'],
        ['IconArrowTop', '上箭头'],
        ['IconArrowBottom', '下箭头'],
        ['IconShanchu1', '删除1'],
        ['IconShanchu2', '删除2'],
        ['IconSearchSmall', '搜索变小'],
        ['IconBigSearch', '搜索变大'],
        ['IconFile', '文件'],
        ['IconOpenFile', '打开的文件'],
        ['IconSearch', '搜索'],
        ['IconSearch2', '搜索2'],
        ['IconSearch3', '搜索3'],
        ['IconSysMenu', '系统菜单'],
        ['IconSysBack', '系统返回'],
        ['IconSysReset', '系统通知'],
        ['IconLink', '超链接'],
        ['IconSave', '系统运维保存授权'],
        ['IconSys1', '软件系统1'],
        ['IconSys2', '软件系统2'],
        ['IconNetworkSys', '软件系统3'],
        ['IconTheChildSys', '子系统'],
        ['IconIntelligenceSys', '智能展厅'],
        ['IconSysPer', '系统运转情况'],
        ['IconSysRun', '系统运转'],
        ['IconSysInformation', '系统信息'],
        ['IconSearchFile', '文件搜索'],
        ['IconPrint', '打印机'],
        ['IconAdministrator', '系统管理员'],
        ['IconSearchAdmin', '系统管理员搜索'],
        ['IconDataSys', '系统数据'],
        ['IconSysRole', '系统角色'],
        ['IconPause', '暂停'],
        ['IconEquipmentSearch', '设备搜索'],
        ['IconEquipmentSearch1', '设备搜索'],
        ['IconQuerySys', '设备搜索'],
        ['IconLogOffSys', '注销系统'],
        ['IconMysql', 'mysql'],
        ['IconSystem', '系统'],
        ['IconSysLoad', '系统负载'],
        ['IconScienceSys', '科研系统'],
        ['IconSysOperation', '系统运维'],
        ['IconFileSys', '文档'],
        ['IconFileSysMedicine', '药品'],
        ['IconSysMsg1', '系统消息'],
        ['IconSysUpload', '系统导入'],
        ['IconSysSetting', '系统配置'],
        ['IconNotice', '通知'],
        ['IconLight', '提示'],
        ['IconSystem2', '系统'],
        ['IconSysManage', '系统管理'],
        ['IconSetting', '设置'],
        ['IconSetSeat', '位置配置'],
        ['IconAssetsDic', '资产字典'],
        ['IconSysConfig', '资产配置'],
        ['IconSysLog', '系统日志'],
        ['IconSysMsg2', '系统消息'],
        ['IconSystem3', '系统'],
        ['IconSysNotice1', '系统信息'],
        ['IconCallSys', '外呼系统'],
        ['IconSysSupervise', '系统监督'],
        ['IconSysMaintain', '系统维护'],
        ['IconLANSearch', '局域网搜索'],
        ['IconSystem4', '系统'],
        ['IconSysUpdate', '系统更新'],
        ['IconFaceID', '人脸识别'],
        ['IconCloudSearch', '云搜索'],
        ['IconSysPower', '权限'],
        ['IconLogout', '退出'],
        ['IconSysBugTesting', '系统漏洞检测'],
        ['IconFingerprintVerify', '指纹验证'],
        ['IconSysFile', '系统文档'],
        ['IconSysNotice', '系统公告']
      ]
      const iconNameSpace = [
        ['IconIos', '苹果'],
        ['IconAndroid', '安卓'],
        ['IconStart', '开始'],
        ['IconReduce', '下降折线'],
        ['IconUpArrow', '上箭头'],
        ['IconDoubleArrow', '双箭头'],
        ['IconRefresh', '刷新'],
        ['IconUpArrow1', '上箭头'],
        ['IconDownArrow', '下箭头'],
        ['IconCross', '十字'],
        ['IconBottomArrow', '下底部箭头'],
        ['IconTopArrow', '上部部箭头'],
        ['IconUnderThe', '下箭头亿'],
        ['IconOnThe', '上箭头亿'],
        ['IconRightArrow', '右箭头亿'],
        ['IconLeftArrow', '左箭头亿'],
        ['IconUpAndDown', '上下箭头'],
        ['IconBottomArrow1', '上横bott'],
        ['IconContraction', '收起'],
        ['IconExit', '退出登陆'],
        ['IconRise', '上升图标'],
        ['IconLeftMenu', '左菜单'],
        ['IconRightMenu', '右菜单'],
        ['IconLeftarrow1', '左边箭头1'],
        ['IconBottomArrow2', '下箭头1'],
        ['IconUpAndDown1', '上下箭头'],
        ['IconDownload', '下载图标'],
        ['IconRightArrow1', '右边了'],
        ['LeftFastForward', '左快进'],
        ['RightFastForward', '右快进'],
        ['IconUpArrow2', '上边箭头'],
        ['IconUpperTriangle', '上三角'],
        ['IconLowerTriangle', '下三角'],
        ['IconLeftTriangle', '左三角'],
        ['IconRightTriangle', '右三角'],
        ['IconReturn', '返回'],
        ['IconContraction1', '收缩'],
        ['IconLeftFold', '右向下收起'],
        ['IconTopFold', '右向上收起'],
        ['IconTrack', '跟踪目标'],
        ['IconError', '出错了'],
        ['IconWeiXin', '微信'],
        ['IconPaymentReminder', '支付提醒'],
        ['IconPositioning', '定位'],
        ['IconShoppingCart', '购物车'],
        ['IconCollect', '收藏'],
        ['IconWeixinPlay', '微信支付'],
        ['IconCollectActive', '收藏'],
        ['IconWeixin1', '微信1'],
        ['IconFemale', '女'],
        ['IconPasswordShow', '密码可见'],
        ['IconRemarks', '备注'],
        ['IconQQ', 'QQ'],
        ['IconPassword', '密码'],
        ['IconRecyclingStation', '垃圾'],
        ['IconFileDeletion', '文件删除'],
        ['IconZFB', '支付宝'],
        ['IconPositioning1', '定位1'],
        ['IconDeleteMeige', '删除邮寄'],
        ['IconMale', '男'],
        ['IconCreditCard', '信用卡'],
        ['IconDelete1', '删除'],
        ['IconPay1', '支付钱包'],
        ['IconPasswordSee', '密码看见'],
        ['IconQQ1', 'QQ'],
        ['IconImageAddition', '图片添加'],
        ['IconPassword1', '密码1'],
        ['IconPassword2', '密码2'],
        ['IconPassword3', '密码3'],
        ['IconMinusSign', '减号'],
        ['IconCollect1', '收藏角标'],
        ['IconAdd', '添加'],
        ['IconCollect2', '收藏角标1'],
        ['IconAddMessage', '消息'],
        ['IconMeasurement', '计量支付'],
        ['IconFailureToPay', '支付失败'],
        ['IconCertificate', '证件'],
        ['IconCollect3', '收藏'],
        ['PasswordDisplay', '密码显示'],
        ['PasswordHiding', '密码隐藏'],
        ['IconAdditive', '添加子级'],
        ['IconDeletionGroup', '删除群组'],
        ['IconDeletionGroup1', '删除群组1'],
        ['IconMale1', '男1'],
        ['IconPayAttention', '关注'],
        ['IconPassword4', '密码'],
        ['IconFemale1', '女'],
        ['IconCollect4', '收藏'],
        ['IconCollect5', '收藏'],
        ['IconCollect6', '收藏'],
        ['IconRestoreDelete', '恢复删除'],
        ['IconFemale2', '女'],
        ['IconPaymentSetup', '支付设置'],
        ['IconDeletionPersonnel', '删除人员'],
        ['IconUnionPay', '银联'],
        ['IconMale2', '男2'],
        ['IconOnlinePayment', '在线支付'],
        ['IconPassword5', '密码'],
        ['IconPassword6', '密码'],
        ['IconEdit', '编辑'],
        ['IconAdd1', '添加'],
        ['IconReduce1', '删除']
      ]
      const iconOther = []
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
      const isChinese = false
      return {
        htmlJson,
        oncopy,
        iconList,
        iconNameSpace,
        iconOther,
        isChinese
      }
    }
  })
</script>
<template>
  <div class="template_icon">
    <div class="template_icon_jcsy">
      <!--基础使用-->
      <h2 class="template_icon_title">基础使用</h2>
      <icon-shanchu1 />
      <dk-icon>
        <icon-shanchu1 />
      </dk-icon>
      <div class="index_Dk_code">
        <highlightjs language="javascript" :code="htmlJson.foundation" />
        <span class="fuzhi" @click="oncopy(htmlJson.foundation)">复制代码</span>
      </div>
      <!--基础使用结束-->
    </div>
    <div class="template_icon_jcsy">
      <h2 class="template_icon_title">自定义大小和颜色(颜色只支持16进制 和英文单词)</h2>
      <dk-icon :size="50" :color="'red'" icon="IconShanchu1"></dk-icon>
      <div class="index_Dk_code">
        <highlightjs language="javascript" :code="htmlJson.zidingyis" />
        <span class="fuzhi" @click="oncopy(htmlJson.zidingyis)">复制代码</span>
      </div>
    </div>
    <h4 class="cont_template_icon_title">System</h4>
    <div class="icon_library">
      <div
        v-for="item in iconList"
        :key="item[0]"
        class="icon_library_item"
        @click="oncopy(item[0])"
      >
        <div class="icon_library_item_icon">
          <dk-icon :icon="item[0]" :size="50" :color="'#606266'"></dk-icon>
        </div>
        <div class="icon_library_item_name">
          {{ item[0] }}
        </div>
      </div>
    </div>
    <h3 class="cont_template_icon_title">other</h3>
    <div class="icon_library">
      <div
        v-for="item in iconNameSpace"
        :key="item[0]"
        class="icon_library_item"
        @click="oncopy(item[0])"
      >
        <div class="icon_library_item_icon">
          <dk-icon :icon="item[0]" :size="50" :color="'#606266'"></dk-icon>
        </div>
        <div class="icon_library_item_name">
          {{ item[0] }}
        </div>
      </div>
    </div>
    <h3 class="cont_template_icon_title">Arrow</h3>
    <div class="icon_library">
      <div
        v-for="item in iconOther"
        :key="item[1]"
        class="icon_library_item"
        @click="oncopy(item[0])"
      >
        <div class="icon_library_item_icon">
          <dk-icon :class="'dk-' + item[0]" :size="50" :color="'#606266'"></dk-icon>
        </div>
        <div class="icon_library_item_name">
          {{ item[0] }}
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .template_icon {
    width: 100%;

    h2,
    h4 {
      font-weight: normal;
      margin-top: 20px;
    }
    h4 {
      color: #1f2f3d;
    }
    .template_icon_jcsy {
      width: 95%;
      margin-bottom: 10px;
    }

    .template_icon_title {
      width: 95%;
      margin-bottom: 10px;
    }

    .cont_template_icon_title {
      margin: 10px 0;
    }

    .icon_library {
      width: 95%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;

      .icon_library_item {
        flex: 1;
        min-width: 103px;
        max-width: 103px;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 0.5px solid #ededed;
        cursor: pointer;
        padding: 0 10px;

        .icon_library_item_icon {
          font-size: 30px;
          margin-bottom: 10px;
        }

        .icon_library_item_name {
          width: 100%;
          font-size: 12px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
          color: #ccc;
        }
      }

      .icon_library_item:hover {
        .icon_library_item_icon .dk-icon,
        .icon_library_item_name {
          transition: all 0.3s;
          color: #34ab98 !important;
        }
      }
    }
  }
</style>
