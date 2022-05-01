import { Fragment, useEffect, useState } from 'react'
import './App.css'
import { Widget } from './components/common'
import { MainLayout } from './components/Layout'
import { MyText } from './features/labs/MyText'
import { StudentCard } from './features/labs/Student'
import { Student } from './models/student'

function App() {
  const [count, setCount] = useState(0)
  // const loading = false
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  function abc() {}

  const john: Student = {
    name: 'John',
    age: 3,
  }

  function handleStudentClick(student: Student) {
    console.log('student click', student)
  }

  // if (loading) return <p>loading...</p>

  // server
  const studentList = [
    { id: 1, name: 'easy' },
    { id: 5, name: 'frontend' },
  ]

  // client
  const statusList = ['pending', 'active']

  return (
    <div>
      <ul>
        {studentList.map((student) => (
          <Fragment key={student.id}>
            <li>{student.name}</li>
            <li>{student.name}</li>
          </Fragment>
        ))}
      </ul>

      <ul>
        {statusList.map((status, idx) => (
          <li key={idx}>{status}</li>
        ))}
      </ul>

      {/* {loading && <p>loading...</p>}

      {loading ? <p>loading...</p> : <p>data ready!</p>}
      <p>{loading ? 'loading...' : 'data ready!'}</p>

      {true && 'show true'}
      {false && 'show false'}
      {'' && 'show empty'}
      {'0' && 'show zero string'}
      {[].length > 0 && 'show zero'}
      {Boolean(NaN) && 'show NaN'}

      <MainLayout>
        <StudentCard student={john} onClick={handleStudentClick} />
      </MainLayout>

      <MyText></MyText>

      <MyText>easy frontend</MyText>
      <MyText>{123}</MyText>
      <MyText>{false}</MyText>
      <MyText>{null}</MyText>
      <MyText>{undefined}</MyText>

      <MyText>
        <span>easy</span>
      </MyText>

      <MyText>
        <span>easy</span> frontend
      </MyText>

      <MyText>
        <span>easy</span>
        <span>frontend</span>
      </MyText>

      <div>
        <div>
          <Widget title="Earning Overview">Chart 1</Widget>
        </div>

        <div>
          <Widget title="Revenue Sources">
            <div>Chart 2</div>
          </Widget>
        </div>

        <div>
          <Widget title="Earning Overview">
            <img src="sdfds" alt="" />
          </Widget>
        </div>

        <div>
          <Widget title="Earning Overview">Chart 4</Widget>
        </div>
      </div> */}
    </div>
  )
}

export default App
