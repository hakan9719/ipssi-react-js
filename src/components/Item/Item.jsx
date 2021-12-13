export default function Item({title,status,price,children}) {
    return (
        <div style={{width: '400px',height:'350px',backgroundColor: 'gray', marginTop:'10px', borderRadius:'40px'}}>
            <h3>{title}</h3>
            <div style={status==="Libre" ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>{status}</div>
            <h4>{price}€</h4>
            <p>{children}</p>
        </div>
    )
}
