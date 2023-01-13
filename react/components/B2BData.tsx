/* eslint-disable react/jsx-key */

import React, { useState, useEffect } from 'react'

// import EditData from './B2BEditing'

// import Useredit from './B2BEditing'
const initialState = {
  name: '',
  age: '',
  suscribe: '',
  id: null,
}

export default function TotalData(props: {
  // statusId: any
  getData: any
  setGetData(json: any): unknown
  // setStatusId: (arg0: any) => void
}): JSX.Element {
  // const [getData, setGetData] = useState<any[]>([])
  const [formData, setFormData] = useState(initialState)
  const [statusId, setStatusId] = useState(null)
  const [editData, setEditData] = useState(initialState)

  // eslint-disable-next-line no-console
  console.log(setStatusId, editData, setEditData)
  async function getDocs() {
    const response = fetch(
      '/api/dataentities/LD/search?_fields=name,age,suscribe,id'
    )

    const json = await (await response).json()

    props.setGetData(json)
    // eslint-disable-next-line no-console
    console.log(json)
  }

  useEffect(() => {
    getDocs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function deleteData(id: any) {
    // eslint-disable-next-line no-alert, no-template-curly-in-string
    fetch(`/api/dataentities/LD/documents/${id}`, {
      method: 'DELETE',
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getDocs()
      })
    })
  }

  function handleEdit(data: any) {
    setStatusId(data.id)
    setEditData(data)
    /*  async function updateData() {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editData),
      }

      const response = await fetch(
        `/api/dataentities/LD/documents/${id}`,
        requestOptions
      )

      const datosRes = await response.json()

      return datosRes
      //  setEditData(data.id)
    }

    updateData() */
    // eslint-disable-next-line no-console
    console.log(data.id)
  }

  // eslint-disable-next-line no-console
  console.log(editData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line no-console
    //    console.log(e.target.value)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditData({
      ...editData,
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
            'Content-Type': 'application/json',
            Accept: 'application/vnd.vtex.ds.v10+json',
            VtexIdclientAutCookie:
              'eyJhbGciOiJFUzI1NiIsImtpZCI6IkQzNjRFOTJEN0Q0MDRFRkIzRTRGOEI4ODgxOUE0RjJBNjRCMDExMDAiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJkaWFubmUubWFydGluZXpAaXRnbG9iZXJzLmNvbSIsImFjY291bnQiOiJpdGdsb2JlcnNwYXJ0bmVyY2wiLCJhdWRpZW5jZSI6ImFkbWluIiwic2VzcyI6IjhiMjFiMzkxLWZmZjQtNDBiNi1iZjg5LWNhNDA2NzY5MzEyZCIsImV4cCI6MTY3MzcwNTc1MiwidXNlcklkIjoiNGRhY2Q3MjgtZTBmNS00Y2JkLWEwNTYtZDdkNGQyMGFmNmJhIiwiaWF0IjoxNjczNjE5MzUyLCJpc3MiOiJ0b2tlbi1lbWl0dGVyIiwianRpIjoiZWNlMmU2MzUtMjYyZS00NTJlLThhNTAtNzIzZmNmYTAzYmRhIn0.qHvzEdTCFXogzAnzLnQRHAEEtUhzME6KvGNtVIzN_Nj523YUWv32vyw96Isrr1yU-d-csQsmLKF42ov2KamSlg',
          },
          body: JSON.stringify(formData),
        }

        const res = await fetch('/api/dataentities/LD/documents', config)

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

  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    async function updateData(id: any) {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editData),
      }

      // eslint-disable-next-line no-console
      console.log(id)
      const response = await fetch(
        `/api/dataentities/LD/documents/${id}`,
        requestOptions
      )

      const datosRes = await response.json()

      return datosRes
      //  setEditData(data.id)
    }

    updateData(editData.id)
  }

  async function getId(id: any) {
    try {
      const response = fetch(`/api/dataentities/LD/documents/${id}`)

      const json = await (await response).json()

      return json

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // eslint-disable-next-line no-console

      // eslint-disable-next-line no-console
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  const inputId = getId(statusId).then((response) => response)

  // eslint-disable-next-line no-console
  console.log(inputId)

  const tbData = props.getData.map((data: any) => (
    <tr key={data.id}>
      <td
        style={{
          textAlign: 'center',
          paddingBottom: '.5rem',
          paddingTop: '.5rem',
          borderTop: '2px solid #e6e6e6',
        }}
      >
        {data.name}
      </td>
      <td style={{ textAlign: 'center', borderTop: '2px solid #e6e6e6' }}>
        {data.age}
      </td>
      <td style={{ textAlign: 'center', borderTop: '2px solid #e6e6e6' }}>
        {String(data.suscribe)}
      </td>
      <td>
        <button onClick={() => deleteData(data.id)}>Delete</button>
      </td>
      <td>
        <button onClick={() => handleEdit(data)}>Edit</button>
      </td>
    </tr>
  ))

  return (
    <>
      {statusId === null ? (
        <>
          <h1
            style={{
              textAlign: 'center',
              paddingBottom: '.5rem',
              paddingTop: '.5rem',
            }}
          >
            Form
          </h1>
          <form
            style={{
              textAlign: 'center',
              paddingBottom: '2rem',
              paddingTop: '.5rem',
            }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Ingrese su nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Ingrese su edad"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Ingrese true o false"
              name="suscribe"
              value={formData.suscribe}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
            <h3>
              {formData.name} | {formData.age} | {formData.suscribe}
            </h3>
          </form>
        </>
      ) : (
        <>
          <h1
            style={{
              textAlign: 'center',
              paddingBottom: '.5rem',
              paddingTop: '.5rem',
            }}
          >
            Form
          </h1>
          <form
            style={{
              textAlign: 'center',
              paddingBottom: '2rem',
              paddingTop: '.5rem',
            }}
            onSubmit={handleEditSubmit}
          >
            <input
              type="text"
              placeholder="Ingrese su nombre"
              name="name"
              value={editData.name}
              onChange={handleEditChange}
            />
            <input
              type="number"
              placeholder="Ingrese su edad"
              name="age"
              value={editData.age}
              onChange={handleEditChange}
            />
            <input
              type="text"
              placeholder="Ingrese true o false"
              name="suscribe"
              value={editData.suscribe}
              onChange={handleEditChange}
            />
            <button type="submit">Update</button>
          </form>
        </>
      )}
      <div>
        <thead>
          <tr>
            <th
              style={{
                width: '100vh',
                borderTop: '2px solid #e6e6e6',
                paddingBottom: '.5rem',
                paddingTop: '.5rem',
              }}
            >
              Name
            </th>
            <th
              style={{
                width: '100vh',
                borderTop: '2px solid #e6e6e6',
                paddingBottom: '.5rem',
                paddingTop: '.5rem',
              }}
            >
              Age
            </th>
            <th
              style={{
                width: '100vh',
                borderTop: '2px solid #e6e6e6',
                paddingBottom: '.5rem',
                paddingTop: '.5rem',
              }}
            >
              Subscribe
            </th>
          </tr>
        </thead>
        <tbody>{tbData}</tbody>
      </div>
    </>
  )
}
