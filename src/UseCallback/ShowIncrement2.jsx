export const ShowIncrement2 = ({incrementFather}) => {
    
    return (
        <button
            onClick={() => incrementFather( 5 )}
        >
            Increment
        </button>
    )
}