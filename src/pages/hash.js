import React,{useState} from 'react'
import {sha256} from 'js-sha256'
import {Container, Card,Label,Field,DisValue,DataField, Heading} from './styles'
import NavBar from '../components/NavBar'

function Hash() {
    const [string,setString]=useState("")
    const [hash,setHash]=useState(sha256(string))
    return (
        <>
            <NavBar current="hash"/>
            <Container>
                    <Heading bold >Sha256 Hashing</Heading>
                    <Card>
                        <Field>
                            <Label>Data: </Label>
                            <DataField onChange={e=>{setString(e.target.value);setHash(sha256(e.target.value))}}/>
                        </Field>
                        <Field>
                            <Label>Hash: </Label>
                            <DisValue value={hash} disabled/>
                        </Field>
                    </Card>
            
            </Container>
        </>
    )
}

export default Hash