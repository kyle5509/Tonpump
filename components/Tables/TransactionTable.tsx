export default function TransactionTable() {
    const titles = ["S/N", "Account", "Transaction Type", "Date", "Amount(TON)", "Amount(Space)"]
    const data = [
        {
            Account: "FaUdf",
            TransactionType: "Credit",
            Date: "5 minutes ago",
            AmountTON: 350.67,
            AmountSpace: 452.10
        },
        {
            Account: "Ghyat",
            TransactionType: "Debit",
            Date: "2 hours ago",
            AmountTON: 220.15,
            AmountSpace: 315.42
        },
        {
            Account: "OpYYa",
            TransactionType: "Credit",
            Date: "1 day ago",
            AmountTON: 490.50,
            AmountSpace: 672.80
        },
        {
            Account: "JsdBB",
            TransactionType: "Debit",
            Date: "3 days ago",
            AmountTON: 105.75,
            AmountSpace: 130.00
        },
        {
            Account: "WQeeR",
            TransactionType: "Credit",
            Date: "1 week ago",
            AmountTON: 780.90,
            AmountSpace: 890.25
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
                                {elem.Account}
                            </td>
                            <td className='tableData'>{elem.TransactionType}</td>
                            <td className='tableData'>{elem.Date}</td>
                            <td className='tableData'>{elem.AmountTON}</td>
                            <td className='tableData'>{elem.AmountSpace}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    )
}
