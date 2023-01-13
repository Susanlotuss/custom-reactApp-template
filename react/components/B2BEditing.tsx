/* import React, { useState, useEffect } from 'react'

export default function EditData() {
  const [editData, setEditData] = useState<any[]>([])

  useEffect(() => {
    async function updateData(id?: any) {
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
  }, [editData])

  return <></>
} */

/* import React, { useState, useEffect } from 'react'

function Useredit() {
  const [useredit, setUseredit] = useState({
    name: '',
    age: '',
    suscribe: '',
    id: '',
  })

  const onClickHandler = () => {
    getEditData()
  }

  useEffect(() => {
    const edituserid = async () => {
      const reqdata = await fetch(`/api/dataentities/LD/documents/{id}`)

      const res = await reqdata.json()

      setUseredit(await res)
    }

    // eslint-disable-next-line no-console
    console.log(setUseredit)
    edituserid()
  }, [])

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUseredit({ ...useredit, [e.target.name]: e.target.value })
  }

  // eslint-disable-next-line no-console
  console.log(setUseredit)

  const handleUserupdate = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const res = await fetch(`/api/dataentities/LD/documents/{id}`)

    // eslint-disable-next-line no-console
    console.log(res)
  }

  return <React.Fragment />
}

export default Useredit */
