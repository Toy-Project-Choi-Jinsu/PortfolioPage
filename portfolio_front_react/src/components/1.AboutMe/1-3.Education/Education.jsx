import React from 'react'
import styled from 'styled-components'

const Education = () => {
    return (
        <EducationBox>
            <Title>EDUCATION</Title>
            <Contents>
                <div className='dateAndSchool'>
                    <div className='date'>2015.03 ~ 2021.02</div>
                    <div className='school'>순천대학교</div>
                </div>
                <div className='majorAndScore'>
                    <div className='major'>기계공학전공</div>
                    <div className='score'>3.49 / 4.5</div>
                </div>
            </Contents>
        </EducationBox>
    )
}

export default Education

const EducationBox = styled.div`
    width: 100%;
    margin-top: 30px;
`

const Title = styled.h2`
    color: #5477AD;
`

const Contents = styled.div`
    display: flex;
    width: 100%;

    & .dateAndSchool{
        width: 20%;
        & .date{
            font-size: 14px;
            color: grey;
        }

        & .school{
            font-weight: bold;
        }
    }

    @media only screen and (max-width: 430px) {
        flex-direction: column;

        & .dateAndSchool{
            width: 100%;
            margin-bottom: 10px;
            & .date{
                font-size: 14px;
                color: grey;
            }

            & .school{
                font-weight: bold;
            }
        }
    }
`