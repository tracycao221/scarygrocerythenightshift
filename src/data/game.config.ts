import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "Scary Grocery The Night Shift",
  slug: "scary-grocery-the-night-shift",
  domain: "https://scarygrocerythenightshift.com",
  theme: {
    primaryColor: "#FACC15",
    accentColor: "#38BDF8",
    surfaceColor: "#111113",
    style: "roblox-seo-hub"
  },
  currency: {
    name: "Night shift notes",
    abbr: "NOTES"
  },
  features: {
    hasCalculator: true,
    hasTierList: true,
    hasCodesPage: true,
    hasBrainrotIndex: false,
    hasHandbook: true
  },
  updateCadence: "Daily source checks while the game is hot",
  dataSources: {
    officialGameUrl: "https://www.roblox.com/games/96153864779911/Scary-Grocery-The-Night-Shift",
    discord: "#",
    trello: "#"
  },
  ads: {
    publisher: "Adsterra + Google AdSense",
    usesRuntimeConfig: true
  }
};
