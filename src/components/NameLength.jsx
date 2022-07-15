export const NameLength = (props) => {
    const {name, length} = props
    return (
        <p className="name-length">
            Did you know that {name} is {length} characters long?!
        </p>
    )
}