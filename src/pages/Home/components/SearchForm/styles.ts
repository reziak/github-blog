import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;

  input {
    padding: 0.75rem 1rem;
    outline: 0;
    width: 100%;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.input};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.colors.border};
    margin-bottom: 3rem;

    &::placeholder {
      color: ${(props) => props.theme.colors.label};
    }
  }
`
