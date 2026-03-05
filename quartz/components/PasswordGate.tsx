import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import gateScript from "./scripts/passwordGate.inline"
// @ts-ignore
import gateStyle from "./styles/passwordGate.scss"

const PasswordGate: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const fmAny = fileData.frontmatter as any
  const protectedFlag = fmAny?.protected === true || fmAny?.protected === "true"

  if (!protectedFlag) {
    return null
  }

  const hash =
    typeof fmAny?.passwordHash === "string" && fmAny.passwordHash.trim() !== ""
      ? (fmAny.passwordHash as string)
      : undefined
  let pwd: string | undefined = undefined
  if (typeof fmAny?.password === "string") {
    const s = (fmAny.password as string).trim()
    if (s.length > 0) pwd = s
  } else if (typeof fmAny?.password === "number") {
    const s = String(fmAny.password).trim()
    if (s.length > 0) pwd = s
  }

  const hasCredentials = (pwd && pwd.length > 0) || (hash && hash.length > 0)
  if (!hasCredentials) {
    return null
  }

  return (
    <div
      class="password-gate"
      data-require="true"
      data-hash={hash}
      data-password={pwd}
      aria-hidden="false"
    >
      <div class="gate-card">
        <div class="gate-title">此文章已加密</div>
        <div class="gate-desc">请输入密码以查看正文内容</div>
        <div class="gate-form">
          <input
            class="gate-input"
            type="password"
            placeholder="输入密码"
            autocomplete="new-password"
          />
          <button class="gate-btn" type="button">
            解锁
          </button>
        </div>
        <div class="gate-msg" role="alert"></div>
      </div>
    </div>
  )
}

PasswordGate.afterDOMLoaded = gateScript
PasswordGate.css = gateStyle

export default (() => PasswordGate) satisfies QuartzComponentConstructor
