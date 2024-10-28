import Framer from "@/components/Layout/Framer"
import Main from "@/components/Post/Main"

type Params = {
    params: {
        id: string
    }
}

export default function page({ params }: Params) {
    const { id } = params
    return (
        <Framer>
            <Main />
        </Framer>
    )
}
