/* eslint-disable prettier/prettier */

import React, { useState } from 'react'

import TotalData from './B2BData'


 type Data = {
  name: '',
  age: '',
  suscribe: '',
}

export default function Forms(): JSX.Element {
 // const [formData, setFormData] = useState(initialState)
 // const [editData, setEditData] = useState(initialState)
  const [statusId, setStatusId] = useState(null)
  const [getData, setGetData] = useState<Data[]>([])


//  const [getData, setGetData] = useState<any[]>([])
// eslint-disable-next-line no-console
console.log( statusId, getData , setStatusId)
/* useEffect(() =>{
  if(editData) {
    setFormData(editData)
  } else {
    setFormData(initialState)
  }
}, [editData]) */


/*  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line no-console
    //    console.log(e.target.value)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.id === null) {
  try {
    const config = {
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
        'Accept':'application/vnd.vtex.ds.v10+json',
        'VtexIdclientAutCookie':'eyJhbGciOiJFUzI1NiIsImtpZCI6IjU3ODYyMjhCQUZDRjMyODQ4OEYzNTc5ODFBNDVDMjA2QUUwNUQ4MUYiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJkaWFubmUubWFydGluZXpAaXRnbG9iZXJzLmNvbSIsImFjY291bnQiOiJpdGdsb2JlcnNwYXJ0bmVyY2wiLCJhdWRpZW5jZSI6ImFkbWluIiwic2VzcyI6IjI0YmEwZDUwLWRiYTQtNDczNS04ZWZkLWMyMmY2MzMzNDk5NyIsImV4cCI6MTY3MzYxOTY0NCwidXNlcklkIjoiNGRhY2Q3MjgtZTBmNS00Y2JkLWEwNTYtZDdkNGQyMGFmNmJhIiwiaWF0IjoxNjczNTMzMjQ0LCJpc3MiOiJ0b2tlbi1lbWl0dGVyIiwianRpIjoiYzcyYTc0MzctMGIwNi00OTFmLTkzMDQtZWY5MmUxNDQzZTlmIn0.8c8JLKRR8O0duU4lUf4QCglMavjSZmPv-tY3vcJznuboN6eQi7BL5-rM3R7EXGGoGkPKjc0HgGH-pkfRdMW7Jg',
      },
      body: JSON.stringify(formData),
    }

    const res = await fetch(
      '/api/dataentities/LD/documents',
      config
    )

    const json = await res.json()

    // eslint-disable-next-line no-console
    console.log(json)
  // eslint-disable-next-line no-empty
  } catch (error) {}

  // eslint-disable-next-line no-console
  console.log(`${formData.name} ${formData.age} ${formData.suscribe}`)
} else {
  // eslint-disable-next-line no-alert
  // updateData()
}
}

async function getId(id: any) {
  try{
    const response = fetch(`/api/dataentities/LD/documents/${id}?_fields=name,age,suscribe,id`)

    const json = await (await response).json()

    return json

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line no-console

  // eslint-disable-next-line no-console
  } catch (error) {console.log(error)}

}

const inputId = getId(statusId).then(response => response)

// eslint-disable-next-line no-console
console.log(inputId) */
// eslint-disable-next-line no-console
// console.log(getId('1e35df0b-8d40-11ed-83ab-12734a9aa271'))
  /* async function updateData(id?: any) {
    try {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editData),
      }

      const response = await fetch(
        `/api/dataentities/LD/documents/${id}`,
        requestOptions
      )

      const data = await response.json()

      setEditData(data.id)
    // eslint-disable-next-line no-empty
    } catch (error){}
    }


updateData() */
/*    async function updateData(id?: any) {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editData),
      }

      const response = await fetch(
        `/api/dataentities/LD/documents/${id}`,
        requestOptions
      )

      const data = await response.json()

      setEditData(data.id)
    }

    updateData()

/*  function selectData(id: any) {
    console.warn('function select', formData[id - 1])
    setGetData(id)
  } */
/*  useEffect(() => {
    async function getDocs() {
      const response = fetch('/api/dataentities/LD/search?_fields=name,age,suscribe')
      const json = await (await response).json()

      setGetData(json)
      // eslint-disable-next-line no-console
      console.log(json)
    }

    getDocs()
  }, []) */

/*  useEffect(() => {
    fetch('/api/dataentities/LD/search?_fields=_all')
    .then(response => {
      return response.json();
    })
    .then(response => {
      // eslint-disable-next-line no-console
      console.log(response)
    })
  }) */

  return (
    <>
      <TotalData getData={getData} setGetData={setGetData} />
    </>
  )
}

/* interface IData {
  title: string
  done: boolean
}

export default function Forms(): JSX.Element {
  const [formData, setFormData] = useState('')
  const [data, setData] = useState<IData[]>([])

  const addData = (title: string) => {
    const newData = [...data, { title, done: false }]

    setData(newData)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addData(formData)
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setFormData(e.target.value)} />
        <button>submit</button>
      </form>
    </>
  )
} */

/* const defaultFormData = {
  title: '',
  body: '',
}

export default function Forms() {
  const [formData, setFormData] = useState(defaultFormData)
  const { title, body } = formData

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // eslint-disable-next-line no-console
    console.log(formData)

    setFormData(defaultFormData)
  }

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => onChange(e)}
        />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input
          type="text"
          id="body"
          value={body}
          onChange={(e) => onChange(e)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
} */
