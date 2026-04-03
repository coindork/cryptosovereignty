import { computeLayout, MoleculeRenderer, fetchRemoteGraph, identifyGhosts, mergeForAtlas } from '@vora/mycelial-engine'
import type { PositionedNode, GraphData } from '@vora/mycelial-engine'
import { CRYPTO_CONFIG, GHOST_CONFIG, CHIRALITY_REMOTE_CONFIG } from './config'

// ============================================================
// TERM DATA — philosophical vocabulary linked to essays
// ============================================================
interface TermData { essay?: string; gloss?: string; external?: string }
const TERM_DATA: Record<string, TermData> = {
  'cryptosovereignty': { essay: '01-cryptosovereignty', gloss: 'The sovereign power of cryptography — legitimacy grounded in mathematical truth' },
  'veritas non auctoritas': { essay: '01-cryptosovereignty', gloss: 'Truth, not authority, makes law — the inversion of Hobbes' },
  'veritas, non auctoritas, facit legem': { essay: '01-cryptosovereignty', gloss: 'Truth, not authority, makes law' },
  'veritas, non auctoritas, facit legem.': { essay: '01-cryptosovereignty', gloss: 'Truth, not authority, makes law' },
  'veritas, non auctoritas.': { essay: '01-cryptosovereignty', gloss: 'Truth, not authority' },
  'leviathan': { essay: '07-the-sovereign-the-subject', gloss: "Hobbes' absolute sovereign — the political form Bitcoin replaces" },
  'partisan': { essay: '16-theory-of-the-crypto-partisan', gloss: 'The irregular fighter — the crypto-partisan operates in deterritorialized digital space' },
  'messianic': { essay: '12-messianic-bitcoin', gloss: "Benjamin's weak messianic power — the redemptive force hidden in Bitcoin" },
  'eidgenossenschaft': { essay: '03-the-new-form-of-power', gloss: 'Oath-fellowship — sovereign beings swearing mutual aid without surrendering sovereignty' },
  'sovereign mutualism': { essay: 'ext-sovereign-mutualism', gloss: 'Federation of sovereign clearings, each strengthened by every other' },
  'the clearing': { essay: 'ext-first-philosophy', gloss: "Heidegger's Lichtung — the space where truth presences" },
  'sovereign stack': { essay: 'ext-first-philosophy', gloss: 'Value → Communication → Cognition → Peoplehood — the four clearings' },
  'ereignis': { essay: 'ext-the-event-and-the-clearing', gloss: 'The Event of Appropriation — the happening through which Being and beings are brought into their own' },
  'gestell': { essay: '20-the-question-concerning-bitcoin', gloss: 'Enframing — the essence of modern technology that reduces everything to standing-reserve' },
  'lichtung': { essay: 'ext-first-philosophy', gloss: 'The Clearing — the open space where beings can appear and truth can happen' },
  'aletheia': { essay: 'ext-first-philosophy', gloss: 'Un-concealment — truth as the process of bringing into the open' },
  'dasein': { essay: 'ext-the-event-and-the-clearing', gloss: 'Being-there — the human being as the entity that questions its own Being' },
  'homo sacer': { essay: '05-the-political-theology-of-crypto', gloss: 'Sacred man — the figure stripped of political life, killed but not sacrificed' },
  'sorge': { essay: '18-the-hope-of-bitcoin', gloss: 'Care — the ontological ground of human existence in Heidegger' },
  'the question concerning technology': { essay: '20-the-question-concerning-bitcoin', gloss: "Heidegger's 1953 lecture on technology as a mode of revealing" },
  'sapere aude': { gloss: "Dare to know — Kant's motto for Enlightenment" },
  'cete': { essay: 'ext-the-solitary-sovereign', gloss: 'A gathering of badgers — here, a federation of sovereign nodes' },
  'foedus pacificum': { essay: 'ext-sovereign-mutualism', gloss: "Kant's pacific federation — sovereignty preserved through voluntary cooperation" },
  'geviert': { essay: 'ext-first-philosophy', gloss: 'The Fourfold — earth, sky, divinities, mortals gathered in the thing' },
  'the fourfold': { essay: 'ext-first-philosophy', gloss: 'Earth, sky, divinities, mortals — the four gathered in every genuine thing' },
  'poiesis': { essay: 'ext-first-philosophy', gloss: 'Bringing-forth — the mode of revealing that lets things come into presence' },
  'the event and the clearing': { essay: 'ext-the-event-and-the-clearing' },
  'first philosophy': { essay: 'ext-first-philosophy' },
  'the solitary sovereign': { essay: 'ext-the-solitary-sovereign' },
  'the question concerning bitcoin': { essay: '20-the-question-concerning-bitcoin' },
  'the concept of the political': { essay: '10-the-concept-of-the-political' },
  'the pedagogy of bitcoin': { essay: '13-the-pedagogy-of-bitcoin' },
  'theory of the crypto partisan': { essay: '16-theory-of-the-crypto-partisan' },
  'the encrypted meaning of crypto': { essay: '02-the-encrypted-meaning-of-crypto' },
  'the new form of power': { essay: '03-the-new-form-of-power' },
  'crypto truth and power': { essay: '04-crypto-truth-and-power' },
  'the political theology of crypto': { essay: '05-the-political-theology-of-crypto' },
  'crypto without criticisms': { essay: '06-crypto-without-criticisms' },
  'the sovereign and the subject': { essay: '07-the-sovereign-the-subject' },
  'the theological conquest of money': { essay: '08-the-theological-conquest-of-money' },
  'the legend of satoshi nakamoto': { essay: '09-the-legend-of-satoshi-nakamoto' },
  'the oath of machines': { essay: '11-the-oath-of-machines' },
  'messianic bitcoin': { essay: '12-messianic-bitcoin' },
  'the political theology of bitcoin': { essay: '14-the-political-theology-of-bitcoin' },
  'bitcoin and the state of emergency': { essay: '15-bitcoin-and-the-state-of-emergency' },
  'to my crypto comrades': { essay: '17-to-my-crypto-comrades' },
  'the hope of bitcoin': { essay: '18-the-hope-of-bitcoin' },
  'bitcoin and the conquest of privacy': { essay: '19-bitcoin-and-the-conquest-of-privacy' },
  'chirality': { external: 'https://coindork.github.io/mycelial-tree/', essay: 'chirality', gloss: 'Handedness — the irreducible asymmetry that makes encounter possible' },
  'the handiness of being': { external: 'https://coindork.github.io/mycelial-tree/', essay: 'the-handedness-of-being', gloss: 'The Heidegger constellation — chirality, dwelling, and the encounter' },
  'the handedness of being': { external: 'https://coindork.github.io/mycelial-tree/', essay: 'the-handedness-of-being' },
  'the constellation': { external: 'https://coindork.github.io/mycelial-tree/', essay: 'the-constellation' },
}

// ============================================================
// MATRIX RAIN BACKGROUND
// ============================================================
const matrixChars = '01アイウエオカキクケコサシスセソ₿∞∮∇∂λΣΩ'
let matrixOpacity = 0.035
let matrixCanvas: HTMLCanvasElement
let matrixCtx: CanvasRenderingContext2D
let matrixDrops: number[] = []

function initMatrix(): void {
  matrixCanvas = document.getElementById('matrix-canvas') as HTMLCanvasElement
  matrixCtx = matrixCanvas.getContext('2d')!

  function resize() {
    matrixCanvas.width = window.innerWidth * devicePixelRatio
    matrixCanvas.height = window.innerHeight * devicePixelRatio
    matrixCanvas.style.width = window.innerWidth + 'px'
    matrixCanvas.style.height = window.innerHeight + 'px'
    matrixCtx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    const cols = Math.floor(window.innerWidth / 18)
    matrixDrops = Array.from({ length: cols }, () => Math.random() * -100)
  }
  resize()
  window.addEventListener('resize', resize)

  function draw() {
    matrixCtx.fillStyle = 'rgba(3, 3, 3, 0.12)'
    matrixCtx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    matrixCtx.font = '12px JetBrains Mono, monospace'

    for (let i = 0; i < matrixDrops.length; i++) {
      const char = matrixChars[Math.floor(Math.random() * matrixChars.length)]
      const x = i * 18
      const y = matrixDrops[i] * 16
      matrixCtx.fillStyle = Math.random() > 0.85
        ? `rgba(0, 180, 216, ${matrixOpacity * 1.5})`
        : `rgba(0, 255, 65, ${matrixOpacity})`
      matrixCtx.fillText(char, x, y)
      if (y > window.innerHeight && Math.random() > 0.975) matrixDrops[i] = 0
      matrixDrops[i] += 0.5 + Math.random() * 0.3
    }
    requestAnimationFrame(draw)
  }
  draw()
}

// ============================================================
// BURST PARTICLES (for fracture moment)
// ============================================================
interface BurstParticle { x: number; y: number; vx: number; vy: number; life: number; decay: number; size: number; cerulean: boolean }
let bursts: BurstParticle[] = []

function spawnBurst(): void {
  const cx = window.innerWidth / 2
  const cy = window.innerHeight / 2
  for (let i = 0; i < 300; i++) {
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 8 + 3
    bursts.push({
      x: cx, y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      decay: Math.random() * 0.02 + 0.008,
      size: Math.random() * 3 + 1,
      cerulean: Math.random() > 0.3,
    })
  }
}

function drawBursts(): void {
  bursts = bursts.filter(b => b.life > 0)
  for (const b of bursts) {
    b.x += b.vx; b.y += b.vy
    b.vx *= 0.97; b.vy *= 0.97
    b.life -= b.decay
    if (b.life <= 0) continue
    matrixCtx.beginPath()
    matrixCtx.arc(b.x, b.y, b.size * b.life, 0, Math.PI * 2)
    if (b.cerulean) {
      matrixCtx.fillStyle = `rgba(0, 180, 216, ${b.life * 0.9})`
      matrixCtx.shadowColor = 'rgba(0, 180, 216, 0.6)'
    } else {
      matrixCtx.fillStyle = `rgba(255, 43, 43, ${b.life * 0.7})`
      matrixCtx.shadowColor = 'rgba(255, 43, 43, 0.4)'
    }
    matrixCtx.shadowBlur = 10
    matrixCtx.fill()
    matrixCtx.shadowBlur = 0
  }
  requestAnimationFrame(drawBursts)
}

// ============================================================
// AMBIENT DATA OVERLAYS
// ============================================================
const GENESIS_HASH = '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'

function showAmbientData(): void {
  const hashEl = document.getElementById('hash-readout')!
  const blockEl = document.getElementById('block-height')!

  hashEl.innerHTML = `genesis<br>${GENESIS_HASH.slice(0, 32)}<br>${GENESIS_HASH.slice(32)}`
  hashEl.classList.add('visible')

  let blockNum = 890000
  blockEl.textContent = `blk ${blockNum.toLocaleString()}`
  blockEl.classList.add('visible')
  setInterval(() => {
    blockNum += Math.floor(Math.random() * 3)
    blockEl.textContent = `blk ${blockNum.toLocaleString()}`
  }, 8000)
}

// ============================================================
// BOOT → INVERSION SEQUENCE
// ============================================================
function wait(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)) }

function addBootLine(text: string, cls = ''): void {
  const boot = document.getElementById('boot')!
  const line = document.createElement('div')
  line.className = 'boot-line ' + cls
  line.innerHTML = text
  boot.appendChild(line)
  requestAnimationFrame(() => line.classList.add('visible'))
}

async function typeInto(el: HTMLElement, text: string, speed = 50): Promise<void> {
  for (let i = 0; i < text.length; i++) {
    el.textContent += text[i]
    el.setAttribute('data-text', el.textContent || '')
    await wait(speed)
  }
}

function glitchFlash(count = 5, interval = 70): Promise<void> {
  return new Promise(resolve => {
    const overlay = document.getElementById('glitch-overlay')!
    let i = 0
    const bars: HTMLElement[] = []

    function flash() {
      bars.forEach(b => b.remove())
      bars.length = 0
      if (i >= count) { resolve(); return }
      overlay.style.opacity = '1'
      for (let j = 0; j < 4 + Math.floor(Math.random() * 6); j++) {
        const bar = document.createElement('div')
        bar.className = 'glitch-bar'
        bar.style.top = (Math.random() * 100) + '%'
        bar.style.height = (Math.random() * 4 + 1) + 'px'
        bar.style.opacity = String(Math.random() * 0.8 + 0.2)
        bar.style.background = Math.random() > 0.5 ? 'var(--cerulean)' : 'var(--red)'
        overlay.appendChild(bar)
        bars.push(bar)
      }
      i++
      setTimeout(flash, interval)
    }
    flash()
  })
}

async function runOpeningSequence(onComplete: () => void): Promise<void> {
  const boot = document.getElementById('boot')!
  const act1 = document.getElementById('act-1')!
  const act2 = document.getElementById('act-2')!
  const oldLatin = document.getElementById('old-latin')!
  const oldTranslation = document.getElementById('old-translation')!
  const oldSource = document.getElementById('old-source')!
  const newLaw = document.getElementById('new-law')!
  const glitchOverlay = document.getElementById('glitch-overlay')!
  const graphContainer = document.getElementById('graph-container')!
  const leviathan = document.getElementById('leviathan')!

  graphContainer.style.opacity = '0'
  graphContainer.style.transition = 'opacity 1.5s ease'

  // === BOOT SEQUENCE ===
  await wait(400)
  addBootLine('> initializing cryptographic verification layer...', 'bright')
  await wait(250)
  addBootLine('[  <span class="dim">OK</span>  ] sha256 hash engine loaded')
  await wait(180)
  addBootLine('[  <span class="dim">OK</span>  ] elliptic curve secp256k1 ready')
  await wait(180)
  addBootLine('[  <span class="dim">OK</span>  ] merkle tree verification active')
  await wait(150)
  addBootLine('[  <span class="dim">OK</span>  ] genesis block hash validated')
  await wait(150)
  addBootLine('[  <span class="dim">OK</span>  ] peer-to-peer consensus: 24 nodes connected')
  await wait(280)
  addBootLine('')
  addBootLine('> scanning for sovereign authority...', 'bright')
  await wait(500)
  addBootLine('[ <span class="fail">FAIL</span> ] no central authority found')
  await wait(180)
  addBootLine('[ <span class="fail">FAIL</span> ] no trusted third party detected')
  await wait(180)
  addBootLine('[ <span class="fail">FAIL</span> ] no state monopoly on violence')
  await wait(350)
  addBootLine('')
  addBootLine('[ <span class="warn">WARN</span> ] sovereignty source: <span class="warn">CRYPTOGRAPHIC PROOF</span>', 'bright')
  await wait(250)
  addBootLine('[ <span class="warn">WARN</span> ] authority model: <span class="warn">INVERTED</span>', 'bright')
  await wait(500)
  addBootLine('')
  addBootLine('> loading philosophical payload...', 'bright')
  await wait(700)

  // Fade boot, show ambient data
  boot.classList.add('hidden')
  showAmbientData()
  await wait(500)

  // === ACT 1: THE OLD LAW ===
  act1.classList.add('visible')
  await wait(400)
  oldLatin.classList.add('visible')
  leviathan.classList.add('rising') // Specter materializes behind the words
  await typeInto(oldLatin, 'Auctoritas, non veritas, facit legem.', 55)
  await wait(500)
  oldTranslation.classList.add('visible')
  oldSource.classList.add('visible')
  await wait(3000)

  // === THE GLITCH ===
  leviathan.classList.add('shatter') // The old sovereign shatters
  oldLatin.classList.add('active')
  await wait(250)
  await glitchFlash(5, 70)
  spawnBurst()
  matrixOpacity = 0.08

  // Flash
  matrixCtx.fillStyle = 'rgba(0, 180, 216, 0.12)'
  matrixCtx.fillRect(0, 0, window.innerWidth, window.innerHeight)

  await wait(120)
  glitchOverlay.innerHTML = ''
  glitchOverlay.style.opacity = '0'
  act1.classList.remove('visible')
  act1.classList.add('hidden')
  await wait(250)

  // === ACT 2: THE INVERSION ===
  matrixOpacity = 0.025
  act2.classList.add('visible')
  await wait(80)
  newLaw.classList.add('visible')
  await wait(4500)

  // === TRANSITION TO CONSTELLATION ===
  act2.style.transition = 'opacity 1.5s ease'
  act2.style.opacity = '0'
  graphContainer.style.opacity = '1'

  await wait(800)
  document.body.classList.add('graph-active')
  act2.style.display = 'none'
  onComplete()
}

// ============================================================
// SIDEBAR
// ============================================================
function buildSidebar(nodes: PositionedNode[], renderer: MoleculeRenderer): void {
  const list = document.querySelector('.sidebar-list')!
  list.innerHTML = ''

  const order = CRYPTO_CONFIG.readingOrder
  const orderMap = new Map(order.map((id, i) => [id, i + 1]))
  const clusterNodes = nodes
    .filter(n => orderMap.has(n.id))
    .sort((a, b) => (orderMap.get(a.id) ?? 99) - (orderMap.get(b.id) ?? 99))

  for (const node of clusterNodes) {
    const num = orderMap.get(node.id) ?? 99
    const item = document.createElement('div')
    item.className = 'sidebar-item'
    item.dataset.nodeId = node.id
    item.innerHTML = `<span class="item-num">${String(num).padStart(2, '0')}</span><span class="item-title">${node.title.toLowerCase()}</span>`

    item.addEventListener('mouseenter', () => {
      renderer.resetTrace(node.id)
      renderer.highlightedNodeId = node.id
      list.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'))
      item.classList.add('active')
    })

    item.addEventListener('mouseleave', () => {
      renderer.highlightedNodeId = null
      item.classList.remove('active')
    })

    item.addEventListener('click', () => openEssay(node.id))
    list.appendChild(item)
  }
}

// ============================================================
// ESSAY READER (full page)
// ============================================================
let currentRenderer: MoleculeRenderer | null = null
let currentEssayId: string | null = null
let essayAbort: AbortController | null = null

async function openEssay(id: string): Promise<void> {
  const reader = document.getElementById('essay-reader')!
  const content = reader.querySelector('.reader-content')!
  const chapterLabel = document.getElementById('reader-chapter')!

  // Cancel any in-flight fetch
  if (essayAbort) essayAbort.abort()
  essayAbort = new AbortController()
  const signal = essayAbort.signal

  currentEssayId = id

  // Show chapter number
  const order = CRYPTO_CONFIG.readingOrder
  const idx = order.indexOf(id)
  if (idx >= 0) {
    chapterLabel.textContent = `chapter ${String(idx + 1).padStart(2, '0')} / ${order.length}`
  } else {
    chapterLabel.textContent = ''
  }

  // Update prev/next buttons
  updateEssayNav(idx, order)

  content.innerHTML = '<p style="color: var(--text-dim); font-family: var(--mono); font-size: 0.8rem;">loading...</p>'
  reader.classList.add('open')

  try {
    const base = import.meta.env.BASE_URL
    const resp = await fetch(`${base}essays/${id}.html`, { signal })
    // Guard: only update if this is still the active essay
    if (currentEssayId !== id) return
    if (resp.ok) {
      content.innerHTML = await resp.text()
      content.scrollTop = 0
      linkifyTerms(content)
    } else {
      content.innerHTML = '<p style="color: var(--red); font-family: var(--mono); font-size: 0.8rem;">[ ERROR ] essay not found</p>'
    }
  } catch (e) {
    if ((e as Error).name === 'AbortError') return
    if (currentEssayId !== id) return
    content.innerHTML = '<p style="color: var(--red); font-family: var(--mono); font-size: 0.8rem;">[ ERROR ] failed to load essay</p>'
  }
}

function updateEssayNav(idx: number, order: string[]): void {
  const prevBtn = document.getElementById('essay-prev')!
  const nextBtn = document.getElementById('essay-next')!

  if (idx <= 0) {
    prevBtn.classList.add('disabled')
  } else {
    prevBtn.classList.remove('disabled')
    prevBtn.onclick = () => openEssay(order[idx - 1])
  }

  if (idx < 0 || idx >= order.length - 1) {
    nextBtn.classList.add('disabled')
  } else {
    nextBtn.classList.remove('disabled')
    nextBtn.onclick = () => openEssay(order[idx + 1])
  }
}

function closeReader(): void {
  document.getElementById('essay-reader')!.classList.remove('open')
  currentEssayId = null
}

function linkifyTerms(container: Element): void {
  const emElements = container.querySelectorAll('em')

  for (const em of emElements) {
    const text = em.textContent?.trim() || ''
    const lower = text.toLowerCase().replace(/[\u201C\u201D]/g, '"').replace(/[\u2018\u2019]/g, "'")

    let data = TERM_DATA[lower]
    if (!data) {
      const stripped = lower.replace(/[.,;:!?]$/, '').trim()
      data = TERM_DATA[stripped]
    }
    if (!data) continue

    const essayId = data.essay

    if (essayId) {
      const link = document.createElement('a')
      link.className = 'term-link'
      link.textContent = text
      link.href = '#'
      link.dataset.essayId = essayId
      if (data.gloss) link.title = data.gloss

      link.addEventListener('mouseenter', () => {
        if (currentRenderer) {
          currentRenderer.resetTrace(essayId)
          currentRenderer.highlightedNodeId = essayId
        }
      })

      link.addEventListener('mouseleave', () => {
        if (currentRenderer) currentRenderer.highlightedNodeId = null
      })

      link.addEventListener('click', (e) => {
        e.preventDefault()
        if (data.external) {
          window.location.href = data.external + '#' + essayId
        } else {
          openEssay(essayId)
        }
      })

      em.replaceWith(link)
    } else if (data.gloss) {
      const span = document.createElement('span')
      span.className = 'term-gloss'
      span.textContent = text
      span.title = data.gloss
      em.replaceWith(span)
    }
  }
}

function setupReader(): void {
  document.getElementById('reader-back')!.addEventListener('click', closeReader)
  document.getElementById('reader-close')!.addEventListener('click', closeReader)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeReader()
  })
}

// ============================================================
// SHOW UI ELEMENTS
// ============================================================
function showUI(): void {
  setTimeout(() => {
    document.getElementById('sidebar')!.classList.add('visible')
    document.getElementById('cluster-nav')?.classList.add('visible')
    document.getElementById('prompt-bar')?.classList.add('visible')
  }, 1500)
}

// ============================================================
// CLUSTER NAV (constellation / atlas toggle)
// ============================================================
function setupClusterNav(nodes: PositionedNode[], renderer: MoleculeRenderer, data: GraphData): void {
  let activeMode: 'cryptosovereignty' | 'atlas' = 'cryptosovereignty'
  const nav = document.getElementById('cluster-nav')!
  const labels = nav.querySelectorAll('.cluster-label[data-cluster]')

  labels.forEach(label => {
    label.addEventListener('click', async () => {
      const mode = (label as HTMLElement).dataset.cluster as 'cryptosovereignty' | 'atlas'
      if (mode === activeMode) return

      if (mode === 'cryptosovereignty') {
        const singleNodes = computeLayout(data, [CRYPTO_CONFIG])
        renderer.clearScene()
        renderer.buildScene(singleNodes, data.edges)
        renderer.travelToCluster('cryptosovereignty')
        buildSidebar(singleNodes, renderer)
        activeMode = mode
      } else if (mode === 'atlas') {
        const remoteData = await fetchRemoteGraph(GHOST_CONFIG.remoteGraphUrl)
        if (!remoteData) return // activeMode unchanged — user can retry
        const merged = mergeForAtlas(data, remoteData)
        const atlasConfigs = [
          { ...CRYPTO_CONFIG, clusterCenter: { x: -200, y: 0 } },
          { ...CHIRALITY_REMOTE_CONFIG, clusterCenter: { x: 200, y: 0 } },
        ]
        const atlasNodes = computeLayout(merged, atlasConfigs)
        renderer.clearScene()
        renderer.buildAtlasScene(atlasNodes, merged.edges, atlasConfigs)
        renderer.pullBackCamera()
        buildSidebar(atlasNodes, renderer)
        activeMode = mode
      }

      labels.forEach(l => l.classList.remove('active'))
      label.classList.add('active')
    })
  })
}

// ============================================================
// INIT
// ============================================================
async function init(): Promise<void> {
  // Start matrix rain + burst renderer immediately
  initMatrix()
  requestAnimationFrame(drawBursts)

  // Load graph data
  const base = import.meta.env.BASE_URL
  const resp = await fetch(`${base}graph.json`)
  const data: GraphData = await resp.json()

  // Set up Three.js renderer
  const container = document.getElementById('graph-container')!
  const renderer = new MoleculeRenderer(container, CRYPTO_CONFIG)
  currentRenderer = renderer

  const nodes = computeLayout(data, [CRYPTO_CONFIG])
  renderer.buildScene(nodes, data.edges)

  // Track ghost node IDs for click routing
  const ghostIds = new Set<string>()

  renderer.onNodeClick = (nodeId) => {
    if (ghostIds.has(nodeId)) {
      window.location.href = `${GHOST_CONFIG.remoteSiteUrl}#${nodeId}`
      return
    }
    renderer.focusNode(nodeId)
    openEssay(nodeId)
  }

  buildSidebar(nodes, renderer)
  setupReader()
  setupClusterNav(nodes, renderer, data)

  // Fetch ghost nodes (non-blocking)
  fetchRemoteGraph(GHOST_CONFIG.remoteGraphUrl).then(remoteData => {
    if (!remoteData) return
    const { ghostNodes, ghostEdges } = identifyGhosts(data, remoteData, GHOST_CONFIG)
    if (ghostNodes.length === 0) return
    for (const g of ghostNodes) ghostIds.add(g.id)
    const allNodes = [...data.nodes, ...ghostNodes]
    const allEdges = [...data.edges, ...ghostEdges]
    const allPositioned = computeLayout({ nodes: allNodes, edges: allEdges }, [CRYPTO_CONFIG])
    const ghostPositioned = allPositioned.filter(n => ghostNodes.some(g => g.id === n.id))
    for (const g of ghostPositioned) g.z -= 40
    renderer.addGhostNodes(ghostPositioned, ghostEdges, GHOST_CONFIG.remoteColor, 0xD4A853, GHOST_CONFIG.remoteSiteUrl)
  })

  // Sidebar pulse sync
  function syncSidebarPulse(): void {
    const activeItem = document.querySelector('.sidebar-item.active .item-num') as HTMLElement | null
    if (activeItem) {
      const p = renderer.currentPulse
      activeItem.style.textShadow = `0 0 ${4 + p * 8}px var(--cerulean)`
    }
    requestAnimationFrame(syncSidebarPulse)
  }
  requestAnimationFrame(syncSidebarPulse)

  // Deep link: skip opening, go straight to essay
  if (window.location.hash.length > 1) {
    const essayId = window.location.hash.slice(1)
    document.getElementById('boot')!.style.display = 'none'
    document.getElementById('act-1')!.style.display = 'none'
    document.getElementById('act-2')!.style.display = 'none'
    container.style.opacity = '1'
    document.body.classList.add('graph-active')
    showAmbientData()
    renderer.start()
    showUI()
    renderer.highlightedNodeId = essayId
    openEssay(essayId)
    return
  }

  // Run the opening sequence → then start constellation
  runOpeningSequence(() => {
    renderer.start()
    showUI()
  })
}

init().catch(err => {
  console.error('Initialization failed:', err)
  const container = document.getElementById('graph-container')
  if (container) {
    container.innerHTML = '<p style="color:#888;padding:2rem;font-family:system-ui;">Could not load visualization. Please try refreshing the page.</p>'
  }
})
