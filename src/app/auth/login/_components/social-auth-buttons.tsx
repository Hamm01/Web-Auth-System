"use client"

import { BetterAuthActionButton } from '@/components/auth/better-auth-action-button'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { SUPPORT_OAUTH_PROVIDERS, SUPPORT_OAUTH_PROVIDERS_DETAILS } from '@/lib/o-auth-providers'

export function SocialAuthButtons() {

    return SUPPORT_OAUTH_PROVIDERS.map((provider) => {
        const Icon = SUPPORT_OAUTH_PROVIDERS_DETAILS[provider].Icon

        return (
            <BetterAuthActionButton variant="outline" key={provider} action={() => {
                return authClient.signIn.social({ provider, callbackURL: "/" })
            }}>
                <Icon />
                {SUPPORT_OAUTH_PROVIDERS_DETAILS[provider].name}
            </BetterAuthActionButton>
        )
    })
}