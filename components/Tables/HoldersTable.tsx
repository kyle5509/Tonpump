export default function HoldersTable() {
    const titles = ["S/N", "Holders", "Percentage(%)"]
    const data = [
        {
            holders: "FAsdw",
            percentage: 56
        },
        {
            holders: "XyZpq",
            percentage: 45
        },
        {
            holders: "AbCde",
            percentage: 73
        },
        {
            holders: "LmNop",
            percentage: 88
        },
        {
            holders: "QrStu",
            percentage: 32
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
                                {elem.holders}
                            </td>
                            <td className='tableData'>{elem.percentage}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    )
}
