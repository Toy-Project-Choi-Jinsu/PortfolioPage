import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    const setContactData = (title, data) => {
        return (
            <ContactDatas>
                <div className='contactTitle'>{title}</div>
                <a className='contactData' href={data}>{data}</a>
            </ContactDatas>
        );
    }
    return (
        <ContactBox>
            <Title>CONTACT</Title>
            {setContactData('Email', 'jschoi9160@naver.com')}
            {setContactData('Github', 'https://github.com/suvven1')}
            {setContactData('Velog', 'https://velog.io/@suvven1')}
        </ContactBox>
    )
}

export default Contact

const ContactBox = styled.div`
    width: 40%;
    margin-top: -40px;
`

const Title = styled.h2`
    color: #5477AD;
`

const ContactDatas = styled.div`
    display: flex;
    width: 100%;

    & .contactTitle{
        color: #5477AD;
        font-weight: bold;
        margin-right: 10px;
    }

    & .contactData{
        margin-bottom: 5px;
        text-decoration: none;
        color: black;
    }
`
