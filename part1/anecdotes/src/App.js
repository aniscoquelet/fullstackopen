import { useState } from 'react'


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const selectRandomAnecdote = () => {
    let randomAnecdote = 0
    do{
      randomAnecdote = Math.floor(Math.random() * anecdotes.length)
    } while (randomAnecdote == selected)
    
    setSelected(randomAnecdote)
  }

  const voteForAnecdote = (anecdote) => {
    return (
      () => {
        const newVotes = [...votes]
        newVotes[anecdote]+=1
        setVotes(newVotes)
        let actualAnecdote = selected
        if (newVotes[anecdote] > votes[mostVotedAnecdote]){
          setMostVotedAnecdote(actualAnecdote)
          console.log(true)
        }
        }
    )
  }

  const checkBestAnecdote = () => {}
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState(0)
  console.log(mostVotedAnecdote)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <button onClick = {selectRandomAnecdote}>next anecdote</button>
      <p>{votes[selected]} votes</p>
      <button onClick = {voteForAnecdote(selected)}>Vote</button>
      <h1>Most voted anecdote</h1>
      <p>{anecdotes[mostVotedAnecdote]}</p>
      <p>{votes[mostVotedAnecdote]} votes</p>
    </div>
  )
}

export default App
