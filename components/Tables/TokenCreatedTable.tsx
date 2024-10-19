export default function TokenCreatedTable() {
    const titles = ["S/N", "Token", "Creator", "Amount(TON)"]
    const data = [
        {
            token: "Space Man ($SPACE)",
            amount: 0.5,
        },
        {
            token: "Space Man ($SPACE)",
            amount: 1.0,
        },
        {
            token: "Space Man ($SPACE)",
            amount: 2.5,
        },
        {
            token: "Space Man ($SPACE)",
            amount: 0.75,
        },
        {
            token: "Space Man ($SPACE)",
            amount: 3.2,
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
                <tbody className='tableBody'>
                    {data.map((elem, key) => (
                        <tr className='tableRow'>
                            <td className='tableData'>{key + 1}</td>
                            <td className='tableData1'>
                                <span className="tableCircle"></span>
                                {elem.token}
                            </td>
                            <td className='tableData'>You</td>
                            <td className='tableData'>{elem.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    )
}
