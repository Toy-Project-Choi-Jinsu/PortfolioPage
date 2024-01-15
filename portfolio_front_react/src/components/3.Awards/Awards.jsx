import React from 'react'
import styled from 'styled-components'

const Awards = ({ awards }) => {
    return (
        <AwardsBox ref={awards}>
            <Title>🏆AWARDS</Title>
            <Contents>
                <div className='dateAndSchool'>
                    <div className='date'>2023.06 ~ 2023.12</div>
                    <div className='school'>광주인공지능사관학교</div>
                    <div className='date'>APP특화반</div>
                </div>
                <div className='majorAndScore'>
                    APP특화반에서 엄청나게 많은 기술들을 찍먹하고 프로젝트 2개를 진행했습니다. 첫번째는 여행객 매칭 플랫폼이였고 두번째는 독거노인을 위한 헬스케어 앱이였습니다.
                </div>
            </Contents>
            <hr color={"whitesmoke"} />
        </AwardsBox>
    )
}

export default Awards

const AwardsBox = styled.div`
  /* height: 500px; */
  margin-bottom: 50px;
`;

const Title = styled.h1`
    color: #5477AD;
`

const Contents = styled.div`
    display: flex;
    width: 100%;

    & .dateAndSchool{
        width: 400px;
        & .date{
            font-size: 14px;
            color: grey;
        }

        & .school{
            font-weight: bold;
            margin: 3px 0 3px 0;
        }
    }
`