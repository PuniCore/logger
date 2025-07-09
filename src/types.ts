import chalk from 'chalk'
import type { Logger as Log4jsLogger } from 'log4js'

/** 日志配置选项 */
export interface LoggerOptions {
  /** @description 日志等级 */
  level: LoggerLevel
  /** @description 是否开启日志文件记录，默认true */
  FileLogging?: boolean
  /** @description 保留天数，需开启FileLogging */
  daysToKeep?: number
  /** @description 是否为开发模式，开启后可在日志中输出函数调用位置 */
  devMode?: boolean
  /** @description 日志文件保存路径，需开启FileLogging */
  logPath?: string
}

/** 日志等级 */
export type LoggerLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'mark' | 'off'

/**
 * @description 日志接口
 */
export interface Logger extends Log4jsLogger {
  /** @description chalk模块 */
  chalk: typeof chalk
  /** @description 将文本设置为红色 */
  red: typeof chalk.red
  /** @description 将文本设置为绿色 */
  green: typeof chalk.green
  /** @description 将文本设置为黄色 */
  yellow: typeof chalk.yellow
  /** @description 将文本设置为蓝色 */
  blue: typeof chalk.blue
  /** @description 将文本设置为品红色 */
  magenta: typeof chalk.magenta
  /** @description 将文本设置为青色 */
  cyan: typeof chalk.cyan
  /** @description 将文本设置为白色 */
  white: typeof chalk.white
  /** @description 将文本设置为灰色 */
  gray: typeof chalk.gray
  /** @description 将文本设置为紫色 */
  violet: ReturnType<typeof chalk.hex>
  /** @description 将文本设置为触发函数的颜色 */
  fnc: ReturnType<typeof chalk.hex>

  /**
   * @description 打印Bot前缀日志
   * @param level - 日志等级
   * @param id - Bot ID
   * @param args - 日志内容
   */
  bot: (level: LoggerLevel, id: string, ...args: any[]) => void

  /**
   * @description 适配器日志
   * @param level - 日志等级
   * @param adapterName - 适配器名称
   * @param args - 日志内容
   */
  adapter: (level: LoggerLevel, adapterName: string, ...args: any[]) => void

  /** @description 打印追踪日志 */
  trace (...args: any[]): void

  /** @description 打印调试日志 */
  debug (...args: any[]): void

  /** @description 打印信息日志 */
  info (...args: any[]): void

  /** @description 打印警告日志 */
  warn (...args: any[]): void

  /** @description 打印错误日志 */
  error (...args: any[]): void

  /** @description 打印致命日志 */
  fatal (...args: any[]): void

  /** @description 打印标记日志 */
  mark (...args: any[]): void

  /** @description 开关日志 */
  off (): void
}
