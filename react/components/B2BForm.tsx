/* eslint-disable prettier/prettier */

import React, { useState } from 'react'

import TotalData from './B2BData'


 type Data = {
  name: '',
  age: '',
  suscribe: '',
}

export default function Forms(): JSX.Element {
  const [statusId, setStatusId] = useState(null)
  const [getData, setGetData] = useState<Data[]>([])


// eslint-disable-next-line no-console
console.log( statusId, getData , setStatusId)

  return (
    <>
      <TotalData getData={getData} setGetData={setGetData} />
    </>
  )
}
