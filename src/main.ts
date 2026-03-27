import { computeLayout, MoleculeRenderer, fetchRemoteGraph, identifyGhosts, mergeForAtlas } from '@vora/mycelial-engine'
import type { PositionedNode, GraphData } from '@vora/mycelial-engine'
import { CRYPTO_CONFIG, GHOST_CONFIG, CHIRALITY_REMOTE_CONFIG } from './config'

// Philosophical terms: essay link + glossary definition
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
  'sovereign stack': { essay: 'ext-first-philosophy', gloss: 'Value \u2192 Communication \u2192 Cognition \u2192 Peoplehood — the four clearings' },
  // Heidegger terms that appear in crypto essays
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
  // Essay title references
  'the event and the clearing': { essay: 'ext-the-event-and-the-clearing' },
  'first philosophy': { essay: 'ext-first-philosophy' },
  'the solitary sovereign': { essay: 'ext-the-solitary-sovereign' },
  'the question concerning bitcoin': { essay: '20-the-question-concerning-bitcoin' },
  'the concept of the political': { essay: '10-the-concept-of-the-political' },
  'the pedagogy of bitcoin': { essay: '13-the-pedagogy-of-bitcoin' },
  'theory of the crypto partisan': { essay: '16-theory-of-the-crypto-partisan' },
  // Additional essay title references
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
  // Cross-site: The Handiness of Being
  'chirality': { external: 'https://coindork.github.io/mycelial-tree/', essay: 'chirality', gloss: 'Handedness — the irreducible asymmetry that makes encounter possible' },
  'the handiness of being': { external: 'https://coindork.github.io/mycelial-tree/', essay: 'the-handedness-of-being', gloss: 'The Heidegger constellation — chirality, dwelling, and the encounter' },
  'the handedness of being': { external: 'https://coindork.github.io/mycelial-tree/', essay: 'the-handedness-of-being' },
  'the constellation': { external: 'https://coindork.github.io/mycelial-tree/', essay: 'the-constellation' },
}

function setupIntro(onComplete: () => void): void {
  const intro = document.getElementById('intro')!
  const sections = document.querySelectorAll('.intro-section')
  const scrollHint = document.querySelector('.intro-scroll-hint')
  const graphContainer = document.getElementById('graph-container')!

  graphContainer.style.opacity = '0'
  graphContainer.style.transition = 'opacity 1.5s ease'

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.3 }
  )
  sections.forEach((section) => observer.observe(section))

  let completed = false

  function checkScroll(): void {
    if (completed) return
    const scrollProgress = window.scrollY / (intro.scrollHeight - window.innerHeight)

    if (window.scrollY > 100 && scrollHint) scrollHint.classList.add('hidden')
    if (window.scrollY <= 100 && scrollHint) scrollHint.classList.remove('hidden')

    // Graph only starts appearing very late
    if (scrollProgress > 0.8) {
      graphContainer.style.opacity = String(Math.min((scrollProgress - 0.8) * 3, 0.4))
    } else {
      graphContainer.style.opacity = '0'
    }

    // Intro text stays fully visible until 90%, then fades
    if (scrollProgress > 0.9) {
      const fade = 1 - (scrollProgress - 0.9) / 0.08
      intro.style.opacity = String(Math.max(fade, 0))
    } else {
      intro.style.opacity = '1'
    }

    // Only transition at the absolute bottom
    if (scrollProgress > 0.98) {
      completed = true
      observer.disconnect()
      intro.style.pointerEvents = 'none'
      graphContainer.style.opacity = '1'

      setTimeout(() => {
        document.body.classList.add('graph-active')
        intro.style.display = 'none'
        window.scrollTo(0, 0)
        onComplete()
      }, 800)
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true })

  if (window.location.hash.length > 1) {
    completed = true
    intro.style.display = 'none'
    graphContainer.style.opacity = '1'
    document.body.classList.add('graph-active')
    onComplete()
  }
}

function buildSidebar(nodes: PositionedNode[], renderer: MoleculeRenderer): void {
  const list = document.querySelector('.sidebar-list')!
  const heading = document.querySelector('.sidebar-heading')!
  list.innerHTML = ''

  const order = CRYPTO_CONFIG.readingOrder
  heading.textContent = 'Book Chapters'

  // Filter nodes to this cluster's order and sort by position in that order
  const orderMap = new Map(order.map((id, i) => [id, i + 1]))
  const clusterNodes = nodes
    .filter(n => orderMap.has(n.id))
    .sort((a, b) => (orderMap.get(a.id) ?? 99) - (orderMap.get(b.id) ?? 99))

  for (const node of clusterNodes) {
    const num = orderMap.get(node.id) ?? 99
    const item = document.createElement('div')
    item.className = 'sidebar-item'
    item.dataset.nodeId = node.id
    item.innerHTML = `<span class="item-num">${num}.</span><span class="item-title">${node.title}</span>`

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

    item.addEventListener('click', () => {
      openEssay(node.id)
    })

    list.appendChild(item)
  }
}

let currentRenderer: MoleculeRenderer | null = null

async function openEssay(id: string): Promise<void> {
  const reader = document.getElementById('essay-reader')!
  const content = reader.querySelector('.reader-content')!

  content.innerHTML = '<p style="color: var(--text-dim);">Loading\u2026</p>'
  reader.classList.add('open')

  const base = import.meta.env.BASE_URL
  const resp = await fetch(`${base}essays/${id}.html`)
  if (resp.ok) {
    content.innerHTML = await resp.text()
    content.scrollTop = 0
    linkifyTerms(content)
  } else {
    content.innerHTML = '<p style="color: var(--text-dim);">Essay not found.</p>'
  }
}

function linkifyTerms(container: Element): void {
  const emElements = container.querySelectorAll('em')

  for (const em of emElements) {
    const text = em.textContent?.trim() || ''
    const lower = text.toLowerCase().replace(/[\u201C\u201D]/g, '"').replace(/[\u2018\u2019]/g, "'")

    // Try exact match, then without trailing punctuation
    let data = TERM_DATA[lower]
    if (!data) {
      const stripped = lower.replace(/[.,;:!?]$/, '').trim()
      data = TERM_DATA[stripped]
    }

    if (!data) continue

    const essayId = data.essay

    if (essayId) {
      // Clickable link to essay
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
        if (currentRenderer) {
          currentRenderer.highlightedNodeId = null
        }
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
      // Glossary-only term — tooltip but no link
      const span = document.createElement('span')
      span.className = 'term-gloss'
      span.textContent = text
      span.title = data.gloss
      em.replaceWith(span)
    }
  }
}

function setupReader(): void {
  const reader = document.getElementById('essay-reader')!
  const closeBtn = reader.querySelector('.reader-close')!

  closeBtn.addEventListener('click', () => {
    reader.classList.remove('open')
  })

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') reader.classList.remove('open')
  })
}

function showSidebar(): void {
  setTimeout(() => {
    document.getElementById('sidebar')!.classList.add('visible')
    document.getElementById('cluster-nav')?.classList.add('visible')
  }, 2000)
}

function setupClusterNav(nodes: PositionedNode[], renderer: MoleculeRenderer, data: GraphData): void {
  let activeMode: 'cryptosovereignty' | 'atlas' = 'cryptosovereignty'
  const nav = document.getElementById('cluster-nav')!
  const labels = nav.querySelectorAll('.cluster-label[data-cluster]')

  labels.forEach(label => {
    label.addEventListener('click', async () => {
      const mode = (label as HTMLElement).dataset.cluster as 'cryptosovereignty' | 'atlas'
      if (mode === activeMode) return

      activeMode = mode

      if (mode === 'cryptosovereignty') {
        // Rebuild single constellation scene
        const singleNodes = computeLayout(data, [CRYPTO_CONFIG])
        renderer.clearScene()
        renderer.buildScene(singleNodes, data.edges)
        renderer.travelToCluster('cryptosovereignty')
        buildSidebar(singleNodes, renderer)
      } else if (mode === 'atlas') {
        const remoteData = await fetchRemoteGraph(GHOST_CONFIG.remoteGraphUrl)
        if (!remoteData) {
          console.warn('Could not load remote graph for atlas mode')
          return
        }
        const merged = mergeForAtlas(data, remoteData)
        const atlasConfigs = [
          { ...CRYPTO_CONFIG, clusterCenter: { x: -200, y: 0 } },
          { ...CHIRALITY_REMOTE_CONFIG, clusterCenter: { x: 200, y: 0 } },
        ]
        const atlasNodes = computeLayout(merged, atlasConfigs)
        renderer.clearScene()
        renderer.buildAtlasScene(atlasNodes, merged.edges, atlasConfigs)
        renderer.pullBackCamera()
        // Update sidebar to show crypto reading order in atlas view
        buildSidebar(atlasNodes, renderer)
      }

      // Update active label
      labels.forEach(l => l.classList.remove('active'))
      label.classList.add('active')
    })
  })
}

async function init(): Promise<void> {
  const base = import.meta.env.BASE_URL
  const resp = await fetch(`${base}graph.json`)
  const data: GraphData = await resp.json()

  const container = document.getElementById('graph-container')!
  const renderer = new MoleculeRenderer(container, CRYPTO_CONFIG)
  currentRenderer = renderer

  const nodes = computeLayout(data, [CRYPTO_CONFIG])
  renderer.buildScene(nodes, data.edges)
  buildSidebar(nodes, renderer)
  setupReader()
  setupClusterNav(nodes, renderer, data)

  // Fetch ghost nodes from the remote constellation (non-blocking)
  fetchRemoteGraph(GHOST_CONFIG.remoteGraphUrl).then(remoteData => {
    if (!remoteData) return
    const { ghostNodes, ghostEdges } = identifyGhosts(data, remoteData, GHOST_CONFIG)
    if (ghostNodes.length === 0) return
    // Position ghost nodes: run layout with both sets, extract ghost positions
    const allNodes = [...data.nodes, ...ghostNodes]
    const allEdges = [...data.edges, ...ghostEdges]
    const allPositioned = computeLayout({ nodes: allNodes, edges: allEdges }, [CRYPTO_CONFIG])
    const ghostPositioned = allPositioned.filter(n => ghostNodes.some(g => g.id === n.id))
    // Push ghosts back in z
    for (const g of ghostPositioned) g.z -= 40
    renderer.addGhostNodes(ghostPositioned, ghostEdges, GHOST_CONFIG.remoteColor, 0xD4A853, GHOST_CONFIG.remoteSiteUrl)
  })

  // Sidebar pulse sync — update active item glow in sync with renderer
  function syncSidebarPulse(): void {
    const activeItem = document.querySelector('.sidebar-item.active .item-num') as HTMLElement | null
    if (activeItem) {
      const p = renderer.currentPulse
      activeItem.style.textShadow = `0 0 ${4 + p * 8}px var(--orange)`
    }
    requestAnimationFrame(syncSidebarPulse)
  }
  requestAnimationFrame(syncSidebarPulse)

  setupIntro(() => {
    renderer.start()
    showSidebar()
  })

  if (window.location.hash.length > 1) {
    const essayId = window.location.hash.slice(1)
    renderer.start()
    showSidebar()
    renderer.highlightedNodeId = essayId
    openEssay(essayId)
  }
}

init()
