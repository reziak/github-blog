import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GithubContext, PostType } from '../../contexts/GithubContext'
import { PostHeader } from './components/PostHeader'

type FormattedPostType = PostType & {
  formattedDate: string
}

export const Post = () => {
  const navigate = useNavigate()

  const params = useParams()

  const { fetchSinglePost } = useContext(GithubContext)

  const [post, setPost] = useState<FormattedPostType>()

  useEffect(() => {
    const fetchPost = async () => {
      if (params.id) {
        const singlePost = await fetchSinglePost(+params.id)

        const formattedDate = formatDistanceToNow(
          new Date(singlePost.createdAt),
          {
            // addSuffix: true,
            locale: ptBR,
          },
        )

        setPost({
          ...singlePost,
          formattedDate,
        })
      }
    }

    fetchPost()
  }, [fetchSinglePost, params.id, navigate])

  return (
    <>
      <PostHeader
        title={post?.title!}
        user={post?.user!}
        publishedDate={post?.formattedDate!}
        comments={post?.comments!}
        linkToGH={post?.htmlUrl!}
      />
      <article>
        <h1>Post</h1>
      </article>
    </>
  )
}
