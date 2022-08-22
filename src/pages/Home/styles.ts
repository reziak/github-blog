import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 54rem;
  margin: 4.5rem auto;
`

export const Publications = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  strong {
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.subtitle};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.span};
  }
`
