export default function FollowersTable() {
    const titles = ["S/N", "Account", "Followers", "Following"]
    const data = [
        {
            account: "FAsdw",
            followers: 20,
            following: 20,
        },
        {
            account: "XyZpq",
            followers: 35,
            following: 30,
        },
        {
            account: "AbCde",
            followers: 50,
            following: 45,
        },
        {
            account: "LmNop",
            followers: 15,
            following: 25,
        },
        {
            account: "QrStu",
            followers: 40,
            following: 38,
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
                                {elem.account}
                            </td>
                            <td className='tableData'>{elem.followers}</td>
                            <td className='tableData'>{elem.following}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    )
}
