export default function TokenHeldTable() {
    const titles = ["S/N", "Token", "Creator", "Amount(TON)"]
    const data = [
        {
            token: "Space Man ($SPACE)",
            amount: 0.5,
            creator: "FagHH"
        },
        {
            token: "Space Man ($SPACE)",
            amount: 1.0,
            creator: "YrTTr"
        },
        {
            token: "Space Man ($SPACE)",
            amount: 2.5,
            creator: "POpps"
        },
        {
            token: "Space Man ($SPACE)",
            amount: 0.75,
            creator: "BGyyS"
        },
        {
            token: "Space Man ($SPACE)",
            amount: 3.2,
            creator: "NHyui"
        }
    ];



    return (
        <div className='tableDiv'>
            <table className='table'>
                <thead>
                    <tr className=''>
                        {titles.map((title, key) => (
                            <th className='tableHead' key={key}>{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='tableBody bg-red-500 w-full'>
                    {data.map((elem, key) => (
                        <tr className='tableRow'>
                            <td className='tableData'>{key + 1}</td>
                            <td className='tableData1'>
                                <span className="tableRect"></span>
                                {elem.token}
                            </td>
                            <td className='tableData1'>
                                <span className="tableCircle"></span>
                                {elem.creator}
                            </td>
                            <td className='tableData'>{elem.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    )
}
