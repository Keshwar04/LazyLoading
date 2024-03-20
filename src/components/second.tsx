const Second = () => {
  return (
    <div>
        <div>Second</div>
        <ul>
            {[...Array.from(Array(10000).keys())].map((key)=>(
                <div key={key}>
                   <li>{key}</li>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default Second