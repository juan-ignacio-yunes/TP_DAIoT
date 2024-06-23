import React from "react"
import type { NextPage } from 'next'
import Link from 'next/link'
import { useDispositivoList } from "./../api"
import { Item, ItemProps, Layout } from "./../Components"
import { Paper, Typography, Grid } from "@mui/material"

const Home: NextPage = () => {

  const { dispositivos } = useDispositivoList();
  console.log(dispositivos);
  return (
    <Layout>
      {
        dispositivos?.map((element: ItemProps, index: number) => <Item key={index}
          dispositivoId={element.dispositivoId}
          nombre={element.nombre}
          ubicacion={element.ubicacion}
          id={element._id}
        />)
      }
    </Layout>
  )
}

export default Home
