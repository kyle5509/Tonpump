import React from 'react'

export default function Table() {
    const titles = ["S/N", "Account", "Transaction Type", "Date", "Amount(TON)", "Amount(Space)"]
    const tableBody = [
        ["FaUdf", "Credit", "5 minutes ago", 350.67, 452.10],
        ["Ghyat", "Debit", "2 hours ago", 220.15, 315.42],
        ["OpYYa", "Credit", "1 day ago", 490.50, 672.80],
        ["JsdBB", "Debit", "3 days ago", 105.75, 130.00],
        ["WQeeR", "Credit", "1 week ago", 780.90, 890.25]
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
                    {tableBody.map((body, key) => (
                        <tr className='tableRow'>
                            <td className='tableData'>{key + 1}</td>
                            {body.map((el, keyy) => (
                                <>
                                    {keyy !== 0 ?
                                        <td className='tableData'>{el}</td>
                                        :
                                        <>
                                            <td className='tableData1'>
                                                <span className='h-9 w-9 rounded-full border-2'></span>
                                                <span className='font-semibold'>
                                                    {el}
                                                </span>
                                            </td>
                                        </>
                                    }
                                </>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
