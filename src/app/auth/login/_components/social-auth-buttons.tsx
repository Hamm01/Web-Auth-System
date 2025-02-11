"use client"

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { SUPPORT_OAUTH_PROVIDERS, SUPPORT_OAUTH_PROVIDERS_DETAILS } from '@/lib/o-auth-providers'

export function SocialAuthButtons() {

    return SUPPORT_OAUTH_PROVIDERS.map((provider) => {
        const Icon = SUPPORT_OAUTH_PROVIDERS_DETAILS[provider].Icon

        return <Button variant="outline" key={provider} className='w-full' onClick={() => {
            authClient.signIn.social({ provider, callbackURL: "/" })
        }}>
            <Icon />
            {SUPPORT_OAUTH_PROVIDERS_DETAILS[provider].name}
        </Button>
    })
}