import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { api } from '../lib/api'

type OwnerProfile = {
  login: string
  name: string
  avatarUrl: string
  htmlUrl: string
  company: string | null
  bio: string
  followers: number
}

export type PostType = {
  id: number
  title: string
  htmlUrl: string
  user: string
  body: string
  comments: number
  createdAt: string
}

type GithubContextType = {
  ownerProfile: OwnerProfile
  posts: PostType[]
  numberOfPosts: number
  fetchSinglePost: (id: number) => Promise<PostType>
}

export const GithubContext = createContext({} as GithubContextType)

interface GithubProviderProps {
  children: ReactNode
}

export const GithubProvider = ({ children }: GithubProviderProps) => {
  const [ownerProfile, setOwnerProfile] = useState<OwnerProfile>(
    {} as OwnerProfile,
  )
  const [posts, setPosts] = useState<PostType[]>([])

  const fetchOwner = useCallback(async () => {
    const response = await api.get('users/reziak')

    const owner = {
      login: response.data.login,
      name: response.data.name,
      avatarUrl: response.data.avatar_url,
      htmlUrl: response.data.html_url,
      company: response.data.company,
      bio: response.data.bio,
      followers: response.data.followers,
    }

    setOwnerProfile(owner)
  }, [])

  const fetchPosts = useCallback(async () => {
    const response = await api.get('repos/reziak/github-blog/issues')

    // https://api.github.com/search/issues?q=${query}%20repo:reziak/github-blog

    const issues = response.data.map((issue: Record<string, any>) => {
      return {
        id: issue.number,
        title: issue.title,
        htmlUrl: issue.htmlUrl,
        user: issue.user.login,
        body: issue.body,
        comments: issue.comments,
        createdAt: issue.created_at,
      }
    })

    setPosts(issues)
  }, [])

  const fetchSinglePost = async (id: number) => {
    const response = await api.get(`repos/reziak/github-blog/issues/${id}`)

    const issue = {
      id: response.data.number,
      title: response.data.title,
      htmlUrl: response.data.htmlUrl,
      user: response.data.user.login,
      body: response.data.body,
      comments: response.data.comments,
      createdAt: response.data.created_at,
    }

    return issue
  }

  useEffect(() => {
    fetchOwner()
  }, [fetchOwner])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const numberOfPosts = posts.length

  return (
    <GithubContext.Provider
      value={{ ownerProfile, posts, numberOfPosts, fetchSinglePost }}
    >
      {children}
    </GithubContext.Provider>
  )
}
