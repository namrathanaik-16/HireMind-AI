export default function Interview(){
    return(
        <div className="interview-page">
            <div className="interview-card">
                <p className="question-count">Question 1 of 10</p>
                <h2>Tell me about yourself.</h2>
                <textarea placeholder="Type your answer here..." rows="8"/>
                <button>Next Question</button>
            </div>
        </div>
    );
}