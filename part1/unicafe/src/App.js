import { useState, useSyncExternalStore } from "react"

const Title = ({text}) => <h1>{text}</h1>

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good,neutral,bad}) => 
  {

    if(good != 0 || neutral != 0 || bad != 0){
      return(
          <table>
            <thead>
            </thead>
            <tbody>
              <StatisticLine text = "Good" value = {good} />
              <StatisticLine text = "Neutral" value = {neutral} />
              <StatisticLine text = "Bad" value = {bad} />
              <StatisticLine text = "Average" value = {(good-bad)/(good+bad+neutral)} />
              <StatisticLine text = "Positive" value = {(good/(good+bad+neutral)*100)+"%"} />
            </tbody>
          </table>
      )
    }
    else{
      return(
        <>
          <p>No feedback given.</p>
        </>
      )
    }
  }

const Button = ({handleClick, text}) => <button onClick = {handleClick}>{text}</button>



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1)
  }
  const handleBad = () => {
    setBad(bad+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
  }

  return (
    <div className="App">
      <Title text = "Give Feedback" />
      <Button text = "Good" handleClick={handleGood}/>
      <Button text = "Neutral" handleClick={handleNeutral}/>
      <Button text = "Bad" handleClick={handleBad}/>
      <Title text = "Statistics" />
      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  );
}

export default App;
