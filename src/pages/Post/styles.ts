import styled from 'styled-components'

export const PostBodyContainer = styled.article`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  padding: 2.5rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.colors.base};
    font-weight: 400;
  }

  h1,
  h2 {
    border-bottom: 1px solid ${(props) => props.theme.colors.base};
    margin-bottom: 1rem;
  }

  h3,
  h4,
  h5,
  h6 {
    text-decoration: underline;
  }

  p {
    margin-bottom: 1.5rem;

    img {
      width: 100%;
      border-radius: 6px;
    }
  }
`
