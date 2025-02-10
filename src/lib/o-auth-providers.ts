import { DiscordIcon, GitHubIcon } from '@/components/auth/o-auth-icons'
import { ComponentProps, ElementType } from 'react'

export const SUPPORT_OAUTH_PROVIDERS = ['github', 'discord'] as const

export type SupportOAuthProvider = (typeof SUPPORT_OAUTH_PROVIDERS)[number]

export const SUPPORT_OAUTH_PROVIDERS_DETAILS: Record<
  SupportOAuthProvider,
  { name: string; Icon: ElementType<ComponentProps<'svg'>> }
> = {
  discord: { name: 'Discord', Icon: DiscordIcon },
  github: { name: 'Github', Icon: GitHubIcon }
}
