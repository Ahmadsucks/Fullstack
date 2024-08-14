import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({ good, neutral, bad, all, average, positive}) => {
  if (all === 0) return (<p>No feedback given</p>)
 return (
  <>
  <h1>statistics</h1>
  <p>good {good}</p>
  <p>neutral {neutral}</p>
  <p>bad {bad}</p>
  <p>all {all}</p>
  <p>average {average}</p>
  <p>positive {positive} %</p>
  </>
 )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    let newGood = good + 1
    let newAll = all + 1
    setGood(newGood)
    setAll(newAll)
    setAverage((newGood - bad)/newAll)
    setPositive(newGood*100/newAll)
  }

  const handleNeutral = () => {
    let newNeutral = neutral + 1
    let newAll = all + 1
    setNeutral(newNeutral)
    setAll(newAll)
    setAverage((good - bad)/newAll)
    setPositive(good*100/newAll)
  }

  const handleBad = () => {
    let newBad = bad + 1
    let newAll = all + 1
    setBad(newBad)
    setAll(newAll)
    setAverage((good - newBad)/newAll)
    setPositive(good*100/newAll)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App