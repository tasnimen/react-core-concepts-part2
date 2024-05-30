export default function Friend({friend}){
    const { name, email} = friend;
    return (
        <div className="Box">
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
        </div>
    )

}