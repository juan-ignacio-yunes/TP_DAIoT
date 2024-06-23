import React from "react"
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useDispositivoById } from "./../../api"
import { Layout } from "./../../Components"
import { Paper, Typography, Button } from "@mui/material"

interface ItemProps {
    item: any;
}
export const Item = ({ item }: ItemProps) => {
    const { _id, __v, ...allValues } = item || {};
    const keys = Object.keys(allValues || {});
    return (

        <Paper elevation={3} style={{ marginTop: 20, marginBottom: 20, padding: 20 }}>

            {
                keys?.map((key) => {
                    const value = item[key];
                    return (
                        <div key={key} style={{ display: "flex" }}>
                            <Typography variant="h6" style={{ fontWeight: "bold" }}>{key}</Typography>
                            <Typography variant="h6">: {value}</Typography>
                        </div>
                    );
                })
            }

        </Paper>

    )
}

const DispositivoId: NextPage = () => {
    const router = useRouter();
    const { dispositivoId } = router.query;
    const { dispositivo } = useDispositivoById(dispositivoId);
    const onBack = () => {
        router.back();
    }
    return (
        <Layout>
            <Item
                item={dispositivo}
            />
            <Button
                variant="outlined"
                onClick={onBack}
            >
                Volver
            </Button>
        </Layout>
    )
}

export default DispositivoId;
