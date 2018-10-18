import styled from 'styled-components'

export default styled.div`
  align-items: ${props => props.alignItems || 'flex-start'};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'initial')};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  margin: 8px 0;
  width: 100%;
`
