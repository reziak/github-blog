import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2rem 2.5rem;
  margin: -84px auto 0;
  position: relative;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  img {
    width: 148px;
    height: 148px;
    border-radius: 10px;
  }
`

export const ProfileInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 148px;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.title};
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.colors.base};
      font-size: 0.75rem;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border 0.2s;

      &:hover {
        border-color: ${(props) => props.theme.colors.base};
      }
    }
  }

  div {
    flex: 1;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    p {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span {
        color: ${(props) => props.theme.colors.subtitle};
      }

      svg {
        color: ${(props) => props.theme.colors.label};
        font-size: 1.125rem;
      }
    }
  }
`
