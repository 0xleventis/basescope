/**
 * BASE SCOPE — Token Registry
 * ─────────────────────────────────────────────────────────────────────────────
 * Add custom token metadata here for any token that is missing a logo, socials,
 * or a description — whether or not it appears in GeckoTerminal.
 *
 * KEY FORMAT
 *   "{network}_{baseTokenContractAddress}"   (everything lowercase)
 *
 *   Examples:
 *     "eth_0xabc123..."          Ethereum mainnet token
 *     "base_0xabc123..."         Base chain token
 *     "bsc_0xabc123..."          BNB Smart Chain token
 *     "solana_tokenMintAddress"  Solana token mint
 *
 * LOGO
 *   1. Drop a PNG or WEBP file into   public/token-logos/
 *   2. Set logoUrl to               "/token-logos/yourfile.png"
 *   You can also use any external HTTPS URL.
 *
 * FIELDS (all optional — only fill what you know)
 *   name        — display name
 *   symbol      — ticker symbol
 *   logoUrl     — image URL (local or external)
 *   description — one-paragraph project description
 *   website     — full URL including https://
 *   twitter     — full URL  e.g. https://twitter.com/handle
 *   telegram    — full URL  e.g. https://t.me/group
 *   discord     — full URL  e.g. https://discord.gg/invite
 *   tags        — labels shown as chips, e.g. ["DeFi", "Meme"]
 *
 * SUPPORTED NETWORK IDs
 *   eth · base · bsc · polygon_pos · arbitrum · optimism · avalanche · solana
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { TokenRegistryEntry } from '../types';

export const TOKEN_REGISTRY: Record<string, TokenRegistryEntry> = {
  // ── Paste your entries below ──────────────────────────────────────────────

  'base_0xa1415856dc761a234074d6ddd74b5fee1ad37eaa46e4951bc31d280be5dfda1a': {
    name:        'Base Scope',
    symbol:      'SCOPE',
    logoUrl:     '/token-logos/logo.png',
    description: 'Official base screener.',
    website:     'https://basescopes.xyz',
    twitter:     'https://twitter.com/basescopes',
    telegram:    'https://t.me/',
    discord:     'https://discord.gg/',
    tags:        ['DeFi', 'Yield'],
  },

  '0xc83ab83334651f7221b642010621c206bdd939afd8b7dfb3423807ff6132d20b': {
    name:        'TAP',
    symbol:      'TAP',
    logoUrl:     '/token-logos/tap.png',
    description: "I made this image during a moment of FOMO posting on the Base app, a time that still feels oddly vivid in hindsight. It's memorable how Jesse Pollak from Base interacted with my post multiple times, even trading around it in ways that caught me off guard. That small sequence of interactions turned what was just a casual post into something unexpectedly meaningful and impressive, almost like a snapshot of how fast and alive the ecosystem felt in that moment. 7:19 pm.",
    website:     'https://belajarbase.fun/',
    twitter:     'https://x.com/arthousebase/status/2062954514790142067',
    telegram:    'https://t.me/',
    discord:     'https://discord.gg/',
    tags:        ['DeFi', 'Yield'],
  },
};
