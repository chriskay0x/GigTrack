
function Greeting () {
    const name = "Christian"

    return (
        <section>
            <h2 className="text-3xl font-semibold mb-2 text-white">
                Good Morning, <span className="text-blue-400">{name}</span>
            </h2>
            <p className="text-slate-400">
                Welcome back to GigTrack, keep tracking all yours.
            </p>
        </section>
    )
}

export default Greeting