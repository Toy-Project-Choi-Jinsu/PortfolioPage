import React from 'react'
import styled from 'styled-components'

const Intro = () => {
  return (
    <IntroBox>
      안녕하세요 최진수입니다. 백엔드 개발자가 되고 싶은데 자바가
      어렵네요 이게 참 스프링도 해야하고 갈길이 참 머네
      빨리 스프링 공부해서 백엔드도 구현해야하는데 그래도
      참 코딩은 재밌는거 같네요 이길로 전향하길 잘했어요
    </IntroBox>
  )
}

export default Intro

const IntroBox = styled.div`
  margin-top: 30px;
  width: 55%;

  @media only screen and (max-width: 430px) {
    width: 100%;
  }
`
