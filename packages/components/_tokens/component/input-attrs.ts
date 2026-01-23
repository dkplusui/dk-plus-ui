/**
 * @name DK_INPUT_TYPE
 * @Time 2023年04月28日
 * @param {string} type [text] 文本
 * @param {string} type [textarea] 多行文本
 * @param {string} type [password] 密码
 * @param {string} type [number] 数字
 * @returns Input 组件的全局配置
 */
export const DK_INPUT_TYPE = ['text', 'textarea', 'password', 'number'] as const

/**
 * @name DK_INPUT_PERSONALITY_TYPE
 * @Time July 18, 2023
 * @param { string }  [underline]
 * @param { string }  [borderRadius]
 */
export const DK_INPUT_PERSONALITY_TYPE = ['underline', 'borderRadius'] as const

/**
 * @name DK_INPUT_STATUS
 * @Time July 19, 2023
 * @param { string } [warning]
 * @param { string } [error]
 */
export const DK_INPUT_STATUS = ['warning', 'error'] as const;
