import { CodeSnippetsContainer } from './styles'

export const CodeSnippets = ({ content }: any) => {
  const language = content.props.className.split('-')
  const code = content.props.children[0]

  return (
    <CodeSnippetsContainer
      language={language[1]}
      useInlineStyles={false}
      PreTag="div"
    >
      {code}
    </CodeSnippetsContainer>
  )
}
