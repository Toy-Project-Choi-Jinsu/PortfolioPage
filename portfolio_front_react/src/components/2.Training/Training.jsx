import React from 'react'
import styled from 'styled-components'

const Training = ({ training }) => {
    return (
        <TrainingBox ref={training}>
            <Title>📚TRAINING</Title>
            <Contents>
                <div className='title'>
                    <div className='date'>2023.06 ~ 2023.12</div>
                    <div className='name'>광주인공지능사관학교</div>
                    <div className='class'>APP특화반</div>
                </div>
                <div className='content'>
                    APP특화반에서 엄청나게 많은 기술들을 찍먹하고 프로젝트 2개를 진행했습니다. 첫번째는 여행객 매칭 플랫폼이였고 두번째는 독거노인을 위한 헬스케어 앱이였습니다.
                </div>
            </Contents>
            <hr color={"whitesmoke"} />
        </TrainingBox>
    )
}

export default Training

const TrainingBox = styled.div`
  /* height: 500px; */
  margin-bottom: 50px;
`;

const Title = styled.h1`
    color: #5477AD;
`

const Contents = styled.div`
    display: flex;
    width: 100%;

    & .title{
        width: 400px;
        & .date, .class{
            font-size: 14px;
            color: grey;
        }

        & .name{
            font-weight: bold;
            margin: 3px 0 3px 0;
        }
    }

    & .content{
        width: 100%;
    }

    @media only screen and (max-width: 430px) {
        flex-direction: column;
        
        & .content{
            margin-top: 10px;
        }
    }
`