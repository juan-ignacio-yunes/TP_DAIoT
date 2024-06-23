import React from "react"
import Link from 'next/link'
import { Paper, Typography, Grid } from "@mui/material"



export interface ItemProps {
    dispositivoId?: any;
    nombre?: any;
    ubicacion?: any;
    id?: any;
    _id?: any;
}
export const Item = ({ dispositivoId, nombre, ubicacion, id }: ItemProps) => {
    return (
        <Link href={`/dispositivos/${id}`}>
            <Paper elevation={3} style={{ margin: 10, padding: 20 }}>
                <div style={{ display: "flex" }}>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>nombre</Typography>
                    <Typography variant="h6">: {nombre}</Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>dispositivoId</Typography>
                    <Typography variant="h6">: {dispositivoId}</Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>ubicacion</Typography>
                    <Typography variant="h6">: {ubicacion}</Typography>
                </div>
            </Paper>
        </Link>
    )
}
export default Item;