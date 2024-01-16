import React from 'react'
import styled from 'styled-components'

const Awards = ({ awards }) => {
    return (
        <AwardsBox ref={awards}>
            <Title>🏆AWARDS</Title>
            <Contents>
                <div className='title'>
                    <div className='date'>2023.07 ~ 2023.08</div>
                    <div className='name'>핵심 프로젝트</div>
                    <div className='agency'>광주인공지능사관학교</div>
                </div>
                <div className='content'>
                    <div>5명의 팀원과 여행객 성향·리뷰기반 동행자 추천 및 매칭 플랫폼 'Travel Mate'라는 프로젝트를 만들었고 우수상을 수상했습니다.</div>
                    <div>ㅇㅇㅇ</div>
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

    & .title{
        width: 400px;
        & .date, .agency {
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