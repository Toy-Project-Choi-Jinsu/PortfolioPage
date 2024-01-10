import React from 'react'
import styled from 'styled-components'

const Training = ({ training }) => {
    return (
        <TrainingBox ref={training}>
            Training
        </TrainingBox>
    )
}

export default Training

const TrainingBox = styled.div`
  height: 500px;
`;