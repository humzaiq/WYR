import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom"
import UnansweredPage from './UnansweredPage'
import AnsweredPage from './AnsweredPage'
import PageNotFoundError from './PageNotFoundError'

function Question(props) {
        const [selectedOption, setSelectedOption] = useState('');
        const { id } = useParams();
        const navigate = useNavigate();
        const {
            questions,
            users,
            authenticatedUser,
            dispatch } = props;

        const question = questions[id]

        useEffect(() => {
            if(!question) {
                navigate('/error')
            }
        }, [id, question, navigate])

        const checkIfAnswered = question && question.optionOne.votes.includes(authenticatedUser) || question && question.optionTwo.votes.includes(authenticatedUser)

        return (
            <>
                {!checkIfAnswered ?
                    <UnansweredPage />
                    :
                    <AnsweredPage />
                }
            </>
        )
    }

  function mapStateToProps ({questions, users, authenticatedUser}, props) {
    return {
        questions,
        users,
        authenticatedUser}
}

export default connect(mapStateToProps)(Question);


