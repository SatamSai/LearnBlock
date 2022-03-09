import { sha256 } from 'js-sha256'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { Container,Card, Label, DataField, Field, DisValue, Value, Button,Heading } from './styles'

function Block() {
    const [data,setData]=useState('')
    const [nonce,setNonce]=useState(72608)
    const [hash,setHash]=useState('0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a')
    const [blockId,setBlockId]=useState(1)
    const [isValid,setIsValid]=useState(true)

    const mine=()=>{
        let tempNonce=0
        let tempHash=sha256(blockId.toString()+tempNonce+data)
        while(tempHash.slice(0,4)!=="0000"){
            tempNonce+=1
            tempHash=sha256(blockId.toString()+tempNonce+data)
        }
        setIsValid(true)
        setNonce(tempNonce)
    }

    useEffect(()=>{
        let tempHash=sha256(blockId.toString()+nonce+data)
        setHash(tempHash)
        if(tempHash.slice(0,4)==="0000")
        {
            setIsValid(true)
        }
        else{
            setIsValid(false)
        }
    },[blockId,nonce,data])
    return (
        <>
            <NavBar current="hash"/>
            <Container>
                <Heading bold>Block</Heading>
            </Container>
            <Container>
                    <Card color={isValid?"#DFF0D8":"#EFD8D8"}>
                        <Field>
                            <Label>Id:</Label>
                            <Value onChange={e=>{setBlockId(e.target.value)}} value={blockId}/>
                        </Field>
                        <Field>
                            <Label>Nonce: </Label>
                            <Value onChange={e=>{setNonce(e.target.value)}} value={nonce}/>
                        </Field>
                        <Field>
                            <Label>Data: </Label>
                            <DataField onChange={e=>{setData(e.target.value)}} value={data}/>
                        </Field>
                        <Field>
                            <Label>Hash: </Label>
                            <DisValue disabled value={hash}/>
                        </Field>
                        <Field>
                        <Button onClick={mine}>Mine</Button>
                        </Field>
                    </Card>
            </Container>
        </>
    )
}

export default Block