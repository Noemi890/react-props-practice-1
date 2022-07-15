export const Title = (props) => {
    const {name} = props
    return (
        <h1 className="title">{`Welcome, ${name}`}</h1>
    )
}