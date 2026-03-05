document.addEventListener("nav", () => {
  const gate = document.querySelector(".password-gate") as HTMLElement | null
  const articleContent = document.querySelector(".center .article-content") as HTMLElement | null
  if (!gate) return
  if (gate.dataset.require !== "true") return
  articleContent?.classList.add("locked")
  const input = gate.querySelector(".gate-input") as HTMLInputElement | null
  const btn = gate.querySelector(".gate-btn") as HTMLButtonElement | null
  const msg = gate.querySelector(".gate-msg") as HTMLElement | null
  if (!input || !btn) return
  const gateEl = gate as HTMLElement
  const inputEl = input as HTMLInputElement
  const btnEl = btn as HTMLButtonElement
  const msgEl = msg as HTMLElement | null

  // reset state on navigation
  inputEl.value = ""
  if (msgEl) msgEl.textContent = ""
  gateEl.style.removeProperty("display")

  const updateVisibilityWithGraph = () => {
    const overlay = document.querySelector(
      ".graph > .global-graph-outer.active, .graph > .local-graph-outer.active",
    ) as HTMLElement | null
    if (overlay) {
      gateEl.style.visibility = "hidden"
      gateEl.style.pointerEvents = "none"
    } else {
      gateEl.style.visibility = ""
      gateEl.style.pointerEvents = ""
    }
  }

  const positionGate = () => {
    if (!gate || !articleContent) return
    const rect = articleContent.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const offsetTop = Math.min(window.innerHeight * 0.5)
    const centerY = offsetTop
    gate.style.position = "fixed"
    gate.style.left = `${centerX}px`
    gate.style.top = `${centerY}px`
    gate.style.transform = "translate(-50%, -50%)"
    gate.style.zIndex = "1000"
    const availableWidth = Math.min(rect.width, window.innerWidth)
    gate.style.maxWidth = `${availableWidth}px`
    updateVisibilityWithGraph()
  }
  positionGate()
  window.addEventListener("resize", positionGate)
  window.addCleanup(() => window.removeEventListener("resize", positionGate))

  const graphRoot = document.querySelector(".graph") as HTMLElement | null
  if (graphRoot) {
    const observer = new MutationObserver(updateVisibilityWithGraph)
    observer.observe(graphRoot, {
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    })
    window.addCleanup(() => observer.disconnect())
  }

  async function sha256Hex(s: string): Promise<string> {
    const buf = new TextEncoder().encode(s)
    const digest = await crypto.subtle.digest("SHA-256", buf)
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
  }

  async function unlock() {
    const provided = (inputEl.value ?? "").trim()
    const plain = (gateEl.dataset.password ?? "").trim()
    const hash = (gateEl.dataset.hash ?? "").trim()
    let ok = false
    if (plain.length > 0) {
      ok = provided === plain
    } else if (hash.length > 0) {
      const hex = await sha256Hex(provided)
      ok = hex.toLowerCase() === hash.toLowerCase()
    }
    if (ok) {
      articleContent?.classList.remove("locked")
      gateEl.style.display = "none"
      if (msgEl) msgEl.textContent = ""
      window.removeEventListener("resize", positionGate)
    } else {
      if (msgEl) msgEl.textContent = "密码错误"
    }
  }

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Enter") unlock()
  }

  const onInput = () => {
    if (msgEl) msgEl.textContent = ""
  }

  btnEl.addEventListener("click", unlock)
  inputEl.addEventListener("keydown", onKey)
  inputEl.addEventListener("input", onInput)
  window.addCleanup(() => btnEl.removeEventListener("click", unlock))
  window.addCleanup(() => inputEl.removeEventListener("keydown", onKey))
  window.addCleanup(() => inputEl.removeEventListener("input", onInput))
})
