

type Props = {
    children: React.ReactNode
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            {children}
        </div>
    )
}
