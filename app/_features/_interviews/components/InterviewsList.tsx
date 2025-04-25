import InterviewCard from "./InterviewCard"


const InterviewsList = ({interviews}:{interviews:Interview[]}) => {
    return (
        <div>
            {interviews.map(interview => (
                <InterviewCard {...interview} key={interview.id}/>
            ))}
        </div>
    )
}

export default InterviewsList
