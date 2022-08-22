import styled from 'styled-components'

export const PostCardContainer = styled.a`
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.post};
  padding: 2rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  border: 2px solid ${(props) => props.theme.colors.post};
  transition: border-color 0.2s;

  &:hover {
    border-color: ${(props) => props.theme.colors.label};
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    strong {
      flex: 0.9;
      font-size: 1.25rem;
      color: ${(props) => props.theme.colors.title};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.span};
    }
  }
`
