import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} wiki with codes status, Trello and Discord checks, walkthrough notes, night-shift survival priorities, and source-backed Roblox help.`,
  valueProposition: `Check ${gameConfig.name} codes safely, confirm official links, and use a night-shift checklist before you step into the store.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial fan-made resource. Roblox and the game creators remain the source of record for official support and updates.`,
  lastUpdated: "2026-07-04",
  freshnessLabel: "codes, official links, and walkthrough notes ready for verification",
  keywords: [
    `${gameConfig.name}`,
    `${gameConfig.name} codes`,
    `${gameConfig.name} tier list`,
    `${gameConfig.name} trello`,
    `${gameConfig.name} discord`,
    `${gameConfig.name} wiki`,
    `${gameConfig.name} official wiki`,
    `${gameConfig.name} guide`,
    `${gameConfig.name} calculator`,
    "Roblox codes",
    "Roblox tier list"
  ],
  navGroups: [
    {
      label: "Home",
      href: "/",
      items: []
    },
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Active Codes", href: "/codes", description: "Latest known rewards and redemption steps." },
        { label: "Sources", href: "/sources", description: "Where code and update claims should be checked." }
      ]
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: [
        { label: "Rankings", href: "/tier-list", description: "Best current picks and why they matter." },
        { label: "Checklist", href: "/calculator", description: "Night-shift prep and source-check helper." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Wiki Hub", href: "/wiki", description: "Monsters, endings, badges, areas, items, and update notes." },
        { label: "Guides", href: "/guides", description: "Walkthrough, survival habits, source checks, and night-shift routes." },
        { label: "Trello/Discord", href: "/trello", description: "Official board, Discord, and wiki status." }
      ]
    },
    {
      label: "About",
      href: "/about",
      items: [
        { label: "About Us", href: "/about", description: "Author profile, editorial process, and source standards." },
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status, advertising boundaries, and source precedence." },
        { label: "Contact Us", href: "/contact", description: "Corrections, privacy questions, and editorial contact path." },
        { label: "Privacy Policy", href: "/privacy", description: "Privacy, analytics, ads, and third-party cookie disclosure." },
        { label: "Terms of Service", href: "/terms", description: "Use rules, unofficial status, and third-party service terms." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Get codes" },
  { href: "/tier-list", label: "View tier list" },
  { href: "/trello", label: "Check sources" },
  { href: "/calculator", label: "Use checklist" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Code status", value: "Needs check", note: "No fake working-code claims" },
  { label: "Core pages", value: "10", note: "Codes, sources, checklist, guides, wiki" },
  { label: "Source notes", value: "Clear", note: "Official, community, and needs-check labels" },
  { label: "Source model", value: "Clear", note: "Official and community links split" }
];

export const activeCodes: GameCode[] = [];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Check codes before joining",
    tier: "S",
    role: "Pre-shift prep",
    reason: "Codes are the fastest thing to verify before a play session, but no working code should be shown until a source or live test confirms it.",
    confidence: "Needs check",
    bestFor: ["new players", "quick checks"],
    sourceNote: "Check Roblox description, creator channels, and recent trusted trackers.",
    teamNote: "Use this before following any community code list."
  },
  {
    name: "Confirm official links",
    tier: "A",
    role: "Source safety",
    reason: "Trello, Discord, and wiki claims should be separated from community mirrors until a creator-owned source is confirmed.",
    confidence: "Needs check",
    bestFor: ["updates", "social links"],
    sourceNote: "Use the official Roblox page first, then verified creator channels.",
    teamNote: "Avoid joining random Discord links from copycat pages."
  },
  {
    name: "Run the night-shift checklist",
    tier: "A",
    role: "Survival routine",
    reason: "A checklist helps players track tasks, danger signs, exits, and guide notes without pretending exact monster data is already verified.",
    confidence: "Needs check",
    bestFor: ["walkthroughs", "badge hunting"],
    sourceNote: "Replace with tested in-game notes after route research.",
    teamNote: "Add monster and ending details only after confirmation."
  }
];

export const toolCards: LinkCard[] = [
  {
    title: `${gameConfig.name} Checklist`,
    href: "/calculator",
    eyebrow: "Primary tool",
    description: "A night-shift prep helper for codes, official links, tasks, threat notes, and guide checks."
  },
  {
    title: `${gameConfig.name} Tier List`,
    href: "/tier-list",
    eyebrow: "Rankings",
    description: "Ranks source checks and survival priorities without inventing unverified monster or item data."
  },
  {
    title: `${gameConfig.name} Codes`,
    href: "/codes",
    eyebrow: "Codes",
    description: "Tracks active codes, expired-code conflicts, and redemption instructions."
  },
  {
    title: `${gameConfig.name} Trello & Discord`,
    href: "/trello",
    eyebrow: "Community status",
    description: "Clarifies official Trello, Discord, wiki, and Roblox source status for update-sensitive claims."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "Beginner guide",
    href: "/guides",
    eyebrow: "Guide",
    description: "First-shift route, mistakes to avoid, and what to verify before playing."
  },
  {
    title: "Progression guide",
    href: "/guides",
    eyebrow: "Guide",
    description: "Task order, store-area notes, and update-sensitive survival tips."
  },
  {
    title: "Advanced strategy",
    href: "/guides",
    eyebrow: "Guide",
    description: "Endings, badges, secrets, and higher-risk routes once they are confirmed."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: "Items and rewards",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Use for codes, badges, store items, endings, and rewards once verified."
  },
  {
    title: "Maps and systems",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Use for store areas, tasks, danger signs, events, and mechanics."
  },
  {
    title: "Builds and entities",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Use for monsters, NPCs, endings, badges, and route notes."
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "Use this page as the source of record for game title, creator, and live Roblox availability."
  },
  {
    title: "Trello, Discord, and board status",
    href: gameConfig.dataSources.trello && gameConfig.dataSources.trello !== "#" ? gameConfig.dataSources.trello : (gameConfig.dataSources.discord && gameConfig.dataSources.discord !== "#" ? gameConfig.dataSources.discord : "/trello"),
    eyebrow: "Community",
    description: "Use this status route or verified creator links to separate official boards from community references."
  },
  {
    title: "Source checklist",
    href: "/sources",
    eyebrow: "Editorial",
    description: "Document which claims are official, community confirmed, or still uncertain."
  }
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Freshness first",
    body: "Codes, updates, and tier lists should show a visible checked date and avoid pretending unverified claims are final."
  },
  {
    title: "Entity coverage",
    body: "Split confirmed monsters, endings, badges, store areas, items, and update notes into wiki pages when search demand exists."
  },
  {
    title: "Fan-site clarity",
    body: "This fan site clearly points players back to official Roblox and creator-owned support paths."
  }
];

export const videoGuides: LinkCard[] = [
  {
    title: "Gameplay overview",
    href: "#",
    eyebrow: "Video",
    description: "Use a current YouTube creator guide that explains the game loop and shows real gameplay."
  },
  {
    title: "First-shift route",
    href: "#",
    eyebrow: "Video",
    description: "Use a recent YouTube walkthrough for the first session or first major unlock."
  },
  {
    title: "Secrets and endings",
    href: "#",
    eyebrow: "Video",
    description: "Use a YouTube video that supports endings, badge routes, update context, or advanced survival advice."
  }
];

export const faqs: Record<"home" | "codes" | "tierList" | "calculator", FaqItem[]> = {
  home: [
    {
      q: `What is ${gameConfig.name} Wiki?`,
      a: `${gameConfig.name} Wiki is a fan-made Roblox resource for codes status, official-source checks, walkthrough notes, survival priorities, and a night-shift checklist.`
    },
    {
      q: `Is this the official ${gameConfig.name} website?`,
      a: "No. This is an unofficial fan site. Use the official Roblox page and creator-owned channels for official support, purchases, moderation, and account issues."
    },
    {
      q: `How often should ${gameConfig.name} codes be checked?`,
      a: "Codes should be checked whenever the game updates, reaches milestones, or community sources report new rewards. Keep the checked date visible."
    },
    {
      q: `What pages should be expanded first?`,
      a: "Start with codes, Trello/Discord status, the checklist, walkthrough guide, wiki hub, and sources. Add monster, ending, badge, and item pages after research confirms the details."
    }
  ],
  codes: [
    {
      q: `Where do ${gameConfig.name} codes come from?`,
      a: "Use official Roblox descriptions, creator groups, Discord announcements, Trello boards, and trusted community trackers when available."
    },
    {
      q: "Why are some codes marked Needs check?",
      a: "Uncertain rewards stay clearly labeled so the page does not overstate verification."
    }
  ],
  tierList: [
    {
      q: "How should the tier list be updated?",
      a: "Use it as a source and survival-priority guide until verified monsters, items, endings, or badges support more specific rankings."
    }
  ],
  calculator: [
    {
      q: "Is the checklist exact?",
      a: "The checklist is a starter helper. Replace generic tasks with verified store areas, threat signs, endings, badges, and item notes as research improves."
    }
  ]
};
