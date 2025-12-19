import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href="https://tinazeng.me">
        <img src="/static/namemark.svg" alt="Tina Zeng" class="namemark" />
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.page-title .namemark {
  height: 2rem;
  width: auto;
  display: block;
  filter: brightness(0) saturate(100%) invert(15%) sepia(8%) saturate(937%) hue-rotate(201deg) brightness(95%) contrast(88%);
}

@media (prefers-color-scheme: dark) {
  .page-title .namemark {
    filter: brightness(0) saturate(100%) invert(97%) sepia(97%) saturate(0%) hue-rotate(36deg) brightness(103%) contrast(96%);
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
