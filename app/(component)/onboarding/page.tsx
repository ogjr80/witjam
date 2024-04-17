import { Header76, Header76Defaults } from "./HeroComponent"
import { Layout16, Layout16Defaults } from "./LayoutComponent"
import { Layout242, Layout242Defaults } from "./Layout2Component"
import { Faq7, Faq7Defaults } from "./FAQComponent"

export default async function Page(){
    return (
        <>
            <Header76 {...Header76Defaults} />
            <Layout16 {...Layout16Defaults} /> 
            <Layout242 {...Layout242Defaults} /> 
            <Faq7 {...Faq7Defaults}/>
        </>
    )
}