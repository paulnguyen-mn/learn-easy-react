import { useState } from 'react'
import './App.css'
import { Footer, Header } from './components/common'
import { MyText } from './features/labs/MyText'
import { StudentCard } from './features/labs/Student'
import { Student } from './models/student'

function App() {
  const [count, setCount] = useState(0)

  function abc() {}

  const john: Student = {
    name: 'John',
    age: 3,
  }

  function handleStudentClick(student: Student) {
    console.log('student click', student)
  }

  return (
    <div>
      <Header></Header>
      <StudentCard student={john} onClick={handleStudentClick} />
      <Footer></Footer>

      <MyText>hello world</MyText>
      <MyText>{123}</MyText>
      <MyText>{null}</MyText>
      <MyText>{undefined}</MyText>
      <MyText>{true}</MyText>

      <MyText>
        <div>hello div</div>
      </MyText>

      <MyText>
        <div>hello div 1</div>
        <div>hello div 2</div>
      </MyText>
    </div>
  )
}

export default App
