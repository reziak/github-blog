import { createContext } from 'react'

type OwnerProfile = {
  login: string
  avatarUrl: string
  htmlUrl: string
  company: string | null
  bio: string
  followers: number
}

type GithubContextType = {
  ownerProfile: OwnerProfile
}

export const GithubContext = createContext({} as GithubContextType)
