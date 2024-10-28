import React, { Dispatch, SetStateAction } from 'react'
import Title from '../General/Title'
import Links from '../General/Links'

type Props = {
    active: number
    setActive: Dispatch<SetStateAction<number>>
}

export default function HomeTab({ active, setActive }: Props) {
    return (
        <div className="flex items-center m-3 justify-between md:justify-start md:w-fit gap-12">
            <Title
                title="Tokens"
                parentStyle="h-[50px]"
            />
            <Links
                active={active}
                height="50px"
                setActive={setActive}
                textStyle="text-xs md:text-13 px-3 md:px-5"
                data={["All Posts", "New Projects"]}
            />
        </div>
    )
}
