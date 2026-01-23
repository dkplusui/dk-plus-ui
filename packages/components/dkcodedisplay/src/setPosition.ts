import type { Ref } from 'vue'
/**
 * @name setPosition
 * @description Sets the position of the code button display
 */
export class SetPosition {
  dom: Ref<HTMLElement | undefined>
  open: boolean = false

  constructor(dom: Ref<HTMLElement | undefined>) {
    this.dom = dom
  }

  getDom = (target: string, dom: HTMLElement): HTMLElement => {
    const sourceTarget = dom.childNodes as unknown as HTMLElement[]
    const targetNodeList: HTMLElement[] = Array.from(sourceTarget)
    let i = 0;

    while (target !== targetNodeList[i].className && i < targetNodeList.length) {
      i++
    }

    return targetNodeList[i]
  }

  setStyle = (): void => {
    try {
      const targetDom = this.dom.value as HTMLElement
      const innerHeight = window.innerHeight
      const dkShadowDom = this.getDom('dk-shadow', targetDom)
      const dkBoxDom = this.getDom('dk-box', dkShadowDom)
      const dkCodeDisplayCodeDom = this.getDom('dkcodedisplay_code', dkBoxDom)
      const buttonDom = this.getDom('dkcodedisplay_open', dkBoxDom)
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const buttonOffset = targetDom.offsetTop + targetDom.clientHeight - scrollTop

      // Button position exceeds viewport height
      const isOverTop = buttonOffset > innerHeight
      
      const isOffsetOverTop =
        targetDom.offsetTop -
          scrollTop +
          dkCodeDisplayCodeDom.clientHeight -
          (targetDom.clientHeight / 2) <
        innerHeight
      
      if (
        isOffsetOverTop &&
        isOverTop
        ) {
        // this.open
        const firstParent = targetDom.parentNode as HTMLElement
        const vpDocDom = firstParent.parentNode as HTMLElement
        const mainDom = vpDocDom.parentNode as HTMLElement
        const mainParentDom = mainDom.parentNode as HTMLAnchorElement
        const contentContainerDom = mainParentDom.parentNode as HTMLElement
        const containerDom = contentContainerDom.parentNode as HTMLElement
        const VPDocDom = containerDom.parentNode as HTMLElement

        buttonDom.style.position = 'fixed'
        buttonDom.style.left = vpDocDom.offsetLeft + VPDocDom.offsetLeft + 'px'

        buttonDom.style.width = targetDom.clientWidth + 'px'
      } else {
        buttonDom.style.position = 'absolute'
        buttonDom.style.left = 0 + 'px'
      }
    } catch (err) {
      // console.log(err)
    }
  }

  init = (dom: Ref<HTMLElement | undefined>, open: boolean): void => {
    this.open = open
    this.dom = dom
    this.setStyle()
  }
}
