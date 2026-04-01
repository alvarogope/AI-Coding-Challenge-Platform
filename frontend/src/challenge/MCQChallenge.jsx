import "react"
import {useLocation} from "react-router-dom"
import {SignIn, SignUp, SignedIn, SignedOut} from "@clerk/clerk-react"

export function AuthenticationPage() {
    const {pathname} = useLocation()

    return <div className="auth-container">
        <SignedOut>
            {pathname.startsWith("/sign-in")
                ? <SignIn routing="path" path="/sign-in"/>
                : <SignUp routing="path" path="/sign-up"/>
            }
        </SignedOut>
        <SignedIn>
            <div className="redirect-message">
                <p>You are already signed in.</p>
            </div>
        </SignedIn>
    </div>
}port "react"
import {useState} from "react"

export function MCQChallenge({challenge, showExplanation = false}) {
    const [selectedOption, setSelectedOption] = useState(null)
    const [shouldShowExplanation, setShouldShowExplanation] = useState(showExplanation)

    const options = typeof challenge.options === "string"
        ? JSON.parse(challenge.options)
        : challenge.options

    const handleOptionsSelect = (index) => {
    if (selectedOption !== null) return;
    setSelectedOption(index)
    setShouldShowExplanation(true)
    }

    const getOptionClass = (index) => {
        if (selectedOption === null) return "option"

        if (index === challenge.correct_answer_id) {
            return "option correct"
        }
        if (selectedOption === index && index !== challenge.correct_answer_id) {
            return "option incorrect"
        }
        return "option"
    }

    return <div className="challenge-display">
        <p><strong>Difficulty</strong>: {challenge.difficulty}</p>
        <p className="challenge-title">{challenge.title}</p>
        <div className="options">
            {options.map((option, index) =>(
                <div
                    className={getOptionClass(index)}
                    key={index}
                    onClick={() => handleOptionsSelect(index)}
                >
                    {option}
                </div>
            ))}
        </div>
        {shouldShowExplanation && (
            <div className="explanation">
                <h4>Explanation</h4>
                <p>{challenge.explanation}</p>
            </div>
        )}
    </div>
}
