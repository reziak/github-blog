import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'

export const CodeSnippetsContainer = styled(SyntaxHighlighter)`
  background-color: ${(props) => props.theme.colors.post};
  padding: 1rem;
  border-radius: 6px;
  border: 1px dashed ${(props) => props.theme.colors.label};
  color: ${(props) => props.theme.colors.title};

  [class*='-symbol'] {
    color: ${(props) => props.theme.colors['pre-symbol']};
  }

  [class*='-keyword'] {
    color: ${(props) => props.theme.colors['pre-keyword']};
  }

  [class*='-built_in'] {
    color: ${(props) => props.theme.colors['pre-vars']};
    font-style: italic;
  }

  [class*='-comment'] {
    color: ${(props) => props.theme.colors.label};
  }
`
