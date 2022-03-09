import { sha256 } from 'js-sha256'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import {Card,Field,Label,DisValue,Value, PeerWrapper, DataField,Button, Container, Heading} from './styles'

let initialState=[
    {
        blockId:1,
        nonce:11316,
        data:"",
        prevHash:"0000000000000000000000000000000000000000000000000000000000000000",
        hash:"000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
        isValid:true,
    },
    {
        blockId:2,
        nonce:35230,
        data:"",
        prevHash:"000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
        hash:"000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19",
        isValid:true
    },
    {
        blockId:3,
        nonce:12937,
        data:"",
        prevHash:"000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19",
        hash:"0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf",
        isValid:true
    },
    {
        blockId:4,
        nonce:35990,
        data:"",
        prevHash:"0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf",
        hash:"0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83",
        isValid:true
    },
    {
        blockId:5,
        nonce:56265,
        data:"",
        prevHash:"0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83",
        hash:"0000e4b9052fd8aae92a8afda42e2ea0f17972ea67cead67352e74dd6f7d217c",
        isValid:true
    },
]

function BlockChain() {
    const [peer,setPeer]=useState(initialState)

    const updatePeer=(field,value,index)=>{
        let temp=[...peer]
        if(field==="id")
        {
            temp[index].blockId=value
        }
        else if(field==="nonce")
        {
            temp[index].nonce=value
        }
        else if(field==="data")
        {
            temp[index].data=value
        }
        for(let i=index;i<temp.length;i++)
        {
            temp[i].hash=sha256(temp[i].blockId.toString()+temp[i].nonce+temp[i].data+temp[i].prevHash)
            if(i!==temp.length-1){
                temp[i+1].prevHash=temp[i].hash
            }
            if(temp[i].prevHash.slice(0,4)==="0000" && temp[i].hash.slice(0,4)==="0000"){
                temp[i].isValid=true
            }
            else{
                temp[i].isValid=false
            }
        }
        setPeer(temp)
    }

    const mine=(index)=>{
        console.log("Hey")
        let tempNonce=0
        let temp=[...peer]
        let tempHash=sha256(temp[index].blockId.toString()+tempNonce+temp[index].data+temp[index].prevHash)
        while(tempHash.slice(0,4)!=="0000"){
            tempNonce+=1
            tempHash=sha256(temp[index].blockId.toString()+tempNonce+temp[index].data+temp[index].prevHash)
        }
        temp[index].nonce=tempNonce
        temp[index].hash=tempHash
        if(index!==temp.length-1){
            temp[index+1].prevHash=temp[index].hash
        }
        for(let i=index+1;i<temp.length;i++)
        {
            temp[i].hash=sha256(temp[i].blockId.toString()+temp[i].nonce+temp[i].data+temp[i].prevHash)
            if(i!==temp.length-1){
                temp[i+1].prevHash=temp[i].hash
            }
            if(temp[i].prevHash.slice(0,4)==="0000" && temp[i].hash.slice(0,4)==="0000"){
                temp[i].isValid=true
            }
            else{
                temp[i].isValid=false
            }
        }
        temp[index].isValid=true
        setPeer(temp)
    }

    return (
        <>
            <NavBar current="hash"/>
            <Container>
                <Heading bold>BlockChain</Heading>
            </Container>
            <Container overflow>
                <PeerWrapper>
                    {
                        peer.map((block,index)=>(
                            <Card key={index} color={block.isValid?"#DFF0D8":"#EFD8D8"} margin>
                                <Field>

                                    <Label>Id: </Label>
                                    <Value onChange={e=>updatePeer("id",e.target.value,index)} value={block.blockId}/>
                                </Field>
                                <Field>
                                    <Label>Nonce:</Label>
                                    <Value onChange={e=>updatePeer("nonce",e.target.value,index)} value={block.nonce}/>
                                </Field>
                                <Field>
                                    <Label>Data:</Label>
                                    <DataField onChange={e=>updatePeer("data",e.target.value,index)} value={block.data}/>
                                </Field>
                                <Field>
                                    <Label>Prev:</Label>
                                    <DisValue disabled value={block.prevHash}/>
                                </Field>
                                <Field>
                                    <Label>Hash:</Label>
                                    <DisValue disabled value={block.hash}/>
                                </Field>
                                <Field>
                                    <Button onClick={()=>{mine(index)}}>Mine</Button>
                                </Field>
                            </Card>
                        ))
                    }
                </PeerWrapper>
            </Container>
        </>
    )
}

export default BlockChain