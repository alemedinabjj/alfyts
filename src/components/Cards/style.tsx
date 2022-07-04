import styled from 'styled-components'


export const LinkDiv = styled.a`
  text-decoration: none;
  width: 326px; 
  height: 48px;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  gap: .5rem;
  transition: .3s;

  p {
    text-transform: uppercase;
    font-size: .8rem;
  }

  small {
    margin-left: auto;
    line-height: 32px;
    text-transform: lowercase;
    font-style: italic;
  }
  &:hover {
    transform: scale(1.05);
  }
`

export const Container = styled.div`


  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem ;
  margin-bottom: 2rem;
`