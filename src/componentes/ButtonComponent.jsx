export default function ButtonComponent({ name, color }) {
    const misEstilo = {
        backgroundColor: color,
    }
    const handleClick = () => {
        alert(`Estas en la seccion de ${name}`);
    };
    return (<>
        <button onClick={handleClick} style={misEstilo}> {name} </button>


    </>

    );
}