export const NameReversed = (props) => {
    const {name, fun} = props
    return (
        <p className="name-reversed">
            Also, {name} backwards is {fun}
        </p>
    )
}