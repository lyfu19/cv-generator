import Education from './components/Education'
import Experience from './components/Experience'
import GeneralInfo from './components/GeneralInfo'

function App() {
  return (
    <div>
      <h1 className='main-title'>CV Generator</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  )
}

export default App
