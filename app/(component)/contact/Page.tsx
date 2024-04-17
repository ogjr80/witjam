import { Contact24, Contact24Defaults } from "./ContactComponent"

export default async function Page(){
    return (
        <>
            <Contact24 {...Contact24Defaults} /> 
        </>
    )
}