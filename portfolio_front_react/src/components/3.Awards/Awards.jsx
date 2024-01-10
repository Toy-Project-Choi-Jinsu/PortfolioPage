import React from 'react'
import styled from 'styled-components'

const Awards = ({ awards }) => {
    return (
        <AwardsBox ref={awards}>
            Awards
        </AwardsBox>
    )
}

export default Awards

const AwardsBox = styled.div`
  height: 500px;
`;