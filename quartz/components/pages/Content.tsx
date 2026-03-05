import { ComponentChildren } from "preact"
import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const fmAny = fileData.frontmatter as any
  const protectedFlag = fmAny?.protected === true || fmAny?.protected === "true"
  const classString = ["popover-hint", ...classes]
    .filter((v) => v && v.length > 0)
    .join(" ")
  return (
    <article class={classString}>
      <div class={`article-content ${protectedFlag ? "locked" : ""}`}>{content}</div>
    </article>
  )
}

export default (() => Content) satisfies QuartzComponentConstructor
